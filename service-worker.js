importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.core.setCacheNameDetails({
  prefix: 'workbox',
  suffix: 'v2',
  precache: 'precache',
});

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([
    { url: '/manifest.json', revision: null },
    { url: '/offline.css', revision: null },
    { url: '/', revision: null },
    { url: '/index.html', revision: null },
    { url: '/index.css', revision: null },
    { url: '/index.js', revision: null },
    { url: '/offline.html', revision: null },
    { url: '/common.js', revision: null },
    { url: '/common.css', revision: null },
    { url: "/assets-Error-Page/warning.gif", revision: null },
    { url: "/assets-Error-Page/PointerRotated.png", revision: null },
    { url: "/assets/blur.png", revision: null },
    { url: "/assets/footer_bg2.png", revision: null},
    { url: "/assets/footer-illustration-cropped.png", revision: null},
    { url: "/assets-Home-mobile/Menu.svg", revision: null},
    { url: "/assets-Search-Page/Close.svg", revision: null },
    { url: "/assets/Booksouls-LOGO.svg",revision: null },
    { url: "/assets/Circular-pattern-in-Podcast-BG.svg", revision: null },
    { url: "/assets/Header-Illustration-1.svg", revision: null },
    { url: "/assets/Header-Illustration-2.svg", revision: null },
    { url: "/assets/Quotes.svg", revision: null },
    { url: "/assets/header_background.svg", revision: null },
    { url: "/assets/icons/Dropdown-icon.svg", revision: null },
    { url: "/assets/icons/Facebook.svg", revision: null },
    { url: "/assets/icons/Headphones-White.svg", revision: null },
    { url: "/assets/icons/Headphones.svg", revision: null },
    { url: "/assets/icons/Heart.svg", revision: null },
    { url: "/assets/icons/Instagram.svg", revision: null },
    { url: "assets/icons/Pinterest.svg", revision: null },
    { url: "/assets/icons/Play-Button-Podcast.svg", revision: null },
    { url: "/assets/icons/Search.svg", revision: null },
    { url: "/assets/icons/Twitter.svg", revision: null },
    { url: "/assets/triang_svg.svg", revision: null },
    { url: "/assets-Home-mobile/HeaderdesignBG.svg", revision: null },
  ]);
  
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('install', e => {
//   e.waitUntil(self.skipWaiting());
// });

const suffix = 'v2';
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
    cacheName: 'static-css-v2',
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
    cacheName: 'static-js-v2',
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
  ({url}) => url.pathname.endsWith('.svg') || url.pathname.startsWith('/Favicons'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-svg|png-v2',
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
    cacheName: 'static-images-v2',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 250,
        purgeOnQuotaError: true,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  ({ url }) => url.origin === location.origin && (url.pathname === '/index.html' || url.pathname === '/'),
  new workbox.strategies.StaleWhileRevalidate({
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
    cacheName: 'static-fonts-v2',
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
      if(!event.request.url.endsWith('.svg')){
        return workbox.precaching.matchPrecache('/assets/blur.png')
      }
      return Response.error();
      break;
    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
