const COUNTRIES = [{"code": "GB", "flag": "🇬🇧", "name": "United Kingdom", "dial": "44", "trunk": "0"}, {"code": "IE", "flag": "🇮🇪", "name": "Ireland", "dial": "353", "trunk": "0"}, {"code": "US", "flag": "🇺🇸", "name": "United States", "dial": "1", "trunk": "1"}, {"code": "CA", "flag": "🇨🇦", "name": "Canada", "dial": "1", "trunk": "1"}, {"code": "AU", "flag": "🇦🇺", "name": "Australia", "dial": "61", "trunk": "0"}, {"code": "NZ", "flag": "🇳🇿", "name": "New Zealand", "dial": "64", "trunk": "0"}, {"code": "FR", "flag": "🇫🇷", "name": "France", "dial": "33", "trunk": "0"}, {"code": "DE", "flag": "🇩🇪", "name": "Germany", "dial": "49", "trunk": "0"}, {"code": "ES", "flag": "🇪🇸", "name": "Spain", "dial": "34", "trunk": ""}, {"code": "IT", "flag": "🇮🇹", "name": "Italy", "dial": "39", "trunk": ""}, {"code": "NL", "flag": "🇳🇱", "name": "Netherlands", "dial": "31", "trunk": "0"}, {"code": "BE", "flag": "🇧🇪", "name": "Belgium", "dial": "32", "trunk": "0"}, {"code": "CH", "flag": "🇨🇭", "name": "Switzerland", "dial": "41", "trunk": "0"}, {"code": "AT", "flag": "🇦🇹", "name": "Austria", "dial": "43", "trunk": "0"}, {"code": "PT", "flag": "🇵🇹", "name": "Portugal", "dial": "351", "trunk": ""}, {"code": "SE", "flag": "🇸🇪", "name": "Sweden", "dial": "46", "trunk": "0"}, {"code": "NO", "flag": "🇳🇴", "name": "Norway", "dial": "47", "trunk": ""}, {"code": "DK", "flag": "🇩🇰", "name": "Denmark", "dial": "45", "trunk": ""}, {"code": "FI", "flag": "🇫🇮", "name": "Finland", "dial": "358", "trunk": "0"}, {"code": "IS", "flag": "🇮🇸", "name": "Iceland", "dial": "354", "trunk": ""}, {"code": "PL", "flag": "🇵🇱", "name": "Poland", "dial": "48", "trunk": ""}, {"code": "CZ", "flag": "🇨🇿", "name": "Czechia", "dial": "420", "trunk": ""}, {"code": "SK", "flag": "🇸🇰", "name": "Slovakia", "dial": "421", "trunk": "0"}, {"code": "HU", "flag": "🇭🇺", "name": "Hungary", "dial": "36", "trunk": "06"}, {"code": "RO", "flag": "🇷🇴", "name": "Romania", "dial": "40", "trunk": "0"}, {"code": "BG", "flag": "🇧🇬", "name": "Bulgaria", "dial": "359", "trunk": "0"}, {"code": "GR", "flag": "🇬🇷", "name": "Greece", "dial": "30", "trunk": ""}, {"code": "HR", "flag": "🇭🇷", "name": "Croatia", "dial": "385", "trunk": "0"}, {"code": "SI", "flag": "🇸🇮", "name": "Slovenia", "dial": "386", "trunk": "0"}, {"code": "RS", "flag": "🇷🇸", "name": "Serbia", "dial": "381", "trunk": "0"}, {"code": "BA", "flag": "🇧🇦", "name": "Bosnia & Herzegovina", "dial": "387", "trunk": "0"}, {"code": "ME", "flag": "🇲🇪", "name": "Montenegro", "dial": "382", "trunk": "0"}, {"code": "MK", "flag": "🇲🇰", "name": "North Macedonia", "dial": "389", "trunk": "0"}, {"code": "AL", "flag": "🇦🇱", "name": "Albania", "dial": "355", "trunk": "0"}, {"code": "UA", "flag": "🇺🇦", "name": "Ukraine", "dial": "380", "trunk": "0"}, {"code": "MD", "flag": "🇲🇩", "name": "Moldova", "dial": "373", "trunk": "0"}, {"code": "LT", "flag": "🇱🇹", "name": "Lithuania", "dial": "370", "trunk": "0"}, {"code": "LV", "flag": "🇱🇻", "name": "Latvia", "dial": "371", "trunk": ""}, {"code": "EE", "flag": "🇪🇪", "name": "Estonia", "dial": "372", "trunk": ""}, {"code": "TR", "flag": "🇹🇷", "name": "Türkiye", "dial": "90", "trunk": "0"}, {"code": "CY", "flag": "🇨🇾", "name": "Cyprus", "dial": "357", "trunk": ""}, {"code": "MT", "flag": "🇲🇹", "name": "Malta", "dial": "356", "trunk": ""}, {"code": "LU", "flag": "🇱🇺", "name": "Luxembourg", "dial": "352", "trunk": ""}, {"code": "LI", "flag": "🇱🇮", "name": "Liechtenstein", "dial": "423", "trunk": ""}, {"code": "MC", "flag": "🇲🇨", "name": "Monaco", "dial": "377", "trunk": ""}, {"code": "AD", "flag": "🇦🇩", "name": "Andorra", "dial": "376", "trunk": ""}, {"code": "SM", "flag": "🇸🇲", "name": "San Marino", "dial": "378", "trunk": ""}, {"code": "VA", "flag": "🇻🇦", "name": "Vatican City", "dial": "39", "trunk": ""}, {"code": "IN", "flag": "🇮🇳", "name": "India", "dial": "91", "trunk": "0"}, {"code": "PK", "flag": "🇵🇰", "name": "Pakistan", "dial": "92", "trunk": "0"}, {"code": "BD", "flag": "🇧🇩", "name": "Bangladesh", "dial": "880", "trunk": "0"}, {"code": "LK", "flag": "🇱🇰", "name": "Sri Lanka", "dial": "94", "trunk": "0"}, {"code": "NP", "flag": "🇳🇵", "name": "Nepal", "dial": "977", "trunk": "0"}, {"code": "CN", "flag": "🇨🇳", "name": "China", "dial": "86", "trunk": "0"}, {"code": "JP", "flag": "🇯🇵", "name": "Japan", "dial": "81", "trunk": "0"}, {"code": "KR", "flag": "🇰🇷", "name": "South Korea", "dial": "82", "trunk": "0"}, {"code": "HK", "flag": "🇭🇰", "name": "Hong Kong", "dial": "852", "trunk": ""}, {"code": "SG", "flag": "🇸🇬", "name": "Singapore", "dial": "65", "trunk": ""}, {"code": "MY", "flag": "🇲🇾", "name": "Malaysia", "dial": "60", "trunk": "0"}, {"code": "TH", "flag": "🇹🇭", "name": "Thailand", "dial": "66", "trunk": "0"}, {"code": "VN", "flag": "🇻🇳", "name": "Vietnam", "dial": "84", "trunk": "0"}, {"code": "ID", "flag": "🇮🇩", "name": "Indonesia", "dial": "62", "trunk": "0"}, {"code": "PH", "flag": "🇵🇭", "name": "Philippines", "dial": "63", "trunk": "0"}, {"code": "TW", "flag": "🇹🇼", "name": "Taiwan", "dial": "886", "trunk": "0"}, {"code": "AE", "flag": "🇦🇪", "name": "United Arab Emirates", "dial": "971", "trunk": "0"}, {"code": "SA", "flag": "🇸🇦", "name": "Saudi Arabia", "dial": "966", "trunk": "0"}, {"code": "QA", "flag": "🇶🇦", "name": "Qatar", "dial": "974", "trunk": ""}, {"code": "BH", "flag": "🇧🇭", "name": "Bahrain", "dial": "973", "trunk": ""}, {"code": "KW", "flag": "🇰🇼", "name": "Kuwait", "dial": "965", "trunk": ""}, {"code": "OM", "flag": "🇴🇲", "name": "Oman", "dial": "968", "trunk": ""}, {"code": "IL", "flag": "🇮🇱", "name": "Israel", "dial": "972", "trunk": "0"}, {"code": "JO", "flag": "🇯🇴", "name": "Jordan", "dial": "962", "trunk": "0"}, {"code": "EG", "flag": "🇪🇬", "name": "Egypt", "dial": "20", "trunk": "0"}, {"code": "MA", "flag": "🇲🇦", "name": "Morocco", "dial": "212", "trunk": "0"}, {"code": "DZ", "flag": "🇩🇿", "name": "Algeria", "dial": "213", "trunk": "0"}, {"code": "TN", "flag": "🇹🇳", "name": "Tunisia", "dial": "216", "trunk": ""}, {"code": "ZA", "flag": "🇿🇦", "name": "South Africa", "dial": "27", "trunk": "0"}, {"code": "NG", "flag": "🇳🇬", "name": "Nigeria", "dial": "234", "trunk": "0"}, {"code": "KE", "flag": "🇰🇪", "name": "Kenya", "dial": "254", "trunk": "0"}, {"code": "GH", "flag": "🇬🇭", "name": "Ghana", "dial": "233", "trunk": "0"}, {"code": "TZ", "flag": "🇹🇿", "name": "Tanzania", "dial": "255", "trunk": "0"}, {"code": "UG", "flag": "🇺🇬", "name": "Uganda", "dial": "256", "trunk": "0"}, {"code": "ZW", "flag": "🇿🇼", "name": "Zimbabwe", "dial": "263", "trunk": "0"}, {"code": "MX", "flag": "🇲🇽", "name": "Mexico", "dial": "52", "trunk": ""}, {"code": "BR", "flag": "🇧🇷", "name": "Brazil", "dial": "55", "trunk": "0"}, {"code": "AR", "flag": "🇦🇷", "name": "Argentina", "dial": "54", "trunk": "0"}, {"code": "CL", "flag": "🇨🇱", "name": "Chile", "dial": "56", "trunk": ""}, {"code": "CO", "flag": "🇨🇴", "name": "Colombia", "dial": "57", "trunk": ""}, {"code": "PE", "flag": "🇵🇪", "name": "Peru", "dial": "51", "trunk": "0"}, {"code": "VE", "flag": "🇻🇪", "name": "Venezuela", "dial": "58", "trunk": "0"}, {"code": "UY", "flag": "🇺🇾", "name": "Uruguay", "dial": "598", "trunk": "0"}, {"code": "PY", "flag": "🇵🇾", "name": "Paraguay", "dial": "595", "trunk": "0"}, {"code": "BO", "flag": "🇧🇴", "name": "Bolivia", "dial": "591", "trunk": "0"}, {"code": "CR", "flag": "🇨🇷", "name": "Costa Rica", "dial": "506", "trunk": ""}, {"code": "PA", "flag": "🇵🇦", "name": "Panama", "dial": "507", "trunk": ""}, {"code": "DO", "flag": "🇩🇴", "name": "Dominican Republic", "dial": "1", "trunk": "1"}, {"code": "JM", "flag": "🇯🇲", "name": "Jamaica", "dial": "1", "trunk": "1"}, {"code": "TT", "flag": "🇹🇹", "name": "Trinidad & Tobago", "dial": "1", "trunk": "1"}];

