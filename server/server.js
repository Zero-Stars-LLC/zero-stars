const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userController = require('./userController');
const cookieController = require('./cookieController');
const sessionController = require('./sessionController');
const cors = require('cors');
// const apiRouter = require('./routes/api.js');
const apiRequestHandler = require('./apiRequestHandler');

const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(
  cors({
    origin: 'http://localhost:8080/auth/google',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // The HTTP methods allowed by the server
    allowedHeaders: ['Content-Type', 'Authorization'], // The headers allowed by the server
  })
);

/**
 * root
 */

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));
}

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static(path.join(__dirname, '../build')));
// }

app.get('/signup', (req, res) => {
  res.json({});
});

app.get('/login', (req, res) => {
  res.json({});
});

//handle users signing up
app.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    //swap out json for redirect route
    return res.status(200).json({ value: true });
  }
);

//handle users logging in
app.post(
  '/login',
  userController.login,
  cookieController.setSSIDCookie,
  (req, res) => {
    //swap out json for redirect route
    return res.status(200).json({});
  }
);

//handle google oauth auth url request
app.get('/auth/google', userController.getUrl, (req, res) => {
  return res.json(res.locals.url);
});

//info sent back from google to our specified callback path
app.get('/google/oauth', userController.callback, (req, res) => {
  return res.redirect('http://localhost:8080/homepage');
});
// get request to api
// calls api function with places id
// send data requested data back to frontend
app.get('/api/:restuarant_details', apiRequestHandler.getData, (req, res) => {
  return res.status(200).json(res.locals.reviews);
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
