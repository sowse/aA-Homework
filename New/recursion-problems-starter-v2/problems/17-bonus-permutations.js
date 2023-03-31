/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
let permutations = array => {
  if(array.length === 1) {
    return [array];
  }
  let perms = [];
  let new_perm;
  let current_element = array[array.length-1];
  let prev_perms = permutations(array.slice(0,-1));
  prev_perms.forEach(ele => {
    for(let i = 0; i <= ele.length; i++) {
      new_perm = ele.slice();
      new_perm.splice(i,0,current_element);
      perms.push(new_perm);
    }
  }) 

  return perms;
}

console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