const CONFIG = window.URANG_CONFIG || {};
const els = {
  installGate:document.querySelector('#installGate'), welcome:document.querySelector('#welcomeScreen'), search:document.querySelector('#searchScreen'),
  country:document.querySelector('#countryScreen'), history:document.querySelector('#historyScreen'), about:document.querySelector('#aboutScreen'), result:document.querySelector('#resultScreen'),
  installButton:document.querySelector('#installButton'), installCopy:document.querySelector('#installCopy'), iosInstructions:document.querySelector('#iosInstructions'), enterApp:document.querySelector('#enterApp'),
  phoneInput:document.querySelector('#phoneInput'), clearInput:document.querySelector('#clearInput'), previousResult:document.querySelector('#previousResult'), numberHint:document.querySelector('#numberHint'),
  searchButton:document.querySelector('#searchButton'), pasteButton:document.querySelector('#pasteButton'), countryButton:document.querySelector('#countryButton'), countryFlag:document.querySelector('#countryFlag'), countryLabel:document.querySelector('#countryLabel'),
  aboutButton:document.querySelector('#aboutButton'), historyButton:document.querySelector('#historyButton'), countryList:document.querySelector('#countryList'), historyList:document.querySelector('#historyList'),
  resultNumber:document.querySelector('#resultNumber'), resultEyebrow:document.querySelector('#resultEyebrow'), resultTitle:document.querySelector('#resultTitle'), resultLocation:document.querySelector('#resultLocation'),
  resultType:document.querySelector('#resultType'), resultSource:document.querySelector('#resultSource'), resultConfidence:document.querySelector('#resultConfidence'), whatsappButton:document.querySelector('#whatsappButton'),
  webResearchButton:document.querySelector('#webResearchButton'), searchAgain:document.querySelector('#searchAgain'), searchDeeperButton:document.querySelector('#searchDeeperButton'), fallbackActions:document.querySelector('#fallbackActions'), fallbackLabel:document.querySelector('#fallbackLabel'), refreshDirectoryButton:document.querySelector('#refreshDirectoryButton')
};
let deferredInstallPrompt=null, currentInfo=null;

