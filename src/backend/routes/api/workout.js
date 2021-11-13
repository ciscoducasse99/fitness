const express = require("express");
const router = express.Router();

// Search for workouts
router.get("/get-workouts", (req, res) => {
  const { muscle, category } = req.body;
  res.send("workout");
});

module.exports = router;
