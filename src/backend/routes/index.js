module.exports = (app) => {
  app.use("/api/forms", require("./api/form"));
  app.use("/api/dashboard", require("./api/dashboard"));
  app.use("/api/products", require("./api/products"));
  app.use("/api/auth", require("./api/auth"));
  app.use("/api/workout", require("./api/workout"));
};
