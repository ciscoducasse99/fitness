const express = require("express");
const router = express.Router();
// require('./app/routes')(app);

router.post("/contactform", (req, res) => {
  const { firstName, lastName, email, msg } = req.body;

  try {
    return firstName;
  } catch (e) {
    throw Error(e);
  }
});

router.get("/", (req, res) => {
  res.send("Forms");
});

module.exports = router;
