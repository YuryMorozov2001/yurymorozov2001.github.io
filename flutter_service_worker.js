'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/AUTO_MERGE": "87f22ac8a97a9c1079b567a64c125b18",
".git/COMMIT_EDITMSG": "be3c8b13f7f58442e7d36d0e5b0f5a3b",
".git/config": "d5e1f9fb4a9a55b8c072af5977767ffb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e88334344399629e1e750bdade2a42ad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e0ffdd4e72a1e4347b24412606a699fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d61bf7eb20019c827a24baf9ff2f6884",
".git/logs/refs/heads/main": "e7818676e6cc38383501973406669af9",
".git/logs/refs/heads/new-branch": "25f541acc1029a59559a4c558152182e",
".git/logs/refs/remotes/origin/main": "b266eac7410e836eda85b831d0faaf81",
".git/objects/08/a6e7e5f13188c4a90b91f9c6dd4e08757655e5": "fffdc90e5bad057bf89684a5ee1db778",
".git/objects/0c/54f86ba39087b8379e08f1f34aa23daf1ae241": "78483a04ab42e742c5cf111256b952a4",
".git/objects/1a/2ff6a52d933dfc620908bcd624b53e6c6a14c6": "3b5323f3916fa9bba3217ea45c5b077d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/99a745ab8b49ac8bd5a59ec0f04aa17fa7777a": "4712ed7589473cee15c91cfa2e5b22f8",
".git/objects/1e/6357508c6ed59a30ebb0a915907726249cdee2": "222b0a9601694f879e11ab82540bc738",
".git/objects/25/43380844f810f35d2d0a4c10ca919a6842bd13": "05187254548f63a50ef1653e639907fa",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/93aaef241c80c2539c1c8bffe1f9da43b248cc": "6f75cc9a47c0bf52f30447b8a4fc579a",
".git/objects/31/089201fff985474c0b6639a6def6a405606c83": "a0723ef59ceeffdd2f507f1c4011b9ab",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/8a9074ad7c6b5ea8e65710bd1b03d092534463": "4374134213868af7e50978d9b59d821e",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/c4eabfbdf43be283b5d703558f7cf891f9d926": "c6211d976ee05b71820033bc05c93a2a",
".git/objects/43/caa1144cdec40a4e413f3eefde43f1fd532ad6": "9b75ed75942ef3aac48e0374d29ccaaf",
".git/objects/4a/bd02f31bd4dfef5de721db8fb82fa765a1b262": "ac47b5ed96fb7d52e1da15b044b7105c",
".git/objects/4d/8e58dd408b5e238599726b73572830f2da7f0f": "581a8d6c2d6e2a732378c3d922201df3",
".git/objects/4d/ff2d4ea1b3e9118c46c19f48089ed5dff8d2c5": "d63557db9a5cff275601685e5c54f7d8",
".git/objects/5b/6893097ddafb987f5299c8a8c759f1b4707605": "0fa41bf24dc5ef822005b029489ee85f",
".git/objects/6b/f2e725cc755306a176b171ed0c796994c1deac": "a95dbd9b33466812667811f75c944f93",
".git/objects/76/8aa16d406b8e12937e06a35e735d4b1893ed82": "9e24fecdc7d63cc73cb7055a1e4dde6b",
".git/objects/78/adc7ef40b8a87fb84880dac15f61efb88b3f5c": "7f752540a9e89c218b8665c85e385b8a",
".git/objects/7a/ddb7f182128eb043a896a9a80a4905104b8cf5": "e90cec94c0dde2e400422786cc098adf",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/5e90b5a5969516fdc96527bc4095a8d6a18354": "7ed33b78cce124c1936d000ca11cb9a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6bc33bd4b2d4f608cde8693609512bafb64937": "00f22de00225e7ac1446df066e3f400b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/108db95bc47c161e941eea7090147f69970ef8": "1db2e828b03a8f7ffc5dace50416790e",
".git/objects/92/788cd0f95e288628130e813f0ffe7d19a334ef": "f8fd274093c2eafe67dd8ebbdfd3cc92",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a5/ff6d9d6b05b400039d14367d069babada35a5d": "e4c90809c1d536a7cfd641912bc72f4f",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b6/8ce5975ef74d88492492b02fbcd72f7ca268b4": "fd41f2fdd7f6162f93310b4eb96e5ee1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9cf61086bd5c4e085f7a8b06121e6a9c905382": "ef26a55dea93eac28c275cdb190fd455",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/f3b4ccb7e7b5005223be54dd27a6f6a95572bd": "0e52f09e0ac96bd7f8cbf4df547631e9",
".git/objects/c7/89d897808da40d1ddb09e63e4856a06ca54f0d": "4df7414d709a3b394eb2c33b4f97ef66",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/0e1fc5935de1e26161830d46cdbced4fe9d735": "b16dd75a0d4d7a6fafe8b727bfdc00cd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/0ef317df23390b2e1f4b64131a55f38dee8ac3": "8fb30945ebc1ae45f2a94ade9732ddfa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/d7f168cab177b00ae14ada94d3ade28496c9fb": "21442b953fcda522134208d9ef0dab5c",
".git/objects/f9/f17c676d3d550e190d099eca91c63ed225bc26": "31af72fe4fcca9bee9f43946aa4dde44",
".git/ORIG_HEAD": "f91750c7f647e27bb77ffa71eb10e076",
".git/refs/heads/main": "9a120c394e1854e359e3c69cf1e5cc7c",
".git/refs/heads/new-branch": "f91750c7f647e27bb77ffa71eb10e076",
".git/refs/remotes/origin/main": "eaff2061c374824a0df99d3b0f66aa1a",
"assets/AssetManifest.json": "518cb5024ef04908a736ac665e3715ef",
"assets/assets/cat.png": "91d34e5fb0a103dc8cf84df7ec92d44f",
"assets/assets/cat.riv": "8166aeb10fe0fc57439979dd38ebef8c",
"assets/assets/email.svg": "40f71b99a89bdafd196ba6705c2c1d10",
"assets/assets/github.svg": "ec81af63b0a46372c856bed88c7688c5",
"assets/assets/google_play.svg": "5188feb2d4b647bcc8436674a37cd0b9",
"assets/assets/telegram.svg": "1130faa811ddcd055446d584e8397006",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a8c819f6f4bde973e099dff63c950ef5",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "89b48c118cc4f6337e40bf49e17799ff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "71408c75339fcd244bc34cb4cf9c9631",
"icons/Icon-512.png": "f337e71fe16d50de47479ec2db2c53a6",
"icons/Icon-maskable-192.png": "71408c75339fcd244bc34cb4cf9c9631",
"icons/Icon-maskable-512.png": "f337e71fe16d50de47479ec2db2c53a6",
"index.html": "2c2d661b277ae8043c7a451a9355956d",
"/": "2c2d661b277ae8043c7a451a9355956d",
"main.dart.js": "8fe03bff1de39eca4f6bfc73ee87df0c",
"manifest.json": "e66f357e1f9125dc67aa0dc14d19b0e0",
"version.json": "86ce56ed507c77921aa442a27310c0b0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
