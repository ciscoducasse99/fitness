const express = require("express");
const router = express.Router();
const products = require("../../configs/productArray");

router.get("/", (req, res) => {
  try {
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
