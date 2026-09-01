const CACHE_NAME = "duas-app-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json"
];

// Wannan zai adana app din
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('An adana app din');
      return cache.addAll(urlsToCache);
    })
  );
});

// Wannan zai bude shi ba data
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
