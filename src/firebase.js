import firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyDjgmAZLZ6cnfNnivWlvdrpaHBrRX2cgp4",
  authDomain: "push-msg-f9486.firebaseapp.com",
  projectId: "push-msg-f9486",
  storageBucket: "push-msg-f9486.appspot.com",
  messagingSenderId: "22576554129",
  appId: "1:22576554129:web:72d4d6edec2b417dc39f30",
  measurementId: "G-SPKYKHD6Z1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BEGhdZ45B8jFqEtKtW1uqT1ODhZTwk1ibXou3unMhx1hUKlaHhbh_Lly7_n9piTXMIOxkKWkdRtxi85T8ZMGNjQ"
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
