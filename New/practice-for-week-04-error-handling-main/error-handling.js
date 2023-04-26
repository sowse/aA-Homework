// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }}
    catch (error) {
      if (error instanceof TypeError) {
        console.error('Array contains non-numbers.')
      }
    }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests
try {
sayName("Alex");
sayName(1);
} catch (error) {
  console.error(`${error.name}: ${error.message}`)
}
function sayName(name) {
  if(typeof name != 'string') {
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log(name);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(null)
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Hello World!')
}
