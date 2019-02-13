
var friendInfo = require("../data/friends");


module.exports = function (app) {
 
  app.get("/api/friends", function (req, res) {
    res.json(friendInfo);
  });

 
  app.post('/api/friends', function (req, res) {
    var newSurveyScores = req.body.scores;
    var scoresArray = [];
    var closestMatch = 0;

    for (var i = 0; i < friendInfo.length; i++) {
      var scoreDifferences = 0;
      for (var j = 0; j < newSurveyScores.length; j++) {
        scoreDifferences += (Math.abs(parseInt(friendInfo[i].scores[j]) - parseInt(newSurveyScores[j])));
      }
      scoresArray.push(scoreDifferences);
    }

    //after comparing find closest match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[closestMatch]) {
        closestMatch = i;
      }
    }

    var bestFriend = friendInfo[closestMatch];
    res.json(bestFriend);

    friendInfo.push(req.body);
  });
};