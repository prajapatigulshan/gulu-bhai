const cacheName = 'gbg-store-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/skins.html',
  '/maps.html',
  '/mods.html',
  '/game.html',
  '/subscription.html',
  '/about.html',
  '/contact.html',
  '/style.css',
  '/manifest.json',
  '/GBG_Store.zip',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install Service Worker and cache files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[Service Worker] Caching files...');
      return cache.addAll(filesToCache);
    })
  );
});

// Activate Service Worker and clean old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== cacheName) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch files: cache first, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if(response){
        return response; // Serve from cache
      }
      return fetch(event.request).then((res) => {
        return caches.open(cacheName).then((cache) => {
          // Cache new requests for offline use
          cache.put(event.request, res.clone());
          return res;
        });
      }).catch(() => {
        // If offline and file not cached, show a fallback
        if(event.request.url.endsWith('.zip')){
          return caches.match('/GBG_Store.zip');
        }
        return new Response('You are offline, and this file is not cached.');
      });
    })
  );
});
