var path = require("path");
var friendsData = require("../app/data/friends.js");

module.exports = function(app) {
  app.get("/api", function(req, res) {
    return res.json(friendsData);
  });
};
