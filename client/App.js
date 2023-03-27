import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'

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
    <div className='bg-dark text-light'>
      <Navbar loggedIn={loggedIn}/>
      <div className='header bg-dark text-light p-5 text-center'>
        <div className='container bg-dark mb-5'>
          <div className='container mb-5'>
            <h1>Zero Stars</h1>
            <h4>Monitor your negative reviews.</h4>
          </div>
          <div className='LoginButton container mb-5'>
            <button
              className='btn btn-danger btn-lg'
              id='Login'
              onClick={() => handleEntry('/login')}
            >
              Log In
            </button>
          </div>
          <div>
            <p>Don't have an account?</p>
          </div>
          <div className='SignUpButtons mb-4'>
            <div className='col'>
              <div class='col container ms-1 mb-3'>
                <button
                  className='btn btn-sm btn-light '
                  id='Sign Up'
                  onClick={() => handleEntry('/signup')}
                >
                  Sign Up
                </button>
              </div>
              {/* </div> */}
              <div class='row ms-1'>
                <p clasName='fs-1'>Or</p>
              </div>
              <div className='GoogleButton container mb-5 ms-1 col'>
                <button
                  className='btn btn-sm btn-light'
                  id='google'
                  onClick={() => handleEntry('/auth/google')}
                >
                  Use Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
