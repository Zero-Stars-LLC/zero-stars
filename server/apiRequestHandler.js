const apiHandler = {};

apiHandler.getData = async (req, res, next) => {
  try {
    // call google functino api handler will send along the place id
    const data = { message: 'in api handler' };
    req.locals = data;
    next();
  } catch (error) {
    return next({
      log: 'apiHandler error',
      status: 404,
      message: 'something went wrong in apiHandler.getData',
    });
  }
};

module.exports = apiHandler;
