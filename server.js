//Depenencies
var express = require("express");
var app = express();

//Route files
var htmlRoutes = require("./routing/htmlRoutes")(app);
var apiRoutes = require("./routing/apiRoutes")(app);
//App Setup
var PORT = process.env.PORT || 3000;

//Setup for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up for using static files in the public folder
app.use(express.static("public"));
app.use(express.static("data"));

var userInfo = require("./app/data/friends");

app.post("/api", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcharacter = req.body;

  console.log(newcharacter);

  userInfo.playerInfo.push(newcharacter);

  res.json(newcharacter);
});

//Have server listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
