// Service worker: bewaart de app op je telefoon zodat hij offline werkt.
// Verhoog het versienummer bij elke wijziging, dan haalt de app de nieuwe versie op.
const VERSION = 'trainingsapp-v4';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/icon.svg',
  './icons/icon-maskable-512.png',
  './fonts/big-shoulders-stencil-display-700.woff2',
  './fonts/big-shoulders-stencil-display-800.woff2',
  './fonts/architects-daughter-400.woff2'
];

self.addEventListener('install', (event) => {
  // 'reload': altijd vers van de server, niet uit de tijdelijke browsercache (anders kan een oud bestand in de nieuwe versie belanden).
  event.waitUntil(caches.open(VERSION).then((cache) =>
    cache.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))
  ));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Eigen bestanden (ook de lettertypen): uit de opslag, anders van internet.
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
  }
});
