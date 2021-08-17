const express = require("express");
const router = express.Router();
// require('./app/routes')(app);

router.post("/contactform", (req, res) => {
  const { firstName, lastName, email, msg } = req.body;

  try {
    throw Error;
    //res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/", (req, res) => {
  res.send("Forms");
});

module.exports = router;
