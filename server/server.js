const express = require('express');
const app = express();
const path = require('path');
const userController = require('./userController');
// const apiRouter = require('./routes/api.js');
const apiRequestHandler = require('./apiRequestHandler');

const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(express.json());

/**
 * root
 */

if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));
}

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

//handle users signing up
app.post('/signup', userController.createUser, (req, res) => {
  //swap out json for redirect route
  return res.status(200).json({});
});

//handle users logging up
app.post('/login', userController.createUser, (req, res) => {
  //swap out json for redirect route
  return res.status(200).json({});
});

// get request to api
// calls api function with places id
// send data requested data back to frontend

app.get('/api', apiRequestHandler.getData, (req, res) => {
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
