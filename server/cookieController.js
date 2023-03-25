const cookieController = {};

/**
 * setSSIDCookie - store the user id in a cookie that will expire
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  res.cookie('ssid', res.locals.id, {
    expires: new Date(Date.now() + 30000),
    httpOnly: true,
  });
  return next();
};

module.exports = cookieController;
