const CACHE_NAME = 'affirmation-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  './script.js',
  './icon-192.png',
  './icon-512.png'
];

// インストール
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエスト取得
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
