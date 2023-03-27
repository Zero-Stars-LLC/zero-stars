import React from 'react';


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
    <div className='bg-dark text-light p-5'>
      <div className='container'>
        <div className='container mb-5'>
          <h1>Zero Stars</h1>
          <h4>Monitor your negative reviews.</h4>
        </div>
        <div className='LoginButton container mb-5'></div>
    <div>
        <div className='LoginButton container mb-5'></div>
      <button id="Login" onClick={() => handleEntry('/login')}>
        Login
      </button>
      </div>
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

