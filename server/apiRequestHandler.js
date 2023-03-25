const apiHandler = {};

apiHandler.getData = async (req, res, next) => {
  try {
    // call google functino api handler will send along the place id
    // places_id will be in req.body
    const data = { message: 'in api handler' };
    // call to function with places_id and assign data to req.locals
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
