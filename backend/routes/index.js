module.exports = (app) => {
  app.use("/api/forms", require("./api/form"));
  app.use("/api/dashboard", require("./api/dashboard"));
  app.use("/api/products", require("./api/products"));
  app.use("/api/auth", require("./api/auth"));
  app.use("/api/workout", require("./api/workout"));
  app.use("/api/notifications", require("./api/notifications"));
};

// const routes = [
//   require("./api/form"),
//   require("./api/dashboard"),
//   require("./api/products"),
//   require("./api/auth"),
//   require("./api/workout"),
//   require("./api/notifications"),
// ];

// module.exports = function router(app) {
//   return routes.forEach((route) => {
//     route(app);
//   });
// };
