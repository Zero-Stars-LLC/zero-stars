import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import GoogleButton from 'react-google-button';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  //   handle request for whichever page is requested
  const handleEntry = (where) => {
    fetch(where)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data && where != '/auth/google') {
          navigate(where);
        } else window.location.href = data;
      })
      .catch((err) => {
        console.log(`error in routing to ${where}`);
      });
  };

  return (
    <div className='bg-dark text-light p-5'>
      <div className='container'>
        <div className='container mb-5'>
          <h1>Zero Stars</h1>
          <h4>Monitor your negative reviews.</h4>
        </div>
        <div className='LoginButton container mb-5'>
          <button className='btn btn-light' id='Login' onClick={() => handleEntry('/login')}>
            Login
          </button>
        </div>
        <div className='SignUpButton container mb-5'>
          <button className='btn btn-light' id='Sign Up' onClick={() => handleEntry('/signup')}>
            Sign Up
          </button>
        </div>
        <div className='GoogleButton container mb-5'>
          <button className='btn btn-light' id='google' onClick={() => handleEntry('/auth/google')}>
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
