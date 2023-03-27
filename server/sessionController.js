const sessionController = {};

/**
 * isLoggedIn
 * verify whether or not the SSID cookie is still valid.
 * redirect to login if not
 */
sessionController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    console.log('cookie ' + req.cookies.ssid);
    return next();
  } else return res.redirect();
};

module.exports = sessionController;
