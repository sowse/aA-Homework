module.exports = function reverseString(string) {

  if(typeof string != 'string') {
    throw new Error('Please enter a string');
  }
  let reversed = [];

  for(let i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i]);
  }
  return reversed.join('');
};
