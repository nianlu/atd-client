import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {

  const [ userProfile, setUserProfile ] = useState()

  console.log('user', userProfile)

  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold">
          Hello world!
          <span>{userProfile?.name}</span>
        </h1>
        <GoogleLogin
          clientId="306964030038-nmaje4copbq90ukj482qf5523o7nu57i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={r => setUserProfile(r.profileObj)}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <GoogleLogout
          clientId="306964030038-nmaje4copbq90ukj482qf5523o7nu57i.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={r => setUserProfile()}
        >
        </GoogleLogout>
      </header>
    </div>
  );
}

export default App;
