function myMap(inputArray, callback) {
  // Your code here
  let mapped = [];
  for(let i = 0; i < inputArray.length; i++) {
    mapped.push(callback(inputArray[i]));
  }
  return mapped;
}

module.exports = myMap;
