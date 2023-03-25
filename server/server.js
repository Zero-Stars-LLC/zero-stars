const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userController = require('./userController');
const cookieController = require('./cookieController');
const sessionController = require('./sessionController');
// const apiRouter = require('./routes/api.js');

const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(express.json());
app.use(cookieParser());

/**
 * root
 */
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static(path.join(__dirname, '../build')));
// }

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
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

//handle users logging up
app.post(
  '/login',
  userController.login,
  cookieController.setSSIDCookie,
  (req, res) => {
    //swap out json for redirect route
    return res.status(200).json({});
  }
);

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
