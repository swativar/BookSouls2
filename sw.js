var CACHE_NAME = "static-v1";
var DYNAMIC_CACHE_NAME = "dynamic-v1";
var cache_to_add = [
    "/",
    "/index.html",
    "/index.js",
    "/index.css",
    "/offline.html",
    "/offline.css",
    "/errorpage.js",
    "/assets-Error-Page/PointerRotated.png",
    "/assets-Error-Page/PointerArrowToSearchBtn.svg",
    "/assets-Error-Page/source.gif",
    "/assets-Error-Page/ErrorPageIllustration.svg",
    "/assets-Home-mobile/Menu.svg",
    "/assets-Search-Page/Close.svg",
    "/assets/Booksouls-LOGO.svg",
    "/assets/Circular-pattern-in-Podcast-BG.svg",
    "/assets/Header-Illustration-1.svg",
    "/assets/Header-Illustration-2.svg",
    "/assets/Header-Illustration-png.png",
    "/assets/Quotes.svg",
    "/assets/footer-illustration-cropped.png",
    "/assets/footer_bg2.png",
    "/assets/header_background.svg",
    "/assets/icons/Dropdown-icon.svg",
    "/assets/icons/Facebook.svg",
    "/assets/icons/Headphones-White.svg",
    "/assets/icons/Headphones.svg",
    "/assets/icons/Heart.svg",
    "/assets/icons/Instagram.svg",
    "assets/icons/Pinterest.svg",
    "/assets/icons/Play-Button-Podcast.svg",
    "/assets/icons/Search.svg",
    "/assets/icons/Twitter.svg",
    "/assets/triang_svg.svg",
    "/install.js",
    "/manifest.json",
    "/assets-Home-mobile/HeaderdesignBG.svg",
    "/assets/Vision/Vision-Heavy.ttf",
    "/assets/Vision/Vision-Regular.ttf",
    "/assets/Vision/Vision-Light.ttf",
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(cache_to_add);
        })
    );
});

// self.addEventListener("fetch", e => {
//     e.respondWith(
//         caches.match(e.request).then(response => {
//             return response || fetch(e.request).then(fetchres => {
//                 if (!fetchres || fetchres.status !== 200 || fetchres.type !== 'basic') {
//                     return fetchres;
//                 }
//                 return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
//                     cache.put(e.request.url, fetchres.clone());
//                     return fetchres;
//                 })
//             });
//         }).catch(() => {
//             if (e.request.url.indexOf('.html') > -1) {
//                 return caches.match('/offline.html');
//             }
//         })
//     );
// });

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function (response) {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        var responseToCache = response.clone();

                        caches.open(DYNAMIC_CACHE_NAME)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            }).catch(() => {
                if (event.request.url.indexOf('.html') > -1) {
                    return caches.match('/offline.html');
                }
            })
    );
});


self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList
                .filter(key => key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME)
                .map((key) => caches.delete(key))
            )
        })
    );

});