function isStandalone(){return matchMedia('(display-mode: standalone)').matches || navigator.standalone===true}
function showScreen(target){[els.installGate,els.welcome,els.search,els.country,els.history,els.about,els.result].forEach(s=>s.classList.add('hidden'));target.classList.remove('hidden','entering');requestAnimationFrame(()=>target.classList.add('entering'))}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function detectRegion(){const saved=localStorage.getItem('urang_home_country');if(saved&&COUNTRIES.some(c=>c.code===saved))return saved;try{const locale=new Intl.Locale(navigator.language||'en-GB');if(locale.region&&COUNTRIES.some(c=>c.code===locale.region))return locale.region}catch(e){}return 'GB'}
function homeCountry(){return COUNTRIES.find(c=>c.code===detectRegion())||COUNTRIES[0]}
function setHomeCountry(code){localStorage.setItem('urang_home_country',code);renderCountry()}
function renderCountry(){const c=homeCountry();els.countryFlag.textContent=c.flag;els.countryLabel.textContent=c.name}
function cleanNumber(raw){let s=String(raw||'').trim().replace(/[()\-.\s]/g,'');if(s.startsWith('00'))s='+'+s.slice(2);s=s.replace(/[^\d+]/g,'');if(s.indexOf('+')>0)s=s.replace(/\+/g,'');return s}
function countryFromInternational(digits){const only=digits.replace(/\D/g,'');return COUNTRIES.filter(c=>only.startsWith(c.dial)).sort((a,b)=>b.dial.length-a.dial.length)[0]||null}
function normalizeNumber(raw){const cleaned=cleanNumber(raw),home=homeCountry();if(!cleaned)return null;let country=home,e164='',national='';if(cleaned.startsWith('+')){const digits=cleaned.slice(1);country=countryFromInternational(digits)||home;e164='+'+digits;const rest=digits.slice(country.dial.length);national=country.trunk?country.trunk+rest:rest}else{let digits=cleaned.replace(/\D/g,'');if(home.dial==='1'&&digits.length===11&&digits.startsWith('1'))digits=digits.slice(1);if(home.trunk&&digits.startsWith(home.trunk))digits=digits.slice(home.trunk.length);e164='+'+home.dial+digits;national=home.trunk?home.trunk+digits:digits}return{raw,cleaned,e164,digits:e164.replace(/\D/g,''),country,national,valid:e164.replace(/\D/g,'').length>=7}}
function formatDisplay(info){if(!info)return'';const digits=info.e164.slice(1);if(info.country.code==='GB'&&digits.startsWith('44')&&digits.length>=12){const n=digits.slice(2);if(n.startsWith('7'))return`+44 ${n.slice(0,4)} ${n.slice(4,7)} ${n.slice(7)}`;if(n.startsWith('20'))return`+44 20 ${n.slice(2,6)} ${n.slice(6)}`}return'+'+info.country.dial+' '+digits.slice(info.country.dial.length).replace(/(\d{3})(?=\d)/g,'$1 ').trim()}
const UK_AREAS={'020':'London','0121':'Birmingham','0161':'Manchester','0151':'Liverpool','0113':'Leeds','0114':'Sheffield','0115':'Nottingham','0116':'Leicester','0117':'Bristol','0191':'Tyneside / Durham','0131':'Edinburgh','0141':'Glasgow','01224':'Aberdeen','01382':'Dundee','01902':'Wolverhampton','024':'Coventry','01782':'Stoke-on-Trent','01922':'Walsall','01384':'Dudley'};
function numberType(info){if(!info)return'';if(info.country.code==='GB'){const n=info.national;if(/^07/.test(n))return'UK mobile';if(/^(01|02)/.test(n))return'UK landline';if(/^03/.test(n))return'UK non-geographic';if(/^080/.test(n))return'UK freephone';if(/^08/.test(n))return'UK service number';if(/^09/.test(n))return'UK premium-rate number'}return`${info.country.name} number`}
function numberLocation(info){if(!info)return'';if(info.country.code==='GB'&&/^0[12]/.test(info.national)){const p=Object.keys(UK_AREAS).sort((a,b)=>b.length-a.length).find(x=>info.national.startsWith(x));if(p)return`${UK_AREAS[p]}, United Kingdom`}return info.country.name}
function history(){try{return JSON.parse(localStorage.getItem('urang_history')||'[]')}catch(e){return[]}}
function saveHistory(item){const items=history().filter(x=>x.e164!==item.e164);items.unshift(item);localStorage.setItem('urang_history',JSON.stringify(items.slice(0,50)))}
function findHistory(info){return info?history().find(x=>x.e164===info.e164)||null:null}
function historySummary(item){return item.title||item.type||item.location||'Previous lookup'}
function updateInputState(){currentInfo=normalizeNumber(els.phoneInput.value);const has=currentInfo&&currentInfo.valid;els.searchButton.disabled=!has;els.clearInput.classList.toggle('hidden',!els.phoneInput.value);const old=has?findHistory(currentInfo):null;if(old){els.previousResult.innerHTML=`Previous search · <strong>${escapeHtml(historySummary(old))}</strong>`;els.previousResult.classList.remove('hidden')}else els.previousResult.classList.add('hidden');if(has){els.numberHint.textContent=`${currentInfo.country.flag} ${numberType(currentInfo)} · ${numberLocation(currentInfo)}`;els.numberHint.classList.remove('hidden')}else els.numberHint.classList.add('hidden')}
function baseResult(info){return{e164:info.e164,display:formatDisplay(info),title:'Unknown caller',eyebrow:'Directory check',location:numberLocation(info),type:numberType(info),source:'Checking the most relevant directory for this number.',confidence:'',found:false,lookupState:'pending',date:Date.now()}}

