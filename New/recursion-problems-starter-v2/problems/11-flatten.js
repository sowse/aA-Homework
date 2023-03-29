/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = array => {  
  if(array.length === 0) {
    return [];
  }

  let flattened = [];
//forEach can't be used here, since it doesn't break out of the function when it returns  
  for(let i = 0; i < array.length; i++) {
    let ele = array[i];
    if(Array.isArray(ele)) {
      flattened = [...flattened, ...flatten(ele)];
    } else {
      flattened.push(ele);
    }
}
  return flattened;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
