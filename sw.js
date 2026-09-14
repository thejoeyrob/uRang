const CACHE='urang-v1.6.0';
const ASSETS=[
  './','./index.html','./styles.css','./config.js','./app.js',
  './manifest.webmanifest','./icon-192.png','./icon-512.png',
  './apple-touch-icon.png','./jw-eds-white.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;

  const url=new URL(event.request.url);
  if(url.origin!==location.origin) return;

  // Keep connection/configuration fresh whenever online.
  if(url.pathname.endsWith('/config.js') || url.pathname.endsWith('/index.html')){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          return response;
        })
        .catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(hit=>{
      const network=fetch(event.request).then(response=>{
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        return response;
      }).catch(()=>null);
      return hit || network.then(response=>response||caches.match('./index.html'));
    })
  );
});
