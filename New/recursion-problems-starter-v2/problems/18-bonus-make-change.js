/***********************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

function greedyMakeChange(target, coins = [25, 10, 5, 1]) {
  // no tests for greedyMakeChange so make sure to test this on your own
  // your code here
  //debugger;
  let change;
  if(target === 0) {
    debugger;
    change = [];
    return change;
  }
  for(let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if(target - coin >= 0) {
      change = greedyMakeChange(target-coin, coins);
      if(change === null) {
        return null;
      } else {
        change.push(coin);
        return change;
      }
    }
  }
  return null;
}

function splitChecker(target, coins = [25, 10, 5, 1]) {
  let splitCoins = [];
  let smallest_coin = coins[coins.length - 1];
  for(let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if(target-coin >= 0) {
      splitCoins.push(coin);
    }
  }
  
  if(splitCoins.length === 0 || (splitCoins.length === 1 && target % splitCoins[0] != 0)){
    return null;
  } else {
    return splitCoins;
  }
}

function coinFill(target, coin) {
  //debugger;
  let times = target / coin;
  let new_change = [];
  for(let i = 0; i < times; i++) {
    new_change.push(coin);
  }

  return new_change;
}

function makeBetterChange(target, coins = [25, 10, 5, 1]) {
  // your code here
  if(target === 0) {
    return [];
  }

  let possible_change = splitChecker(target, coins);
  let smallest = Infinity;
  let ideal_change = [];

  if(possible_change === null) {
    return possible_change;
  } else if(possible_change.length === 1) {
    return coinFill(target, ...possible_change);
  } else {
    for(let i = 0; i < possible_change.length; i++) {
      let coin = possible_change[i];
      if(i === 0 && target % coin === 0) {
        return coinFill(target, coin);
      }
      let previous_change = makeBetterChange(target-coin, possible_change);
        if(previous_change === null) {
          return previous_change;
        }
      previous_change.push(coin);
      if(previous_change.length < smallest) {
        smallest = previous_change.length;
        ideal_change = previous_change;
      }
    }
  }

  return ideal_change;

}


console.log(makeBetterChange(21)); // [1, 10, 10]
console.log(makeBetterChange(75)); // [25, 25, 25]
console.log(makeBetterChange(33, [15, 3])); // [3, 15, 15]
console.log(makeBetterChange(34, [15, 3])); // null
console.log(makeBetterChange(24, [10, 7, 1])); // [7, 7, 10]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}
