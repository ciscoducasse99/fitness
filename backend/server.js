const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("./configs/db/knex");
const passport = require("passport");
require("dotenv").config({ path: __dirname + "/configs/dev-config.env" });
const path = require("path");

// IIFE
(async () => {
  try {
    // Acquiring Port to run server
    const { APP_PORT } = process.env;
    const port = process.env.PORT || APP_PORT;

    // Init app
    const app = express();

    app.disable("x-powered-by"); // makes it harder for hackers to know what backend we use

    // Init session store using Knex.js
    const store = new KnexSessionStore({ knex, tablename: "sessions" });

    // Declaring middleware

    app.use(
      express.json(),
      express.urlencoded({ extended: true }),
      express.static(path.join(process.cwd(), "frontend/build")),
      cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
      }),
      cookieParser(process.env.SESSION_SECRET_KEY), // this is the same as session secret. what would happen if i use custom secret?
      session({
        secret: process.env.SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {
          maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        },
        store,
      }),
      passport.initialize(),
      passport.session()
    );

    // Init routes
    require("./routes/index")(app);

    // passport for authentication
    require("./configs/passport")(passport);

    app.listen(port, () => {
      console.log(`> Server running on port ${port}...`);
    });

    //The reason express session is used is to know if a browser has made a request to us before.
    //It’s like caller-ID, which you’d know about if you were alive in the 90's.

    // https://kelvinmwinuka.com/how-to-handle-password-reset-in-expressjs/
    // https://github.com/nfriedly/express-rate-limit (if i decide to use pin instead of password)
  } catch (err) {
    console.log(err);
  }
})();

//
