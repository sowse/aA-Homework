function firstStep(input) {
  // Your code here
  let arr = input.split("&");
  console.log(arr);
  return arr;
}

function secondStep(input) {
  // Your code here
  let arr = input.map(sub => sub.split("="));
  return arr;
}

function thirdStep(input) {
  // Your code here
  let arr = [];
  input.forEach(sub => {
    arr.push(sub.map(str => str.replace(/\+/g, " ")));
  });
  return arr;
}

function fourthStep(input) {
  // Your code here
  let arr = []
  input.forEach(sub => {
    arr.push(sub.map(str => decodeURIComponent(str)));
  });
  return arr;
}

function fifthStep(input) {
  // Your code here
  const obj = Object.fromEntries(input);
  return obj;
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};

console.log(parseBody("username=azure+green&password=password%21"));
