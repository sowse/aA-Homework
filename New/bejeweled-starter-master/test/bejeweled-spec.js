const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");

describe ('Bejeweled', function () {

  // Add tests for setting up a basic board
  it('should setup a basic board', function() {
    let board = new Bejeweled;
    expect(board.grid.length).to.equal(3);
    expect(board.grid[0].length).to.equal(3);
  })
  // Add tests for a valid swap that matches 3

  // Add tests for swaps that set up combos

  // Add tests to check if there are no possible valid moves

});
