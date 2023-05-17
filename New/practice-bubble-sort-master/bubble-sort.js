
function bubbleSort(arr) {
  let sorted = false;
    // Iterate through the array
  while(!sorted) {
    sorted = true;
    for(let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
        // Swap those values
      if(arr[i] > arr[i+1]) {
        sorted = false;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      }
    }
  }

        // Do not move this console.log
        console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return
  return arr;
    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
