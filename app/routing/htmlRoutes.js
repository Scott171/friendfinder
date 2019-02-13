
//npm package dependancy
var path = require("path");

//Routing
module.exports = function (app) {
  //html get to direct to survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //html get to direct to home page if no route is found
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};