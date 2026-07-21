// Arquivo Service Worker para suporte PWA do Aplicativo CV
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
