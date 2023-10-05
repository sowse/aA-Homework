function stretch(time) {
  // Your code here
  return new Promise((resolve, reject) => {
    const timeLeft = time - 1000;
    if(timeLeft < 0) {
      reject('Not enough time to stretch');
    } else {
    setTimeout(() => {
      console.log('done stretching');
      resolve(timeLeft);
    }
      , 1000);
  }
})
}

function runOnTreadmill(time) {
  // Your code here
  return new Promise((resolve, reject) => {
    const timeLeft = time - 500;
    if(timeLeft < 0) {
      reject('Not enough time to run');
    } else {
    setTimeout(() => {
      console.log('done running');
      resolve(timeLeft);
    }
      , 500);
  }
})
}

function liftWeights(time) {
  // Your code here
  return new Promise((resolve, reject) => {
    const timeLeft = time - 2000;
    if(timeLeft < 0) {
      reject('Not enough time to lift weights');
    } else {
    setTimeout(() => {
      console.log('done lifting weights');
      resolve(timeLeft);
    }
      , 2000);
  }
})
}

function workout(time) {
  // Your code here
  stretch(time)
  .then(timeLeft => runOnTreadmill(timeLeft))
  .then(timeLeft => liftWeights(timeLeft))
  .then(() => console.log('Workout complete'))
  .catch((error) => console.error(error));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout(3500);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
