self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
  event.waitUntil(self.registration.showNotification(event.data.text()));
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();



  event.waitUntil(
    clients.openWindow('https://www.baidu.com')
  );
});