function directoryCache(){try{return JSON.parse(localStorage.getItem('urang_directory_cache')||'{}')}catch(e){return{}}}
function cacheHoursFor(data){return data&&data.found?Number(CONFIG.positiveCacheHours||168):Number(CONFIG.negativeCacheHours||12)}
function getCachedDirectory(info){
  const cache=directoryCache(),entry=cache[info.e164];
  if(!entry||!entry.savedAt||!entry.data)return null;
  const maxAge=cacheHoursFor(entry.data)*3600000;
  if(Date.now()-entry.savedAt>maxAge)return null;
  return entry.data;
}
function saveDirectoryCache(info,data){
  if(!data)return;
  const cache=directoryCache();
  cache[info.e164]={savedAt:Date.now(),country:info.country.code,data};
  const keys=Object.keys(cache).sort((a,b)=>(cache[b].savedAt||0)-(cache[a].savedAt||0)).slice(0,100);
  const trimmed={};keys.forEach(k=>trimmed[k]=cache[k]);
  localStorage.setItem('urang_directory_cache',JSON.stringify(trimmed));
}

function statusUrl(){
  const direct=String(CONFIG.directoryStatusApi||'').trim();
  if(direct)return direct;
  const lookup=String(CONFIG.lookupApi||'').trim();
  if(!lookup)return'';
  try{const u=new URL(lookup);u.pathname=u.pathname.replace(/\/lookup\/?$/,'/status');return u.toString()}catch{return''}
}
async function refreshDirectoryStatus(force=false){
  const endpoint=statusUrl();
  if(!endpoint)return null;
  const key='urang_directory_status';
  try{
    const existing=JSON.parse(localStorage.getItem(key)||'null');
    if(!force&&existing&&Date.now()-(existing.checkedAt||0)<24*3600000)return existing;
  }catch(e){}
  try{
    const u=new URL(endpoint);
    u.searchParams.set('country',homeCountry().code);
    if(force)u.searchParams.set('refresh','1');
    const controller=new AbortController();
    const t=setTimeout(()=>controller.abort(),3500);
    const r=await fetch(u.toString(),{headers:{'accept':'application/json'},signal:controller.signal,cache:'no-store'});
    clearTimeout(t);
    if(!r.ok)return null;
    const data=await r.json();
    const stored={...data,checkedAt:Date.now()};
    localStorage.setItem(key,JSON.stringify(stored));
    return stored;
  }catch(e){return null}
}

