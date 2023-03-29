/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
let subsets = array => {
  if(array.length === 0) {
    return [array];
  }

  let last_idx = array.length - 1;
  let last_item = array[last_idx];
  array.splice(last_idx,1);
  
  let prior_subsets = subsets(array);
  let new_subsets = prior_subsets.map( subset => {
    return [...subset, last_item];
  })

  return [...prior_subsets, ...new_subsets];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
