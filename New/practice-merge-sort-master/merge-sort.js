// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    return arr;
  }
    // If so, it's already sorted: return

  let half = Math.floor(arr.length / 2);
  let half_idx;
  // Divide the array in half
  if(arr.length % 2 === 0) {
    half_idx = half;
  } else {
    half_idx = half+1;
  }
  let arrA = arr.slice(0, half_idx);
  let arrB = arr.slice(half_idx);
  // Recursively sort the left half
  // Recursively sort the right half
  return merge(mergeSort(arrA), mergeSort(arrB));
  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  //debugger;
  // Create an empty return array
  let sorted = [];
  // Point to the first value of each array
  let idx1 = 0;
  let idx2 = 0;
  // While there are still values in each array...
  while(idx1 < arrA.length || idx2 < arrB.length)
    // Compare the first values of each array
    if(idx1 >= arrA.length) {
      sorted = [...sorted, ...arrB.slice(idx2)]
      idx2 = Infinity;
    } else if(idx2 >= arrB.length) {
      sorted = [...sorted, ...arrA.slice(idx1)]
      idx1 = Infinity;
    } else if(arrA[idx1] < arrB[idx2]) {
      sorted.push(arrA[idx1])
      idx1++;
    } else {
      sorted.push(arrB[idx2])
      idx2++;
    }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
    return sorted;
}

module.exports = [merge, mergeSort];