async function automaticLookup(info,{refresh=false}={}){
  const endpoint=String(CONFIG.lookupApi||'').trim();
  if(!endpoint)return{serviceConfigured:false,found:false,status:'unconfigured'};

  if(!refresh){
    const cached=getCachedDirectory(info);
    if(cached)return{...cached,fromCache:true,serviceConfigured:true};
  }

  try{
    const controller=new AbortController();
    const t=setTimeout(()=>controller.abort(),7000);
    const r=await fetch(endpoint,{
      method:'POST',
      headers:{'content-type':'application/json','accept':'application/json'},
      body:JSON.stringify({
        e164:info.e164,
        national:info.national,
        country:info.country.code,
        refresh:Boolean(refresh),
        strategy:'directory-first'
      }),
      signal:controller.signal,
      cache:'no-store'
    });
    clearTimeout(t);
    if(!r.ok)throw new Error('lookup');
    const data=await r.json();
    const result={...data,serviceConfigured:true,status:data.found?'found':'not_found'};
    saveDirectoryCache(info,result);
    return result;
  }catch(e){
    return{serviceConfigured:true,found:false,status:'unavailable',error:true};
  }
}

function mergeDirectory(base,data){
  if(!data)return{...base,lookupState:'unavailable'};
  if(data.found){
    return{
      ...base,
      title:data.title||data.name||'Possible caller',
      eyebrow:'Directory match',
      location:data.location||base.location,
      type:data.type||base.type,
      source:data.source||(data.provider?`Matched by ${data.provider}.`:'Directory identity returned.'),
      confidence:data.confidence||'Directory match',
      provider:data.provider||'',
      found:true,
      lookupState:'found',
      fromCache:Boolean(data.fromCache),
      date:Date.now()
    };
  }

  let title='No directory match';
  let source='No identity was returned by the directory for this number.';
  let state='not_found';

  if(data.status==='unconfigured'||data.serviceConfigured===false){
    title='Directory not connected';
    source='Number details are available, but the automatic reverse-directory service has not been connected yet.';
    state='unconfigured';
  }else if(data.status==='unavailable'||data.error){
    title='Directory unavailable';
    source='The directory could not be reached. Refresh and retry, or use a deeper search.';
    state='unavailable';
  }

  return{
    ...base,title,eyebrow:'Directory check',
    location:data.location||base.location,
    type:data.type||base.type,
    source:data.source||source,
    confidence:data.confidence||'',
    found:false,lookupState:state,date:Date.now()
  };
}

