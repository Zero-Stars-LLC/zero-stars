const db = require('./userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  //destructure request body to get passed in username and password
  const { username, password } = req.body;
  //verify that both the username and password were passed in
  if (username && password) {
    //initialize query variable
    const insert =
      'INSERT INTO Users (username, password) VALUES ($1, $2)  RETURNING*;';
    //call query with insert statement and pass in parameters
    db.query(insert, [username, password])
      .then((data) => {
        console.log(data);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'error in create user',
          status: 404,
          message: { err: 'error in create user ' },
        });
      });
  } else
    return next({
      log: 'both fields not met',
      status: 404,
      message: { err: 'enter both a username and pasword ' },
    });
};
userController.login = (req, res, next) => {
  //destructure request body to get passed in username and password
  const { username, password } = req.body;
};

module.exports = userController;
