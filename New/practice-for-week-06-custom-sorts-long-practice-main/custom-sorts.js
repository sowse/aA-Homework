function ageSort(users) {
  // Your code here
  return users.sort(ageCrit)
  function ageCrit(a,b) {
    if(a.age > b.age) {
      return 1;
    } else {
      return -1;
    }
  }
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort(oddCrit);

  function oddCrit(a,b) {
    if(a % 2 === 0 && b % 2 != 0) {
      return 1
    } else if(a % 2 != 0 && b % 2 === 0) {
      return -1;
    } else {
      return a - b;
    }
  }
}

function validAnagrams(s, t) {
  // Your code here
  let arr1 = s.split('').sort(); 
  let arr2 = t.split('').sort();

  if(arr1.length != arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort(reverseCrit);

  function reverseCrit(a,b) {
    let str1 = a.toString();
    let str2 = b.toString();

    if(str1.length > str2.length) {
      return -1;
    } else if(str1.length < str2.length) {
      return 1;
    } else {
      return a - b;
    }
  }
}

function frequencySort(arr) {
  // Your code here
  let counts = {};

  for(let i = 0; i < arr.length; i++) {
    if(counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }

  function frequencyCrit(a,b) {
    if(counts[a] > counts[b]) {
      return 1;
    } else if(counts[b] > counts[a]) {
      return -1;
    } else {
      return b - a;
    }
  }

  return arr.sort(frequencyCrit);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
