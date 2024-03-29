/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest;
  let max_cuteness = -Infinity;
  let i = 0;
  debugger;
  while (i < cats.length) {
    const cat = cats[i];
    if (cat.cuteness > max_cuteness) {
      cutest = cat;
      max_cuteness = cat.cuteness;
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
