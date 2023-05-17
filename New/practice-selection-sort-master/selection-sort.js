

function selectionSort(arr) {

  // Copy the original array
  let arr2 = arr.slice(0);
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while(arr2.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = Infinity;
    let min_idx;
    for(let i = 0; i < arr2.length; i++) {
      if(arr2[i] < min) {
        min = arr2[i];
        min_idx = i;
      }
    }
    // Save and remove the value at the min index
    let removed = arr2.splice(min_idx,1)[0];
    // Add the min value to the end of the sorted array
    sorted.push(removed);
  }
  return sorted;
}



function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // Repeat while the unsorted half is not empty:
  while(pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = Infinity;
    let min_idx;

    for(let i = pointer; i <= arr.length; i++) {
      if(arr[i] < min) {
        min_idx = i;
        min = arr[min_idx];
      }
    }
    // Save the min value
    // Shift every unsorted value to the left of the min value to the right by 1
      for(let i = min_idx - 1; i >= pointer; i--) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      } 
    // Put the min value at the divider
    arr[pointer] = min;
    // Increment the divider and repeat
    pointer++;
  }

  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
