const findMinimum = arr => {
  let min = arr[0];
  // Your code here
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    } 
  }
  return min;
};

const runningSum = arr => {
  let sum = 0;
  let running = []

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
    running.push(sum);
  }
  return running;
  // Your code here
};

const evenNumOfChars = arr => {
  let num = 0;
  // Your code here
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length % 2 === 0) {
      num++;
    }
  }

  return num;
};

const smallerThanCurr = arr => {
  let comp_array = [];
  for(let i = 0; i < arr.length; i++) {
    let num = 0;
    let current_ele = arr[i];
    for(let k = 0; k < arr.length; k++) {
      if(arr[k] < current_ele) {
        num++;
      }
    }
    comp_array.push(num);
  }
  return comp_array;
  // Your code here

};

const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    let first_num = arr[i];
    for(let k = 0; k < arr.length; k++) {
      let second_num = arr[k];
      if((i != k) && first_num + second_num === target) {
        return true;
      }
    }
  }
  return false;
  // Your code here
};

const secondLargest = arr => {
  let largest = arr[0];
  let second_largest = arr[1];

  if(arr[0] < arr[1]) {
    largest = arr[1];
    second_largest = arr[0];
  }

  for(let i = 2; i < arr.length; i++) {
    if(arr[i] >= largest) {
      second_largest = largest;
      largest = arr[i];
    }
  }
  // Your code here
  return second_largest;
};

const shuffle = (arr) => {
  let new_arr = arr.slice(0);
  let currentIndex = arr.length;
  let randomIndex;

  while(currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [new_arr[currentIndex], new_arr[randomIndex]] = [new_arr[randomIndex], new_arr[currentIndex]];
  }
  // Your code here
  return new_arr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
