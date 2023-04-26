function isFive(num) {
  // Your code here
  return num === 5 ? true : false;
}

function isOdd(number) {
  // Your code here
  if(typeof number != 'number') {
    throw new Error('Please enter a number.')
  }

  return number % 2 === 0 ? false : true;
}

function myRange(min, max, step = 1) {
  // Your code here
  let range = [];

  for(let i = min; i <= max; i+= step) {
    range.push(i);
  }

  return range;
}


module.exports = { isFive, isOdd, myRange };
