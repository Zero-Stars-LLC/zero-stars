import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import GoogleButton from 'react-google-button';

const App = () => {
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
    <div className="bg-dark text-light">
      <Navbar loggedIn={loggedIn} />
      <div className="header bg-dark text-light p-5 text-center">
        <div className="container bg-dark mb-5">
          <div className="container mb-5">
            <h1>Zero Stars</h1>
            <h4>Monitor your negative reviews.</h4>
          </div>
          <div className="LoginButton container mb-5">
            <button
              className="btn btn-danger btn-lg"
              id="Login"
              onClick={() => handleEntry('/login')}
            >
              Log In
            </button>
          </div>
          <div>
            <p className="fs-4">Don't have an account?</p>
          </div>
          <div className="SignUpButtons mb-4">
            <div className="col">
              <div class="col container mb-3">
                <button
                  className="btn btn-light "
                  id="Sign Up"
                  onClick={() => handleEntry('/signup')}
                >
                  Sign Up
                </button>
              </div>
              {/* </div> */}
              <div class="row">
                <p clasName="fs-1">Or</p>
              </div>
              <div className="GoogleButton container mb-5 col d-flex justify-content-center">
                <GoogleButton
                  // className='btn btn-light'
                  id="google"
                  // type="light"
                  onClick={() => handleEntry('/auth/google')}
                />
                {/* <GoogleButton /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