function setFallbackVisibility(item,expanded=false){
  currentResult=item;
  const found=Boolean(item&&item.found);
  const reveal=!found||expanded;
  els.fallbackActions.classList.toggle('hidden',!reveal);
  els.searchDeeperButton.classList.toggle('hidden',!found||expanded);

  if(found){
    els.fallbackLabel.textContent='Want to verify it further?';
    els.refreshDirectoryButton.textContent='Recheck directory';
  }else if(item&&item.lookupState==='unavailable'){
    els.fallbackLabel.textContent='The directory did not answer.';
    els.refreshDirectoryButton.textContent='Refresh directory & retry';
  }else if(item&&item.lookupState==='unconfigured'){
    els.fallbackLabel.textContent='Automatic directory lookup is not connected yet.';
    els.refreshDirectoryButton.textContent='Retry directory';
  }else{
    els.fallbackLabel.textContent='No directory identity found.';
    els.refreshDirectoryButton.textContent='Refresh directory & retry';
  }
}

function renderResult(item,{expanded=false}={}){
  els.resultNumber.textContent=item.display||item.e164;
  els.resultEyebrow.textContent=item.eyebrow||'Directory check';
  els.resultTitle.textContent=item.title||'Unknown caller';
  els.resultLocation.textContent=item.location||'';
  els.resultType.textContent=item.type||'';
  els.resultSource.textContent=item.source||'';
  els.resultConfidence.textContent=item.confidence||'';
  setFallbackVisibility(item,expanded);
}

