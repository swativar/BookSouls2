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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.precaching.precacheAndRoute([{"revision":"3c68405b50016cc41e033779a97b93f8","url":"assets-article/CreativityIcon.svg"},{"revision":"82afefd6e589ae874b8e12e3508d5d03","url":"assets-article/EntreIcon.svg"},{"revision":"bcd8550e88823f8303f24ba854adb0a8","url":"assets-article/InspirationIcon.svg"},{"revision":"b24bf2b16ac0c55dcd04223a39184173","url":"assets-article/LifestyleIcon.svg"},{"revision":"d6834c9690232ed0b56336d2bdcf01b9","url":"assets-article/ReadingIcon.svg"},{"revision":"10fc3ba02ae2f486984078e0e17af2e7","url":"assets-article/RelationIcon.svg"},{"revision":"43ece3c8d5659aca0c59717e0c6e5602","url":"assets-article/Right-Arrow-Active.svg"},{"revision":"970e591b092c48c8f2cbe0767a4893a2","url":"assets-article/Right-Arrow-Not-Active.svg"},{"revision":"797e5064e83da367322e82c530e8ded5","url":"assets-article/SciFiIcon.svg"},{"revision":"3bdb2d4c3757c17e8b133b5b4841f245","url":"assets-article/SpiritualIcon.svg"},{"revision":"242681510f5dd9a0e25dca8db12c8c92","url":"assets-Error-Page/ErrorPageIllustration.svg"},{"revision":"c6f801bddf5a14a48bcdcede67f43242","url":"assets-Error-Page/Large404.svg"},{"revision":"76de7260d07739ace19276322e0a7931","url":"assets-Error-Page/PointerArrowToSearchBtn.svg"},{"revision":"6b9099121a5277e4f22a1242d4779172","url":"assets-Error-Page/PointerRotated.png"},{"revision":"17ce76b415e75dda419a941833894b60","url":"assets-Error-Page/Side404.svg"},{"revision":"e08a3dae8d51a9462ed3f42ac2693e0b","url":"assets-Error-Page/warning.gif"},{"revision":"a919d815558e42b9c739892871115353","url":"assets-Home-mobile/HeaderdesignBG.svg"},{"revision":"83d38b5e5392b0b287570cff32921940","url":"assets-Home-mobile/Menu.svg"},{"revision":"0be71b4838ff80e4caef30bb8a63aaf6","url":"assets-InspireMe/BG-Shapes-2.svg"},{"revision":"893683bbcb44090dcf213ff8e8cc77fc","url":"assets-InspireMe/BG-shapes.svg"},{"revision":"81a9af75b4af01f63d2b7bd5160a0d0e","url":"assets-InspireMe/EnglishIcon.svg"},{"revision":"1fff96717866da584e9accc69a58b8b9","url":"assets-InspireMe/Explore Icon.svg"},{"revision":"711fbeb341a3f5be4ee25e41d3ae9279","url":"assets-InspireMe/Genre Icon.svg"},{"revision":"ddff4bd4dc2a224bd3a434fc1a274376","url":"assets-InspireMe/HEADER-BG-Right.svg"},{"revision":"7960fc7739a14b182d2683b7fa073a71","url":"assets-InspireMe/HindiIcon.svg"},{"revision":"76d440ca43343f7cc8e6235f08528e30","url":"assets-InspireMe/HomeIcon.svg"},{"revision":"5de0b070e5b7117007a28f032e465bfe","url":"assets-InspireMe/Next.svg"},{"revision":"3b930a778ac4760f2d7ff3a12a4747dd","url":"assets-InspireMe/Pause.svg"},{"revision":"d1293ae92ac8a53e82971ee0b7843cba","url":"assets-InspireMe/Play.svg"},{"revision":"4db45ed3e00ceae541316382ef6c628b","url":"assets-InspireMe/Previous.svg"},{"revision":"de508b6a72a35a2a642c7336cb5f7fa4","url":"assets-InspireMe/Volume OFF.svg"},{"revision":"b0781d7676f716d5588cf336402c0fc9","url":"assets-InspireMe/Volume ON.svg"},{"revision":"de508b6a72a35a2a642c7336cb5f7fa4","url":"assets-InspireMe/Volume-OFF.svg"},{"revision":"b0781d7676f716d5588cf336402c0fc9","url":"assets-InspireMe/Volume-ON.svg"},{"revision":"510f82a595d796558387de5e98b5dd8b","url":"assets-Publishers-Page/HeaderDesign1-LeftSide.svg"},{"revision":"ce709103566d7563507f3d36512ecc15","url":"assets-Publishers-Page/HeaderDesign2-LeftSide.svg"},{"revision":"b5285edf5924f5f42ddfd850f12641ba","url":"assets-Publishers-Page/HederDesign1 RightSide.svg"},{"revision":"6e66dae6ad0a1cf00089fcfc31b78ae2","url":"assets-Publishers-Page/HederDesign2 RightSide.svg"},{"revision":"8e58c9cb0b5aaba6226f366663a7826b","url":"assets-Publishers-Page/HederDesign3 RightSide.svg"},{"revision":"2f49b262588abc2e93b20e75e3960e91","url":"assets-Quick-Page/DiscoverIcon.svg"},{"revision":"dbe0c7a37123b3c2e9ee14cc6c2ebbe5","url":"assets-Quick-Page/DotsHeader.svg"},{"revision":"423202bcd62b1ae3ed3e56dc1c0f038f","url":"assets-Quick-Page/ExploreIcon.svg"},{"revision":"13a5d15a10a2360644a011cf6b6fb7d7","url":"assets-Quick-Page/HeaderTriangle.svg"},{"revision":"93fefa6e390139a598e46baf52d066e4","url":"assets-Quick-Page/LanguageIcon.svg"},{"revision":"97a45b77bbf41abc1808e096b7b6d442","url":"assets-Search-Page/Close.svg"},{"revision":"44c3dac2203a2be7e1b86915fd5f0bd3","url":"assets-SignIn-SignOut/BackArrow.svg"},{"revision":"48fb3de119da9ea98b6f2f430d55a4f7","url":"assets-SignIn-SignOut/EmailIcon.svg"},{"revision":"ee8631123d95d31014c860f5ed498765","url":"assets-SignIn-SignOut/EyeClosed.svg"},{"revision":"201c852d6d1de232cfa264d2b7b51886","url":"assets-SignIn-SignOut/EyeOpen.svg"},{"revision":"5c548bb74b46811922db9bc788160f2e","url":"assets-SignIn-SignOut/FacebookIcon.svg"},{"revision":"52d1783ac4cbddf9502eecc14179885a","url":"assets-SignIn-SignOut/GoogleIcon.svg"},{"revision":"af1ea069763e8106d2186f8797263d50","url":"assets-singlearticle/Facebook.svg"},{"revision":"c893abde0fcdeb598b02b0fcc044188d","url":"assets-singlearticle/Instagram.svg"},{"revision":"64233af0e16c2fa6af19bc3e9a75bd00","url":"assets-singlearticle/Twitter.svg"},{"revision":"66201bcf128b31492143eb0031d3fc92","url":"assets-singlearticle/WhatsApp.svg"},{"revision":"fe6b2dfcb27dda01e64f9c8af5c62dff","url":"assets/blur.png"},{"revision":"80fe392a04c10d98f25305f129be2271","url":"assets/Booksouls-LOGO.svg"},{"revision":"747501136713d6e739f579b936a4274f","url":"assets/Circular-pattern-in-Podcast-BG.svg"},{"revision":"8dfb02fa498086e2f5f2e26b36ef07ad","url":"assets/footer_bg2.png"},{"revision":"b6af225077ccbbcabf94f130cffd3c96","url":"assets/Footer_Illustration-removedbg.png"},{"revision":"bb1b2929bc9e09941d5141830a9551d3","url":"assets/footer-illustration-cropped.png"},{"revision":"b0bd6db945fa9d6736f131b70b2eecb2","url":"assets/Footer-illustration.svg"},{"revision":"6b3343b05881d01c9842affe11f12460","url":"assets/Footer-Illustration2.svg"},{"revision":"4e9feb2a69259f07987f2547cb03d116","url":"assets/header_background.svg"},{"revision":"aac1de0a1b3e3e17652077e249c598af","url":"assets/Header-Illustration-1.svg"},{"revision":"8d6a7ebf343a7786a0d48f950818e760","url":"assets/Header-Illustration-2.svg"},{"revision":"31c33b7c388d92a87b741ed8bd28a6b8","url":"assets/icons/crosssign.png"},{"revision":"4a13b510d169b17fbd65c21e724b7bb5","url":"assets/icons/Dropdown-icon.svg"},{"revision":"1e9b31a3a9998599a24ebfccf1e35f06","url":"assets/icons/Facebook.svg"},{"revision":"a294ecbbc00505f9fbca4781fed15b9b","url":"assets/icons/Headphones-White.svg"},{"revision":"8bd1b910ebebd632bce283c56454c598","url":"assets/icons/Headphones.svg"},{"revision":"12fda93cee13081d11f9f6d4b86fa5ca","url":"assets/icons/Heart.svg"},{"revision":"fc2a5b0b8a0bc6de939cd754418a4b81","url":"assets/icons/HeartFill.svg"},{"revision":"e03267a99197649e54505511dbbb82b2","url":"assets/icons/Instagram.svg"},{"revision":"d4b4c6f8a6c8564cb06a09b9c6ee941a","url":"assets/icons/Pinterest.svg"},{"revision":"a988ce8f1f10239ac004795c1d7b2cfe","url":"assets/icons/Play-Button-Podcast.svg"},{"revision":"fba612af864ad57ce30ea97cc6e7fe91","url":"assets/icons/Search.svg"},{"revision":"96618c4794a362617583d6f9a3be1bba","url":"assets/icons/Twitter.svg"},{"revision":"8451cdb18f0068a809e1f1a4642bebea","url":"assets/Quotes.svg"},{"revision":"773a2a3f70f8bb29ffa6d022f197f27f","url":"assets/triang_svg.svg"},{"revision":"1f766339fbd2e353407a9174c589079e","url":"Favicons/128_128.png"},{"revision":"82fbe3b92803653aad66cbc48a57ff9f","url":"Favicons/144_144.png"},{"revision":"70747ec79bf81705cdc93294e63a1482","url":"Favicons/152_152.png"},{"revision":"6cc1cb089c201113bc98fbbe687f0d90","url":"Favicons/192_192.png"},{"revision":"a16f6f7a186b409108249eb47331cefc","url":"Favicons/384_384.png"},{"revision":"65dfb6941730070a09f89cd8b17d1dc4","url":"Favicons/512_512.png"},{"revision":"5ac341cee989d6d24e009e3379dfee56","url":"Favicons/72_72.png"},{"revision":"f08a0b329d60e10684f249933389763d","url":"Favicons/96_96.png"},{"revision":"5de0b070e5b7117007a28f032e465bfe","url":"PodcastPage/assets[PodcastPage]/audioControl/Next.svg"},{"revision":"d1293ae92ac8a53e82971ee0b7843cba","url":"PodcastPage/assets[PodcastPage]/audioControl/Play.svg"},{"revision":"4db45ed3e00ceae541316382ef6c628b","url":"PodcastPage/assets[PodcastPage]/audioControl/Previous.svg"},{"revision":"fec4e7e00142b20e7c0045ddf866d59e","url":"PodcastPage/assets[PodcastPage]/audioControl/Volume Up.svg"},{"revision":"77eb5aa12bcf5a3c9e6863d73324d23e","url":"PodcastPage/assets[PodcastPage]/BlackPlay.svg"},{"revision":"a856433e0e393ca4b046f48824e342b5","url":"PodcastPage/assets[PodcastPage]/Fitness.svg"},{"revision":"76d440ca43343f7cc8e6235f08528e30","url":"PodcastPage/assets[PodcastPage]/HomeIcon.svg"},{"revision":"210454947b28e90af9b39354a5bd8086","url":"PodcastPage/assets[PodcastPage]/Movies.svg"},{"revision":"d6b8b5b7a076cb1605415ee6a1d9cd26","url":"PodcastPage/assets[PodcastPage]/Music.svg"},{"revision":"a5cb585b8d55ff732c49ec8f55fa0fc6","url":"PodcastPage/assets[PodcastPage]/NewIcon.svg"},{"revision":"bc18196bbd9fc0c6d1a827ee93a85695","url":"PodcastPage/assets[PodcastPage]/News.svg"},{"revision":"08852dc34c0797f844b0cc5808759002","url":"PodcastPage/assets[PodcastPage]/Spiritual.svg"},{"revision":"547b700a5a3c0ae551e317d5bece5fea","url":"PodcastPage/assets[PodcastPage]/Travel.svg"},{"revision":"15b96f7639baa811eec56716447f3447","url":"PodcastPage/assets[PodcastPage]/TrendingIcon.svg"},{"revision":"0f5d70639ea683ad0673ddae9e17a70b","url":"index.html"},{"revision":"800f94c0c08fd485d16b9676055a4f95","url":"index.css"},{"revision":"8aef9addf5e7d8d792c8fb682347ecf6","url":"index.js"},{"revision":"59e9658ebd010da11ee132b5e6b56c89","url":"offline.html"},{"revision":"c3663fe6ef0723b30d9a7e37c0a46143","url":"offline.css"},{"revision":"7407cca397209f94d7eba29062772c9e","url":"common.css"},{"revision":"3847cb5f52fc333a2d0e08a537aec481","url":"common.js"},{"revision":"714f9609f21d4601ff28763823fc2157","url":"manifest.json"},{"revision":"3da762f290f7179918a8d8e95c90db59","url":"install.js"},{"revision":"0e2f1d15e4d433959aea99c8c7889b18","url":"errorpage.html"},{"revision":"26e5bf13a1036823fb464e71819e55c9","url":"errorpage.css"}]);


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
        return workbox.precaching.matchPrecache('/assets/blur.png')
      }
      return Response.error();
      break;
    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});
