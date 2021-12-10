import React, { useState, useEffect } from 'react';
import '../src/App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { signInUser } from "./data/auth";

function App() {
const [user, setUser] = useState({});

useEffect(() => {
  firebase.auth().onAuthStateChanged((authed) => {
    if (authed) {
      setUser(authed);
    } else {
      setUser(false);
    }
  });
}, []);

console.warn(user);

  return (
    <div className="App">
     <button onClick={signInUser}/>
    </div>
  );
}

export default App;
