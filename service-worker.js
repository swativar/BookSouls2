importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.core.setCacheNameDetails({
  prefix: 'workbox',
  suffix: 'v1',
  precache: 'precache',
});

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
    { url: "/assets/blur.png", revision: null },
    { url: "/assets/footer_bg2.png", revision: null},
    { url: "/assets/footer-illustration-cropped.png", revision: null},
    { url: "/Favicons/96_96.png", revision: null},
    { url: "/Favicons/72_72.png", revision: null},
    { url: "/Favicons/128_128.png", revision: null},
    { url: "/Favicons/144_144.png", revision: null},
    { url: "/Favicons/152_152.png", revision: null},
    { url: "/Favicons/192_192.png", revision: null},
    { url: "/Favicons/384_384.png", revision: null},
    { url: "/Favicons/384_384.png", revision: null},
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// self.addEventListener('install', e => {
//   e.waitUntil(self.skipWaiting());
// });

const suffix = 'v1';
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
    cacheName: 'static-css-v1',
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
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-js-v1',
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
  ({url}) => url.pathname.endsWith('.svg'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-svg-v1',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'static-images-v1',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 250,
        purgeOnQuotaError: true,
        maxAgeSeconds: 60 * 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  ({ url }) => url.origin === location.origin && (url.pathname === '/index.html' || url.pathname === '/'),
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ],
  })
);

workbox.routing.registerRoute(
  ({ event, url }) => event.request.destination === 'document' && (url.pathname !== '/index.html' || url.pathname !== '/'),
  new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
  ({ event }) => event.request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: 'static-fonts-v1',
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

//  workbox.navigationPreload.disable();

// const networkOnly = new workbox.strategies.NetworkOnly();
// const navigationHandler = async (params) => {
//   try {
//     // Attempt a network request.
//     return await networkOnly.handle(params);
//   } catch (error) {
//     // If it fails, return the cached HTML.
//     return workbox.precaching.matchPrecache('/offline.html');
//   }
// };

// // Register this strategy to handle all navigations.
// workbox.routing.registerRoute(
//   new workbox.routing.NavigationRoute(navigationHandler)
// );

workbox.routing.setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return workbox.precaching.matchPrecache('/offline.html');
      break;
    case 'image':
      return workbox.precaching.matchPrecache('/assets/blur.png');
      break;
    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
