var CACHE_NAME = "static-v3";
var DYNAMIC_CACHE_NAME = "dynamic-v3";
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

