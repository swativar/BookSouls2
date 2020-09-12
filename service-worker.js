importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([
    { url: '/manifest.json', revision: null },
    { url: '/offline.css', revision: null },
    { url: '/', revision: null },
    { url: '/index.html', revision: null },
    { url: '/offline.html', revision: null },
    { url: '/common.js', revision: null },
    { url: '/common.css', revision: null },
    { url: "/assets-Error-Page/warning.gif", revision: null },
    { url: "/assets-Error-Page/PointerRotated.png", revision: null },
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// self.addEventListener('install', e => {
//   e.waitUntil(self.skipWaiting());
// });

// self.addEventListener('activate', e => {
//   self.clients.claim();
// });


workbox.routing.registerRoute(
  ({ request }) => request.destination === 'style',
  new workbox.strategies.CacheFirst({
    cacheName: 'static-css',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 200,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'script',
  new workbox.strategies.CacheFirst({
    cacheName: 'static-js',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 200,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'static-images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 250,
        purgeOnQuotaError: true,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  ({ event, url }) => event.request.destination === 'document' && (url.pathname === '/index.html' || url.pathname === '/'),
  new workbox.strategies.CacheFirst({
    cacheName: 'static-htmls',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 200,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ],
  })
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: 'static-fonts',
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
  new workbox.strategies.StaleWhileRevalidate()
);

 workbox.navigationPreload.disable();

const networkOnly = new workbox.strategies.NetworkOnly();
const navigationHandler = async (params) => {
  try {
    // Attempt a network request.
    return await networkOnly.handle(params);
  } catch (error) {
    // If it fails, return the cached HTML.
    return workbox.precaching.matchPrecache('/offline.html');
  }
};

// Register this strategy to handle all navigations.
workbox.routing.registerRoute(
  new workbox.routing.NavigationRoute(navigationHandler)
);
