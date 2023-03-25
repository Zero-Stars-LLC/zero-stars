import React from 'react';
import styles from './styles.css';
import App from './App.js';
import Homepage from './pages/Homepage.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'homepage',
    element: <Homepage />,
  },
//   {
//     path: 'login',
//     element: <Login />,
//   },
//   {
//     path: 'signup',
//     element: <SignUp />,
//   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
