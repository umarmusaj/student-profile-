const CACHE_NAME = "duas-app-v1";
const urlsToCache = [
  "/student-profile-/",
  "/student-profile-/index.html",
  "/student-profile-/manifest.json"
];

// Wannan shine zai adana app din a waya sau 1
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Addu\'oi an adana su');
      return cache.addAll(urlsToCache);
    })
  );
});

// Wannan shine zai bude shi daga waya idan ba data
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
