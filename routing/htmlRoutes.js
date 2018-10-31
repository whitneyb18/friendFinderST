var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  // app.get("*", function(req, res) {
  //   console.log(__dirname);
  //   res.sendFile(path.join(__dirname, "../public/404.html"));
  // });
};