async function doSearch(options={}){
  const info=normalizeNumber(els.phoneInput.value);
  if(!info||!info.valid)return;
  currentInfo=info;

  const old=findHistory(info);
  const base=old?{...baseResult(info),...old,date:Date.now()}:baseResult(info);

  els.searchButton.disabled=true;
  const label=els.searchButton.querySelector('span:first-child');
  const original=label.textContent;
  label.textContent=options.refresh?'Refreshing…':'Checking directory…';

  const directory=await automaticLookup(info,{refresh:Boolean(options.refresh)});
  const item=mergeDirectory(base,directory);

  saveHistory(item);
  renderResult(item);
  showScreen(els.result);

  label.textContent=original;
  updateInputState();
}
function webSearchUrl(info){const q=[`"${info.e164}"`,info.national?`"${info.national}"`:null,'caller OR phone OR contact'].filter(Boolean).join(' OR ');return'https://www.google.com/search?q='+encodeURIComponent(q)}
function whatsappUrl(info){return'https://wa.me/'+info.digits}
function renderCountryList(){const current=homeCountry().code;els.countryList.innerHTML=COUNTRIES.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(c=>`<button type="button" data-country="${c.code}"><span class="country-name">${c.flag} ${escapeHtml(c.name)}${c.code===current?' ·':''}</span><span class="dial">+${c.dial}</span></button>`).join('')}
function renderHistory(){const items=history();if(!items.length){els.historyList.innerHTML='<div class="empty-state">No searches yet.</div>';return}els.historyList.innerHTML=items.map((x,i)=>{const date=x.date?new Date(x.date).toLocaleDateString(undefined,{day:'numeric',month:'short'}):'';return`<button class="history-item" type="button" data-history="${i}"><span class="history-main"><span class="history-num">${escapeHtml(x.display||x.e164)}</span><span class="history-summary">${escapeHtml(historySummary(x))}</span></span><span class="history-date">${escapeHtml(date)}</span></button>`}).join('')}
async function pasteNumber(){try{const text=await navigator.clipboard.readText();if(text){els.phoneInput.value=text.trim();updateInputState();els.phoneInput.focus()}}catch(e){els.phoneInput.focus()}}
function setupInstallGate(){if(isStandalone()){showScreen(els.welcome);return}showScreen(els.installGate);const isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);if(isiOS){els.installButton.textContent='How to install';els.installCopy.textContent='uRang works from your Home Screen, not inside Safari.'}window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e});els.installButton.addEventListener('click',async()=>{if(deferredInstallPrompt){deferredInstallPrompt.prompt();try{await deferredInstallPrompt.userChoice}catch(e){}deferredInstallPrompt=null}else els.iosInstructions.classList.toggle('hidden')})}

