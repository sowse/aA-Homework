const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sums = [];
  let max = 10*increment;

  for(let i = increment; i <= max; i+= increment) {
    sums.push(addNums(i));
  }
  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sums = [];
  let max = increment*10;

  for(let i = increment; i <= max; i += increment) {
    sums.push(addManyNums(i));
  }
  return sums;
}

module.exports = [addNums10, addManyNums10];
