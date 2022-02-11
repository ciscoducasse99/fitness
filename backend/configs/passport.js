const knex = require("../configs/db/knex");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      (email, password, done) => {
        knex("admin")
          .where({ email: email })
          .first()
          .then((user) => {
            if (!user) {
              return done(null, false);
            }
            if (user.password !== password) {
              return done(null, false);
            } else {
              return done(null, user);
            }
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );

  // serializeUser determines which data of the user object should be stored
  // in the session. The result of the serializeUser method is attached to the
  // session as req.session.passport.user = {}. Here for instance, it would be
  // (as we provide the user id as the key) req.session.passport.user = {id: 'xyz'}

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //  Function deserializeUser is used to retrieve user data from session.
  passport.deserializeUser((id, done) => {
    knex("admin")
      .where({ id: id })
      .first()
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};

//learn.co/lessons/node-js-intro-to-passport
