function quicksort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Pick the first value as the pivot
  let pivot = arr[0];
  // Orient the pivot so that...
  let left = [];
  let right = [];
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order

}


module.exports = [quicksort];
