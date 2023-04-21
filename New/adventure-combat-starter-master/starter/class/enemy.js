const {Character} = require('./character');

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    this.currentRoom = this.currentRoom.getRoomInDirection('w');
    this.cooldown += 3000;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.act();
      this.cooldown = 3000;
    };

    const reset = resetCooldown.bind(this);
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    if((this.attackTarget === this.player) && this.player.currentRoom === this.currentRoom) {
      this.player.applyDamage(10);
    }

    this.cooldown += 3000;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    this.attackTarget = this.player;
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.randomMove();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
