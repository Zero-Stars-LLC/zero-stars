import React, { useState } from 'react';
import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignUp = () => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [signedUp, setSignedUp] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // make POST request to /signup
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setSignedUp(true);
          navigate('/homepage');

          // return redirect('/homepage');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { email, username, password } = data;
  return (
    <div className='bg-dark text-light'>
      <Navbar />
    <div className='bg-dark text-light p-5 text-center'>
      <div className='container bg-dark mb-5'>
        <div className='container mb-5'>
          <h1>Zero Stars</h1>
          <h4>Monitor your negative reviews.</h4>
        </div>
        <div className='Login container'>
          <div className='mb-4'>
            <p className='fs-5'>Sign up to see your reviews</p>
          </div>
          <div className='Login container d-flex justify-content-center'>
            <form
              className='align-items-center mx-auto'
              onSubmit={handleSubmit}
            >
              <label className='col-form-label'>
                Email:
                <input
                  className='form-control mb-4'
                  type='text'
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
              </label>
              <div>
                <label>
                  Username:
                  <input
                    className='form-control mb-4'
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input
                    className='form-control mb-4'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <input type='submit' name='submit' className='btn btn-danger' />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
