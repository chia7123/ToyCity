const cacheName = 'toy-city';
const filesToCache = [
  '/',
  '/index.html',
  '/product1.html',
  '/product2.html',
  '/product3.html',
  '/product4.html',
  '/product5.html',
  '/product6.html',
  '/product7.html',
  '/product8.html',
  '/product9.html',
  '/product10.html',
  '/product11.html',
  '/product12.html',
  '/404.html',
  '/about.html',
  '/cart.html',
  '/checkout.html',
  '/confirmation.html',
  '/faq.html',
  '/order.html',
  '/shop.html',
  '/shop1.html',
  '/tandc.html',
  '/privacy.html',
  '/css/style.css',
  '/css/home.css',
  '/css/style3D.css',
  '/css/maps/home.css.map',
  '/css/maps/style.css.map',
  '/dist/sweetalert2.css',
  '/dist/sweetalert2.js',
  '/dist/sweetalert2.all.js',
  '/dist/sweetalert2.all.min.js',
  '/dist/sweetalert2.min.css',
  '/dist/sweetalert2.min.js',
  '/app.js',
  '/js/script.js',
  '/js/main.js'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
      );
    });
    
    self.addEventListener('activate', event => {
      console.log('Service worker activate event!');
    });
    
    self.addEventListener('fetch', event => {
      console.log('Fetch intercepted for:', event.request.url);
      event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return fetch(event.request);
          })
        );
    });

    // TODO 2.6 - Handle the notificationclose event
self.addEventListener('notificationclose', event => {
  const notification = event.notification;
  const primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});


// TODO 2.7 - Handle the notificationclick event
self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  const action = event.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('order.html');
    notification.close();
  }

  // TODO 5.3 - close all notifications when one is clicked
});
// TODO 3.1 - add push event listener
self.addEventListener('push', event => {
  let body;

  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Default body';
  }

  const options = {
    body: body,
    icon: 'images/logo.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
    },
    actions: [
      {action: 'explore', title: 'Go to the site',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close the notification',
        icon: 'images/xmark.png'},
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
