importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js');


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   }).catch(function(err) {
//     console.log('Service worker registration failed, error:', err);
//   });
// }

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDjgmAZLZ6cnfNnivWlvdrpaHBrRX2cgp4",
  authDomain: "push-msg-f9486.firebaseapp.com",
  projectId: "push-msg-f9486",
  storageBucket: "push-msg-f9486.appspot.com",
  messagingSenderId: "22576554129",
  appId: "1:22576554129:web:72d4d6edec2b417dc39f30",
  measurementId: "G-SPKYKHD6Z1"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
