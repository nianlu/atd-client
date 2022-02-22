import React, { useState, useEffect } from 'react';
import './App.css';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {

  const [ login, setLogin ] = useState(false)
  const [ userProfile, setUserProfile ] = useState()

  console.log('user', userProfile)

  return (
    <div className="App">
      <nav className='bg-gray-200'>
        <h1 className="text-3xl font-bold">
          Hello!
          <span>{userProfile?.name}</span>
        </h1>
        {userProfile?
          <GoogleLogout
            clientId="476069197979-4qvql9sgerf0bchrkjopalehhgdokk3a.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={r => setUserProfile()}
          >
          </GoogleLogout>
          :
          <GoogleLogin
            clientId="476069197979-4qvql9sgerf0bchrkjopalehhgdokk3a.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={r => setUserProfile(r.profileObj)}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        }
      </nav>
    </div>
  );
}

export default App;
