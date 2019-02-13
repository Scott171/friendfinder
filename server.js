//npm packages dependencies
var express = require("express");
var bodyParser = require("body-parser");


// setting up express
var app = express();
// defines the port we will use for express
var PORT = process.env.PORT || 3060;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// express routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});