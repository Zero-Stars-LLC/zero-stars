const db = require('./userModel');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async (req, res, next) => {
  //destructure request body to get passed in email, username and password
  const { email, username, password } = req.body;
  //verify that both the username and password were passed in
  if ((email, username && password)) {
    //initialize query variable
    const insert =
      'INSERT INTO Users (email, username, password) VALUES ($1, $2, $3)  RETURNING userid;';
    //create bcrypt hash
    const hash = await bcrypt.hash(password, 5);
    //call query with insert statement and pass in parameters
    db.query(insert, [email, username, hash])
      .then((data) => {
        //set id for the cookie
        res.locals.id = data.rows[0].userid;
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
  //verify that both the username and password were passed in
  if (username && password) {
    //initialize query variable
    const retrieve = `SELECT * FROM Users WHERE username = ($1);`;
    //call query statement with query statement and username
    db.query(retrieve, [username])
      .then(async (data) => {
        //store the password and id in a variable
        const pw = data.rows[0].password;
        const userId = data.rows[0].userid;
        //store bcrypt comparison in variable
        const valid = await bcrypt.compare(password, pw);
        //check if password matches
        if (valid) {
          res.locals.id = userId;
          return next();
        } else
          return next({
            log: 'error in login',
            status: 404,
            message: { err: 'please enter a valid username and password' },
          });
      })
      .catch((err) => {
        return next({
          log: 'error in login',
          status: 404,
          message: { err: 'error in login user ' },
        });
      });
  } else
    return next({
      log: 'both fields not met',
      status: 404,
      message: { err: 'enter both a username and pasword ' },
    });
};
module.exports = userController;
