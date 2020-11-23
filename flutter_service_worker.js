'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "fdcec71a91a92bf6dd4b8a47e35b53b5",
"/main.dart.js": "84fd4da90d4b8d1620e92cdcb6110598",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "90fc7d8c32d92163f57428c1af096f2f",
"/assets/LICENSE": "41e74790c4bd4af616ed5024b5c80836",
"/assets/AssetManifest.json": "1155c4aea50186e7015754c1f581e5e4",
"/assets/FontManifest.json": "4bd386bed52c5ab7496f9c888cb17f85",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/branca-ico.svg": "7de47e20a4a2118e37ecdbf91565b791",
"/assets/assets/images/bg_.jpg": "31d6e0c813fcb6be55b7b898651f8fb5",
"/assets/assets/images/shell-ico.svg": "90e1e018a1ea5f19d280f1d1c8019619",
"/assets/assets/images/xa-logo.svg": "a2ac89e18da0f4e7a4f38edea56bc55e",
"/assets/assets/images/xa-logo.png": "8bb90998be0ad3c5e553c06b2a02e960",
"/assets/assets/images/xa-logo-h27.png": "d7af629f2a2904a8fb3cce72171a7470",
"/assets/assets/images/vip-logo.svg": "992f4d10cb52d5392f6abd3279ce8249",
"/assets/assets/images/ipiranga-ico.svg": "45edabc9949acca3c35bc68ac5795829",
"/assets/assets/images/bg%2520copy.png": "75aaef9be76c739bfd8e8a9c653b5d4c",
"/assets/assets/images/petrobras-ico.svg": "bb2320e3b4e0b3ef7dbb8c0d2c858a60",
"/assets/assets/images/bg.png": "75aaef9be76c739bfd8e8a9c653b5d4c",
"/assets/assets/images/bg.jpg": "aedb829ecd706f874500b1f098e1e72c",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-Medium.ttf": "7cfbd4284ec01b7ace2f8edb5cddae84",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf": "b4618f1f7f4cee0ac09873fcc5a966f9",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-LightItalic.ttf": "85fb02352b0167446e71a91a35d4d6cc",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-BoldItalic.ttf": "4a0b78a48050f97c16ef6fc518afd362",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-ThinItalic.ttf": "355d559cc860016a068bcd16b66e4bd3",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-RegularItalic.ttf": "c37c35a80051edc42d141ec301066052",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-Light.ttf": "9d1044ccdbba0efa9a2bfc719a446702",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-MediumItalic.ttf": "c1d4ca93da41dc3f8382ec6798d3708e",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"/assets/assets/fonts/Roboto_Mono/RobotoMono-Thin.ttf": "288302ea531af8be59f6ac2b5bbbfdd3",
"/assets/assets/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"/assets/assets/fonts/UberMove/UberMoveText-Regular.otf": "56a881f549bee0679adf459053b532f1",
"/assets/assets/fonts/UberMove/UberMoveText-Medium.otf": "a4ce5db3eb22593d0e54b858789bfb5a",
"/assets/assets/fonts/UberMove/UberMoveText-Light.otf": "152f201134e28e5556e645ead9a76d6f",
"/assets/assets/fonts/UberMove/UberMoveText-Bold.otf": "2e8c4835c28a4a20fea9efc5d2fb798a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
