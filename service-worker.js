console.log('Service worker loaded');
// const CACHE_NAME = 'my-pwa-cache-v2';
// const urlsToCache = [
//     './',
//     './index.html',
//     './styles.css',
//     './app.js',
//     './icons/icon.png',
//     './manifest.json',
//     'https://cdn.jsdelivr.net/npm/quagga@0.12.1/dist/quagga.min.js'
// ];

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => {
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// self.addEventListener('fetch', event => {
//     // Skip cache for hard reload (Ctrl+Shift+R)
//     if (event.request.cache === 'reload') {
//         // Clear all caches
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cacheName => caches.delete(cacheName))
//             );
//         });
//         console.log('Cache cleared');
//     }

//     event.respondWith(
//         caches.match(event.request)
//             .then(response => {
//                 if (response) {
//                     return response;
//                 }
                
//                 const fetchRequest = event.request.clone();
                
//                 return fetch(fetchRequest).then(response => {
//                     if (!response || response.status !== 200 || response.type !== 'basic') {
//                         return response;
//                     }
                    
//                     const responseToCache = response.clone();
                    
//                     caches.open(CACHE_NAME).then(cache => {
//                         cache.put(event.request, responseToCache);
//                     });
                    
//                     return response;
//                 });
//             })
//             .catch(() => {
//                 return new Response('Offline mode: Unable to fetch new data');
//             })
//     );
// }); 