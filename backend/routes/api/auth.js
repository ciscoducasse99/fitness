const express = require("express");
const passport = require("passport");

const router = express.Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user.admin_name + " successfully logged in");
  res.send(req.user.id);
});

router.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logOut();
    console.log("user logged out");
    res.status(200).json({ message: "User Logged out" });
  } else {
    res.send(400, "user not logged in");
  }
});

router.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("> user authed");
    res.status(200).json(req.session.passport.user);
  } else {
    console.log("> user not authed");
    res.status(401, "User not authenticated");
  }
});

// This should be the last route else any after it won't work
router.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = router;
