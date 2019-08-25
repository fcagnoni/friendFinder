module.exports = {};

const friends = [{
    name: "Jimi",
    photo: "https://picsum.photos/id/1/300/300",
    scores: [1, 2, 3, 4, 1, 2, 1, 5, 3, 2]
  },

  {
    name: "Cher",
    photo: "https://picsum.photos/id/2/300/300",
    scores: [1, 1, 3, 1, 1, 5, 5, 1, 1, 1]
  },

  {
    name: "Brian",
    photo: "https://picsum.photos/id/4/300/300",
    scores: [1, 2, 3, 1, 1, 3, 2, 2, 1, 5]
  },

  {
    name: "Bob",
    photo: "https://picsum.photos/id/22/300/300",
    scores: [5, 2, 3, 5, 2, 3, 2, 4, 5, 3]
  }

];

module.exports.getAvailableFriends = () => {
  return friends;
};

module.exports.getFriendForScore = (scores) => {
  let lowestDelta = Infinity;
  let matchedFriend = {};
  
  friends.forEach(friend => {
    let scoreDelta = 0;

    for (let i = 0; i < friend.scores.length; i++) {
      scoreDelta += Math.abs(friend.scores[i] - scores[i])
    }
    
    if (scoreDelta < lowestDelta) {
      lowestDelta = scoreDelta;
      matchedFriend = friend;
    }
  });

  return matchedFriend;
};


module.exports.addFriend = (friend) => {
  friends.push(friend);
};