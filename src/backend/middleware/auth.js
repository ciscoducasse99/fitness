// This is to protect routes. Prevents users who arent authenticated in to see dashboard
// and prevents users who are authenticated to see the login

module.exports = {
  ensureAuth: function (req, res, next) {
    // req.isAuthenticated() returns Boolean
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({ message: "redirecting..." });
      //if not authenticated, return on login page
    }
  },
  ensureGuest: function (req, res, next) {
    // if true, skip login page
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
    } else {
      return next();
      // if not authenticated, do nothing. The only route that uses this function is the index login route
    }
  },
};

// ensureGuest route is only used on the login/index route. Every
// other route is protected.
