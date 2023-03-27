import React, { useState } from 'react';
import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
    <>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <br />
        <input type="submit" name="submit" />
      </form>
    </>
  );
};

export default SignUp;
