const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.urlencoded({ extended: false }), express.json());
require("./routes/index")(app);

app.listen(5000, () => {
  console.log("> Server Running...");
});

// user authentication with JWT

//The reason express session is used is to know if a browser has made a request to us before.
//It’s like caller-ID, which you’d know about if you were alive in the 90's.

// https://kelvinmwinuka.com/how-to-handle-password-reset-in-expressjs/
// https://github.com/nfriedly/express-rate-limit (if i decide to use pin instead of password)
