const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.strength = 10;
    this.health = 100;
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    let taken = this.currentRoom.getItemByName(itemName);
    this.items.push(taken);
  }

  dropItem(itemName) {

    // Fill this in
    let dropped = this.getItemByName(itemName);
    this.currentRoom.items.push(dropped);
  }

  eatItem(itemName) {

    // Fill this in
    let items = this.items.map(item => item.name);
        let idx = items.indexOf(itemName);
        let chosen_item = this.items[idx];
        
        if(chosen_item instanceof Food) {
            this.items.splice(idx,1);
        }
  }

  getItemByName(name) {
    let itemNames = this.items.map(item => item.name);
    let idx = itemNames.indexOf(name);
    let item = this.items[idx];
    this.items.splice(idx,1);
    return item;
  }

  hit(name) {

    // Fill this in
    this.currentRoom.getEnemyByName(name).applyDamage(this.strength);
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
