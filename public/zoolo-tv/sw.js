// Retire the previous standalone PWA and clear its cached app shell.
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith('zoolo-tv-shell-'))
      .map(key => caches.delete(key)));
    await self.clients.claim();
    await self.registration.unregister();
  })());
});
