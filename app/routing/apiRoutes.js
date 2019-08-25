const friends = require('../data/friends.js');

module.exports = {};

module.exports.getFriendsRoute = (app) => {
  app.get('/api/friends', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(friends.getAvailableFriends()));
  });
};

module.exports.addFriendRoute = (app) => {
  app.post('/api/friends', (req, res) => {
    const name = req.body.name;
    const photo = req.body.photo;
    const scores = req.body.scores;
    const friend = {
      name,
      photo,
      scores,
    };
    const matchedFriend = friends.getFriendForScore(friend.scores);
    friends.addFriend(friend);
    res.setHeader('Content-Type', 'application/json');
    res.send(matchedFriend);
  });
};