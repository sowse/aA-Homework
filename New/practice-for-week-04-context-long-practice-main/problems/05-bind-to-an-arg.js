function bindToAnArg(func, arg) {
  // Your code here
 let bound = func.bind(this, arg);
 return bound;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
