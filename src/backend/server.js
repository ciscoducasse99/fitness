const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.urlencoded({ extended: false }), express.json());
require("./routes/index")(app);

app.listen(5000, () => {
  console.log("> Server Running...");
});

// user authentication with JWT
