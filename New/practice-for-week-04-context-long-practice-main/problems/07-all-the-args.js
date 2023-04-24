function allTheArgs(func, ...args) {
  // Your code here
  return (...arg2) => func.call(this, ...args, ...arg2);
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
