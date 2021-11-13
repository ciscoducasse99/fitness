const express = require("express");
const { ensureAuth } = require("../../middleware/auth");
const router = express.Router();
const knex = require("../../configs/db/knex");

router.get("/appts", ensureAuth, (req, res) => {});

module.exports = router;
