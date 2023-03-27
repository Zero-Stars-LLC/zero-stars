import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
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
    <div>
      <button id="Login" onClick={() => handleEntry('/login')}>
        Login
      </button>
      <button id="Sign Up" onClick={() => handleEntry('/signup')}>
        Sign Up
      </button>
      <button id="google" onClick={() => handleEntry('/auth/google')}>
        Login with google
      </button>
    </div>
  );
};

export default App;
