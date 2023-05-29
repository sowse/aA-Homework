// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.followers = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    let user = {id: this.currentID, name: name};
    this.users[this.currentID] = user;
    this.follows[this.currentID] = new Set();
    this.followers[this.currentID] = new Set();
    return this.currentID;
  }

  getUser(userID) {
    // Your code here
    return this.users[userID] ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
    // Your code here
    let user1 = this.users[userID1];
    let user2 = this.users[userID2];

    if(!user1 || !user2) {
      return false;
    }

    this.follows[userID1].add(user2.id);
    this.followers[userID2].add(user1.id);
    return true;
  }

  getFollows(userID) {
    // Your code here
    if(!this.users[userID]) {
      return false;
    }

    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    return this.followers[userID];
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    let count = 0;
    let visited = new Set();
    visited.add(userID);
    let queue = [userID];
    let recs = [];
    
    while(count < degrees) {
      for(let i = 0; i < queue.length; i++) {
        let new_queue = [];
        let curr_user = queue[i];
        this.follows[curr_user].forEach(follow => {
          new_queue.push(follow);
          this.follows[follow].forEach(sub_follow => {
            if(!this.follows[userID].has(sub_follow) && !visited.has(sub_follow)) {
              visited.add(sub_follow);
              recs.push(sub_follow);
            }
          },this)
        },this)
        queue = new_queue;
        count++;
      }
    }

    return recs;
  }
}

module.exports = SocialNetwork;
