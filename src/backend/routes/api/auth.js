const axios = require("axios");
const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  // axios.get(opts)
  // .then(data=>{
  //     res.send(`<p>${JSON.stringify(data)}</p>`)
  // })
  // .catch((err)=>{
  // res.send(`<p>${err}</p>`)
  // console.log(err)
  // })
});

module.exports = router;
