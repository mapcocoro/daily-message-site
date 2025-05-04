const CACHE_NAME = 'daily-message-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './message.js',
  './messages.json',
  './icon-192.png',
  './icon-512.png'
];

// インストール時：キャッシュにファイルを追加
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('キャッシュ失敗:', error);
      })
  );
});

// リクエスト時：キャッシュを優先し、なければネットワークから取得
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

