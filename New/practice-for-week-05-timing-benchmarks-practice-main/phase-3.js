const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  // Fill this in
  let sums = [];
  let max = 10*increment;

  for(let i = increment; i <= max; i+= increment) {
    console.time("timer");
    sums.push(addNums(i));
    console.timeEnd("timer");
  }
  return sums;
  // Your code here

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
let sums = [];
let max = increment*10;

for(let i = increment; i <= max; i += increment) {
  console.time("timer");
  sums.push(addManyNums(i));
  console.timeEnd("timer");
}
return sums;
  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
