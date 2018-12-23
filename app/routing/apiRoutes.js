var dataFriends = require("../data/friends.js");
var path = require("path");

var friendScoreDifference = 0;
var friendInput = req.body;
var friendName = friendInput.name;
var friendImage = friendInput.image;
var friendScore = friendInput.scores;

var friendScoreDifference = 0;

module.exports = function(app) {
  app.get("/api/friendfinder", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friendfinder", function(req, res) {
    var friendFound = {
      name: "",
      image: "",
      friendDifference: 1000
    };

    for (var i = 0; i < [friends].length - 1; i++) {
      console.log(friends[i].name);
      friendScoreDifference = 0;

      for (var i = 0; i < 10; i++) {
        friendScoreDifference += Math.abs(
          parseInt(friendScore[i]) - parseInt(friends[i].scores[j])
        );

        if (friendScoreDifference <= friendFound.friendDifference) {
          friendFound.name = friends[i].name;
          friendFound.photo = friends[i].photo;
          friendFound.friendDifference = friendScoreDifference;
        }
      }
    }

    friends.push(friendInput);

    res.json(friendFound);
  });
};