els.enterApp.addEventListener('click',()=>showScreen(els.search));els.phoneInput.addEventListener('input',updateInputState);els.phoneInput.addEventListener('keydown',e=>{if(e.key==='Enter'&&!els.searchButton.disabled)doSearch()});els.clearInput.addEventListener('click',()=>{els.phoneInput.value='';updateInputState();els.phoneInput.focus()});els.searchButton.addEventListener('click',doSearch);els.pasteButton.addEventListener('click',pasteNumber);els.previousResult.addEventListener('click',()=>{const info=normalizeNumber(els.phoneInput.value),old=findHistory(info);if(old){currentInfo=info;renderResult(old);showScreen(els.result)}});els.countryButton.addEventListener('click',()=>{renderCountryList();showScreen(els.country)});els.historyButton.addEventListener('click',()=>{renderHistory();showScreen(els.history)});els.aboutButton.addEventListener('click',()=>showScreen(els.about));els.searchAgain.addEventListener('click',()=>{showScreen(els.search);setTimeout(()=>els.phoneInput.focus(),180)});
els.searchDeeperButton.addEventListener('click',()=>{if(currentResult)setFallbackVisibility(currentResult,true)});
els.refreshDirectoryButton.addEventListener('click',()=>doSearch({refresh:true}));els.webResearchButton.addEventListener('click',()=>{const info=currentInfo||normalizeNumber(els.resultNumber.textContent);if(info)window.open(webSearchUrl(info),'_blank','noopener,noreferrer')});els.whatsappButton.addEventListener('click',()=>{const info=currentInfo||normalizeNumber(els.resultNumber.textContent);if(info)location.href=whatsappUrl(info)});
document.addEventListener('click',e=>{const c=e.target.closest('[data-country]');if(c){setHomeCountry(c.dataset.country);updateInputState();showScreen(els.search)}const h=e.target.closest('[data-history]');if(h){const item=history()[Number(h.dataset.history)];if(item){els.phoneInput.value=item.e164;currentInfo=normalizeNumber(item.e164);renderResult(item);showScreen(els.result)}}const back=e.target.closest('[data-back]');if(back)showScreen(els.search)});
window.addEventListener('appinstalled',()=>{els.installCopy.textContent='Installed. Open uRang from your Home Screen.';els.installButton.classList.add('hidden');els.iosInstructions.classList.add('hidden')});
renderCountry();updateInputState();setupInstallGate();if(CONFIG.refreshDirectoryStatusOnOpen)refreshDirectoryStatus(false);if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
