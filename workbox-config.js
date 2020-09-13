module.exports = {
  "globDirectory": "bookfinal/",
  "globPatterns": [
    "**/*.svg",
    "**/*.png",
    "index.html",
    "index.css",
    "index.js",
    "offline.html",
    "offline.css",
    "common.css",
    "common.html",
    "assets-Error-Page/warning.gif",
    "manifest.json",
    "install.js",
  ],
  "swDest": "bookfinal/sw.js",
  "swSrc": "bookfinal/service-worker.js",
  "globaIgnores":[
    "../workbox-config.js"
  ]
};