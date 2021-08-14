'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ee64429ad0bc20b31f716a70656621ef",
"index.html": "c1e991e5a9bd4f34a0c258c59cabbe37",
"/": "c1e991e5a9bd4f34a0c258c59cabbe37",
"main.dart.js": "a4391e943162f212b4b93dd6e4e99381",
"README.md": "26bab917dce9d16b7353300b642457c6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3f749f9d7e268a6c1446651492b5264d",
".git/ORIG_HEAD": "db6127add1133635e3d3a899c25da394",
".git/config": "1089f8c2a1f517c2c2b303ba994b6011",
".git/objects/50/d6fce23ebc20c830b0c61ba236f85d5bd46698": "8872075dd0120aed936725443bee6311",
".git/objects/68/3eb3e6db01c2d5e758c75b9f842ab45caf4614": "5bde166c11c868ca87c27df86d9988ed",
".git/objects/3b/d0cb46b39eb48d008175cce3f39d3b2ea5dc14": "462f772e926cf7aa0f70d28e202be23d",
".git/objects/3b/9ae852f2b23961ef79647a13e22975df81a2ab": "226ded7f0ab7b84502a199eadefb6b80",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/599d24d6172e68fd5927fe4a50bab2a8e33f50": "25cd1be9dc24cd28c535c97eea2932fb",
".git/objects/0b/aa0b77fa3f9c52a4a7db2f8886a4d9cf2e02a6": "84f1e779d7b1fe3d44ab5678a61ddf24",
".git/objects/60/b096cd651992456c64f6f37420241cbb34e650": "75259c8fda3f48738733534abaafe2f3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/ef0ff52109e90ea7426ca2126a0f076ec7cf0e": "1872c0234c4e78f29cff5401f7ca585c",
".git/objects/c9/d6a65ed4778facc0a17ad2ab451bbb155afe02": "fa01f8aa9d91e48cb0c682883fc2440f",
".git/objects/fe/acaeb90d50781e101e4498de0d02298ad745cf": "73c3feafa6fa21d2aef927803117d6be",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/e16933581287c551acae4d9cba60204f24bf9a": "eacafc176f3bd3ad5d82cfb1daef2b6b",
".git/objects/7d/cab969d3bbb75154d63c90435e03420e326162": "56f4b0977641d571263f974d446294c0",
".git/objects/17/839a609ebd2946924433a3f795328a6fdf0c39": "0671a39337897ab9a9b1852d2c0f0a33",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/557cf288801eff2fefdf26c834fec1c716062f": "79f9a73175167101f684d99df11a5679",
".git/objects/43/9cd5ce26a764361b6bf3d53a8fd3fc1b1fbaac": "14eb208643aa6cddea33cc80c34280e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/8aacef0ab63cf734342c4baea3d8ca5f005a09": "fc50ab325d6ec28eb84c1d9a13213198",
".git/objects/91/d7721b8cf7fe7aeb80ce531ca8d156fafe4d5b": "ed464d7ef1e683a743f8f667a4744890",
".git/objects/96/ebf0012b96f64ce3109aba80f61298e0937ffc": "36dd83e0fde234edb671c5490525860f",
".git/objects/53/0305019d4e5d256e87c05a9fd749b2ce8fd466": "821dee8f2eb89f166863cc29c139f09c",
".git/objects/3f/1403246e5a7e100a87a4aa0d56468d9be70d18": "bd695be65c36642a0d85c18b43adf06d",
".git/objects/3f/41f05781b9d9896dd29e493a7a93b5acc040b4": "ddde962e04b37ac0948d7610f562e075",
".git/objects/5b/88ba23f974b38615654cf7e240b1f6711c4131": "ab825011a657e04291347d7ffb57f24b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/b62ab5967ed25d9ac3a0705ec6b709a4ffaad7": "8d759fbde25ed8930ce3cdb5c3dca7fb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/e5571dfd0e3802876742d4ba2b882f09586436": "1668c41deda09d2e979b3ce64dbed656",
".git/objects/c2/f1895905667b7ef6e61e8ef494568172ccbd7f": "0a16fa0664e4e0d229b22dbbb5bdae92",
".git/objects/e0/03f56526bf1d9594c2ead5cf582deabe6384ec": "5e74278708208be5e404ecec5216d64a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/b1cba082109d038a7645f3ac25d7a4d39ca75a": "d4e14fa5b6e300360ed43d540fe7525c",
".git/objects/71/057d14c825c5b2f1b55328d48a34b4b155eb69": "7d2bbba3ea04366c1923a29c63177bae",
".git/objects/25/9fc0b7be789d98b8a92a6426202495501b4890": "1c2afd13af03e1e0eb31cbc85de954af",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28319b688b40d7cd7db4bd9ee75978a0",
".git/logs/refs/heads/main": "aa1ed45e9ff743fec3d92f7e2a279cb3",
".git/logs/refs/remotes/origin/main": "045a9cc6c6b40eba68b307767ed86bf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "01f3174684de21ba731a9605c3cd4768",
".git/refs/remotes/origin/main": "01f3174684de21ba731a9605c3cd4768",
".git/index": "8b158fe74435c68d32379b5188bae35a",
".git/COMMIT_EDITMSG": "866706659bcb45bacfb445bc91e61db5",
".git/FETCH_HEAD": "df66c3f8b0685973317564f2ad350bfa",
"assets/AssetManifest.json": "6411d3cfd431817d45f63b41bc6ceb10",
"assets/NOTICES": "0c78154834936a56a1a70b93e93030eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/obon.png": "d45a791dbd0a83138ebf52db2683d742"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
