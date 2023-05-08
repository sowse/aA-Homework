const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";
    this.colors = ['black', 'red', 'green', 'yellow', 'blue', 'cyan', 'white', 'magenta']
    // Initialize this
    this.grid = [];
    this.size = 8;
    for(let i = 0; i < this.size; i++) {
      this.grid.push(this.createNewRow());
    }
    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    this.cursor.setBackgroundColor();
    this.gridBackgroundColor();
    Screen.render();
  }

  gridBackgroundColor() {
    for(let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      for(let k = 0; k < this.grid.length; k++) {
        let block = row[k];
        Screen.setBackgroundColor(i, k, block);
      }
    }
  }
  getRandomColor() {
    let min = Math.ceil(0);
    let max = Math.floor(this.colors.length);

    return this.colors[Math.floor(Math.random() * (max-min) + min)];
  }

  createNewRow() {
    let row = [];
    for(let i = 0; i < this.size; i++) {
      row.push(this.getRandomColor());
    }
    return row;
  }
  static checkForMatches(grid) {

    // Fill this in

  }

}

module.exports = Bejeweled;
