import React from 'react';

const App = () => {
  return (
    <div className='bg-dark text-light p-5'>
      <div className='container'>
        <div className='container mb-5'>
          <h1>Zero Stars</h1>
          <h4>Monitor your negative reviews.</h4>
        </div>
        <div className='LoginButton container mb-5'>
          <p>Login</p>
          <button id='Login' className='btn btn-light'>Login</button>
        </div>
        <div className='Sign Up Button container mb-5'>
          <p>Don't have an account yet? </p>
          <button id='Sign Up' className='btn btn-light'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default App;
