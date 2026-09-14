/*
uRang directory-first lookup worker
Deploy to Cloudflare Workers or adapt to another serverless host.

Required secret for the initial provider:
  IPQS_API_KEY

Optional environment:
  ALLOWED_ORIGIN=https://your-urang-site.example
*/

function cors(request, env){
  const origin=request.headers.get('Origin')||'';
  const allowed=String(env.ALLOWED_ORIGIN||'').trim();
  return allowed && origin!==allowed ? allowed : (origin||'*');
}
function reply(request,env,data,status=200){
  return new Response(JSON.stringify(data),{
    status,
    headers:{
      'content-type':'application/json; charset=utf-8',
      'access-control-allow-origin':cors(request,env),
      'access-control-allow-headers':'content-type',
      'access-control-allow-methods':'GET,POST,OPTIONS',
      'cache-control':'no-store'
    }
  });
}
function normaliseProviderCountry(code){
  const c=String(code||'GB').toUpperCase();
  return c==='GB'?'UK':c;
}
function safe(v){const s=String(v??'').trim();return !s||/^n\/a$/i.test(s)?'':s}
function ipqsRisk(d){
  const score=Number(d?.fraud_score);
  if(d?.recent_abuse===true||d?.spammer===true||score>=90)return'High-risk signals reported';
  if(d?.risky===true||score>=85)return'Risk signals reported';
  return'';
}
async function ipqsLookup(env,body){
  if(!env.IPQS_API_KEY)return null;
  const u=new URL('https://ipqualityscore.com/api/json/phone');
  u.searchParams.set('phone',body.e164);
  u.searchParams.append('country[]',normaliseProviderCountry(body.country));
  const r=await fetch(u.toString(),{
    headers:{'accept':'application/json','IPQS-KEY':env.IPQS_API_KEY}
  });
  if(!r.ok)return null;
  const d=await r.json();
  if(d?.success===false)return null;

  const name=safe(d?.name);
  const loc=[safe(d?.city),safe(d?.region),safe(d?.country)].filter(Boolean);
  const type=[safe(d?.line_type),safe(d?.carrier)].filter(Boolean).join(' · ');
  const risk=ipqsRisk(d);

  return{
    found:Boolean(name),
    title:name||'',
    location:[...new Set(loc)].join(', '),
    type,
    source:risk ? `Directory check · ${risk}` : 'Directory check completed.',
    confidence:name?'Directory match':'',
    provider:'IPQS',
    valid:d?.valid,
    active:d?.active,
    risk
  };
}

async function directoryLookup(env,body){
  /*
    Country routing happens here, not in the PWA.

    Today: IPQS is the universal first provider and supports international
    phone intelligence. Later you can add licensed country-specific sources
    (for example tellows Live API) ahead of or alongside IPQS for countries
    where they improve coverage.
  */
  return await ipqsLookup(env,body);
}

export default {
  async fetch(request,env){
    if(request.method==='OPTIONS')return reply(request,env,{ok:true});

    const url=new URL(request.url);

    if(request.method==='GET' && url.pathname.endsWith('/status')){
      const country=(url.searchParams.get('country')||'GB').toUpperCase();
      return reply(request,env,{
        ok:true,
        country,
        route:env.IPQS_API_KEY?'country-routed-live':'unconfigured',
        provider:env.IPQS_API_KEY?'IPQS':'none',
        version:'1.5.0',
        checkedAt:new Date().toISOString()
      });
    }

    if(request.method!=='POST' || !url.pathname.endsWith('/lookup')){
      return reply(request,env,{error:'Not found'},404);
    }

    let body;
    try{body=await request.json()}catch{return reply(request,env,{error:'Invalid JSON'},400)}
    if(!body?.e164)return reply(request,env,{error:'Phone number required'},400);

    const cache=await caches.open('urang-directory-v1');
    const cacheKey=new Request(`https://cache.urang.invalid/${encodeURIComponent(body.country||'GB')}/${encodeURIComponent(body.e164)}`);
    if(!body.refresh){
      const hit=await cache.match(cacheKey);
      if(hit)return new Response(hit.body,{status:hit.status,headers:hit.headers});
    }

    const result=await directoryLookup(env,body);
    if(!result){
      return reply(request,env,{
        found:false,
        status:env.IPQS_API_KEY?'unavailable':'unconfigured',
        source:env.IPQS_API_KEY
          ? 'The directory service did not return a usable response.'
          : 'No directory provider is configured on this uRang server.'
      });
    }

    const response=reply(request,env,result);
    const ttl=result.found?86400:14400;
    const cached=new Response(response.clone().body,{
      status:200,
      headers:{...Object.fromEntries(response.headers),'cache-control':`public,max-age=${ttl}`}
    });
    await cache.put(cacheKey,cached);
    return response;
  }
};
