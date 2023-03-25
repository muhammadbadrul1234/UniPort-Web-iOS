'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7460bceef620e531af0fc781fa8a0485",
"assets/assets/icon/anonymous.svg": "8f25d5974d184b4e2ac5c4a03a0b97a7",
"assets/assets/icon/app_icon.png": "d423f465d5c2c98bc1ca1801d19c9ca9",
"assets/assets/icon/assigned_batch.svg": "694b7f8d43a4fef405d479e63d49d858",
"assets/assets/icon/batch_advisor.svg": "efcdcf7b5c079274e81d8c198ce28422",
"assets/assets/icon/chat_any.svg": "fb63451350a0b75b8c967fe45207f967",
"assets/assets/icon/delete.svg": "f936b78d3f56c50174e6571652c0b120",
"assets/assets/icon/group_chat.svg": "5cc88f4fd64b85d41c9ce654c3c92e20",
"assets/assets/icon/icon.svg": "716a3cef1e6459c124e7f9458e4bfa44",
"assets/assets/icon/logout.svg": "bb1e5319b60663d104b60450ad4302bc",
"assets/assets/icon/notification.svg": "ad8636776d64b07479e2086a8edd3a8f",
"assets/assets/icon/notification_mutted.svg": "0d43d997b1602f561744981ba5f56661",
"assets/assets/icon/student.svg": "4a7d2cebdce12a4e4a693367db77d1d4",
"assets/assets/icon/teacher.svg": "fd2c966adbe3f2879b6bc33ab23ab132",
"assets/assets/images/chat_any.svg": "a8c61750ee66bf058c98253ca6bae37d",
"assets/assets/images/google_logo.svg": "fa0f5dae41a259a6d4cc58bf51565f82",
"assets/assets/images/img_152keylinesquare.png": "eb119895cb0e1b8334b0ac79905dcd67",
"assets/assets/images/img_arrowleft.svg": "d63bae66402cd629327677799a4fa646",
"assets/assets/images/img_dashboard.svg": "6c6b50683e5ff616d48914854066110e",
"assets/assets/images/img_group114.svg": "17060771acdc24a91b09b3d33da03a5d",
"assets/assets/images/img_group81.svg": "145304b0f6a51f45c0ac3af2707cc6be",
"assets/assets/images/img_link.svg": "54bfb1d239c7f05e096f80b6f278b9b2",
"assets/assets/images/img_lock.svg": "486346342bd27dee5e831e4cdebb940e",
"assets/assets/images/img_mail.svg": "06cdd0e224a16c73e8f65dd9116f4bcc",
"assets/assets/images/img_menu.svg": "8a238be6b0e5e086b5815c528d3fe11d",
"assets/assets/images/img_secured.svg": "d72342743290531c4798ec37f31a6a0a",
"assets/assets/images/img_user.svg": "d9ab7a939459748dd5995efaeadb73c6",
"assets/assets/images/img_vector_teal_700.svg": "feff5a869b735f5b12636f39197aff03",
"assets/assets/images/img_volume.svg": "b71b847142629a1cbcf7c507c54ae3ae",
"assets/assets/images/img_volume_teal_700.svg": "cb12c6eb617450b739df0467efd8ed0c",
"assets/assets/images/logo_google_icon.svg": "0c8ee5cff1d79857f8fc7f8cd4b4a16f",
"assets/assets/images/report.svg": "25634d03d50d512adb311351338b1581",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "272af294319ac1d93df03d9427866af8",
"assets/NOTICES": "082bcac11ec5dc6376831c3eb6b4d31a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "39182aa7fbe5e6604345837abf463f10",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "2f7529ec527bc2f36b8f964517a71d3e",
"icons/Icon-512.png": "2c1b3dfa2da982ddf2bcd31e938fa3a6",
"icons/Icon-maskable-192.png": "2f7529ec527bc2f36b8f964517a71d3e",
"icons/Icon-maskable-512.png": "2c1b3dfa2da982ddf2bcd31e938fa3a6",
"index.html": "375a8230562737c80c2862d6939d5923",
"/": "375a8230562737c80c2862d6939d5923",
"main.dart.js": "a08c417fb39d03ec612e27a272f180e3",
"manifest.json": "c323efae0b0129d38a7ab47a9127f28b",
"version.json": "32e6b3eaac28085b9f218ebeaa38b020"
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
