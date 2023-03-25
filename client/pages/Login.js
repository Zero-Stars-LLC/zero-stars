import React, { useState } from 'react';

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make POST request to /login
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const { username, password } = data;
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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

export default Login;
