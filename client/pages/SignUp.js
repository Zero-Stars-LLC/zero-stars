import React, { useState } from 'react';

const SignUp = () => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make POST request to /signup
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const { email, username, password } = data;
  return (
    <>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={email} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={username} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} />
        </label>

        <br />
        <input type="submit" name="submit" />
      </form>
    </>
  );
};

export default SignUp;
