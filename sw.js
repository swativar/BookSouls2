var CACHE_NAME = "static-v3";
var DYNAMIC_CACHE_NAME = "dynamic-v3";
var cache_to_add = [
    "/",
    "/index.html",
    "/index.js",
    "/index.css",
    "/offline.html",
    "/offline.css",
    "/errorpage.html",
    "/errorpage.js",
    "/common.js",
    "/common.css",
    "/assets-Error-Page/PointerRotated.png",
    "/assets-Error-Page/PointerArrowToSearchBtn.svg",
    "/assets-Error-Page/source.gif",
    "/assets-Error-Page/ErrorPageIllustration.svg",
    "/assets-Error-Page/Side404.svg",
    "/assets-Error-Page/Large404.svg",
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
    "/assets/blur.png",
    "/Favicons/72_72.png", "/Favicons/96_96.png", "/Favicons/128_128.png", "/Favicons/144_144.png", "/Favicons/152_152.png", "/Favicons/384_384.png",
    "/Favicons/512_512.png",
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;600&display=swap",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "/assets/Vision/Vision-Heavy.woff",
    "/assets/Vision/Vision-Regular.woff",
    "/assets/Vision/Vision-Light.woff",
    "/assets/Vision/Vision-Heavy.woff2",
    "/assets/Vision/Vision-Regular.woff2",
    "/assets/Vision/Vision-Light.woff2",
    "/assets/Vision/Vision-Heavy.otf",
    "/assets/Vision/Vision-Regular.otf",
    "/assets/Vision/Vision-Light.otf",
    "/assets/Vision/Vision-Heavy.eot",
    "/assets/Vision/Vision-Regular.eot",
    "/assets/Vision/Vision-Light.eot",
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
    var requestUrl = new URL(event.request.url);
   // console.log(event.request.status);
    // var url = requestUrl.origin;
    // console.log(event.request);

    if (requestUrl.pathname === "/" || requestUrl.pathname === "/index.html") {
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
                                    return response;
                                });
                            if (!response.ok && response.status === 404) {
                                return caches.match('/errorpage.html');
                            }
                        }
                    )
                }).catch(() => {
                    if (event.request.url.indexOf('.html') > -1) {
                        return caches.match('/offline.html');
                    }
                })
        );
    } else {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) {
                        console.log(response,response.statusText);
                        return response
                    }
                    return fetch(event.request).then((response) => {
                        if (!response.ok && response.status === 404) {
                            return caches.match('/errorpage.html');
                        }
                        return response

                    })
                }).catch(() => {
                    if (event.request.url.indexOf('.html') > -1) {
                        return caches.match('/offline.html');
                    }
                })
        )
    }
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