import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {

  const [ userProfile, setUserProfile ] = useState()

  console.log('user', userProfile)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {userProfile?.name}</p>
        <GoogleLogin
          clientId="306964030038-nmaje4copbq90ukj482qf5523o7nu57i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={r => setUserProfile(r.profileObj)}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </header>
    </div>
  );
}

export default App;
