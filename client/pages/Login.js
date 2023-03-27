import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // make POST request to /login
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          navigate('/homepage');
          // return redirect('/homepage');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { username, password } = data;
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
          <h3>Login</h3>
          </div>
          <div className='Login container d-flex justify-content-center'>
            <form
              className='align-items-center mx-auto'
              onSubmit={handleSubmit}
            >
              <div>
                <label className='col-form-label'>
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
              <input
                className='btn btn-danger'
                type='submit'
                name='submit'
                value='Login'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
