import { useState } from 'react';
import { getToken, onMessageListener } from './firebase';

import "./styles.css";

export default function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);
  onMessageListener().then(payload => {
    // setShow(true);
    // setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));
  return (
    <div className="App">
      {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
