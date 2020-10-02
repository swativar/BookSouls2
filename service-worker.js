importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.core.setCacheNameDetails({
  prefix: 'workbox',
  suffix: 'v5',
  precache: 'precache',
});

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}


workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);


const suffix = 'v5';
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(keys => keys.filter(key => !key.endsWith(suffix)))
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
  );
});


workbox.routing.registerRoute(
  ({ request }) => request.destination === 'style',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-css-v5',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 200,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.broadcastUpdate.BroadcastUpdatePlugin(),
    ]
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'script',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-js-v5',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 200,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.broadcastUpdate.BroadcastUpdatePlugin(),
    ]
  })
);


workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'static-images-v5',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 250,
        purgeOnQuotaError: true,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
    ]
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'document',
  new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: 'static-fonts-v5',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ],
  })
);

workbox.routing.setDefaultHandler(
  new workbox.strategies.NetworkOnly()
);


workbox.routing.setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return workbox.precaching.matchPrecache('/offline.html');
      break;
    case 'image':
      if(!event.request.url.endsWith('.svg')){
        return workbox.precaching.matchPrecache('/assets/BSWaterMark.png');
      }
      return Response.error();
      break;
    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
