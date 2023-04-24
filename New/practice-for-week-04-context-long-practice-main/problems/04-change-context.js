function changeContext(func, obj) {
  // Your code here
  let changed = func.bind(obj);
  return changed();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
