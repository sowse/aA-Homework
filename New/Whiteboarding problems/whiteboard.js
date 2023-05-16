function logBetween(lowNum, highNum) {
    let arr = [];
    for(let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]


function logBetweenStepper(min, max, step) {
    let arr = [];
    for(let i = min; i <= max; i+=step) {
        arr.push(i);
    }
    return arr;
    
}

console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]

function printReverse(min,max) {
    let arr = [];
    for(let i = max-1; i > min; i--) {
        arr.push(i);
    }

    return arr;
}

console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]

function fizzBuzz(max) {
    let arr = [];
    for(let i = 0; i < max; i++) {
        if((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

function isPrime(number) {
    if(number < 2) {
        return false;
    }

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true

function maxValue(array) {
    if(array.length === 0) {
        return null;
    }

    let largest = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;
}


console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43

function myIndexOf(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
}


console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1

function factorArray(array, target) {
    return array.filter(factor => target % factor === 0);
}

console.log(factorArray([2,3,4,5,6],20) )// => [2,4,5]
console.log(factorArray([2,3,4,5,6],35) )// => [5]
console.log(factorArray([10,15,20,25],5)) // => []


function oddRange(end) {
    let arr = [];
    for(let i = 0; i <= end; i++) {
        if(i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

function reverseHyphenString(string) {
    let split = string.split('-');
    let reversed = [];
    for(let i = split.length - 1; i >= 0; i--) {
        reversed.push(split[i]);
    }

    return reversed.join('-');
}

console.log(reverseHyphenString("Go-to-the-store") )// => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"

function intersect(arr1, arr2) {
    return arr1.filter(ele => arr2.indexOf(ele) != -1);
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []

function mirrorArray(array) {
    let reversed = [];
    for(let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return [...array, ...reversed];
}

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]


function abbreviate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return sentence.split(' ').map(ele => {
        if(ele.length <= 4) {
            return ele
        } else {
            return ele.split('').filter(char => vowels.indexOf(char) === -1).join('');
        }
    }).join(' ');
}

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

function adults(people) {
    return people.filter(person => person['age'] >= 18).map(person => person['name']);
}

const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]

function countScores(people) {
    let count = {};

    people.forEach(person => {
        let curr_count = count[person['name']];
        if(!curr_count) {
            count[person['name']] = person['score']
        } else {
            count[person['name']] += person['score'];
        }});
    return count;
}   

// Example 1:
const ppl2 = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
console.log(countScores(ppl2)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
  
  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];
  
console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

const primeSeq = [];

function firstNPrimes(n) {
    let current_num;
    if(primeSeq.length >= n) {
        return primeSeq.slice(0,n);
    }

    if(primeSeq.length === 0) {
        current_num = 2;
    } else {
        current_num = primeSeq[primeSeq.length - 1] + 1;
    };

    while(primeSeq.length < n) {
        if(isPrime(current_num)){
            primeSeq.push(current_num);
        }
        current_num++;
    }

    return primeSeq;
}

console.log(firstNPrimes(0));  // => []
console.log(firstNPrimes(1));  // => [2]
console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

function peakFinder(array) {
    let peaks = []
    let last_index = array.length - 1
    for(let i = 0; i < array.length; i++) {
        if(i === 0 && array[0] > array[1]) {
            peaks.push(i)
        } else if(i === last_index && array[last_index] > array[last_index - 1]) {
            peaks.push(i)
        } else if(array[i] > array[i+1] && array[i] > array[i-1]) {
            peaks.push(i);
        }
    }

    return peaks;
}

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]


function divisibleByThreePairSum(array) {
    let pairs = [];

    for(let i = 0; i < array.length; i++) {
        for(let k = i+1; k < array.length; k++) {
            if((array[i] + array[k]) % 3 === 0){
                pairs.push([i,k]);
            };
        };
    }

    return pairs;
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1) // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // => [[1, 3]]

function zipArray(arr1, arr2) {
    let zipped = [];

    for(let i = 0; i < arr1.length; i++) {
        zipped.push([arr1[i], arr2[i]]);
    }

    return zipped;
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

function twoDimensionalTotal(array) {
    return array.reduce((total_sum, sub_arr) => total_sum + sub_arr.reduce((sub_sum, num) => sub_sum + num, 0), 0);
}

const arr1a = [
    [5, 2, 5, 3],
    [12, 13],
  ];
  
console.log(twoDimensionalTotal(arr1a));  // => 40
  
  const arr2a = [
    [2],
    [1, 9],
    [1, 1, 1]
  ]
  
console.log(twoDimensionalTotal(arr2a));  // => 15

function countInnerElement(arr) {
    let counts = {};
    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr[i].length; k++) {
            let current = arr[i][k];
            if(!counts[current]) {
                counts[current] = 1;
            } else {
                counts[current]++;
            }
        }
    }

    return counts;
}

const arr1b = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
  ]
  
console.log(countInnerElement(arr1b))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
  
  const arr2b = [
    ['a','b','c','d'],
    ['a','b'],
    ['a','c','d','a']
  ]
  
console.log(countInnerElement(arr2b))  // => {a: 4, b: 2, c: 2, d: 2}

function twoDiff(array) {
    let diffed = [];

    for(let i = 0; i < array.length; i++) {
        for(let k = i+1; k < array.length; k++) {
            if(Math.abs(array[i] - array[k]) === 2 ) {
                diffed.push([i,k]);
            }
        }
    }

    return diffed;
}

console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]))  // => []

function arrayDiff(arr1, arr2) {
    return arr1.filter(ele => arr2.indexOf(ele) === -1);
}

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
console.log(arrayDiff(array1, array2));  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
console.log(arrayDiff(array3, array4))  // => ['a', 'ab', 'c', 'c']

function valueCounter(obj, val) {
    return Object.values(obj).filter(ele => ele === val).length;
}

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
console.log(valueCounter(obj1, 'Anne'));  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
console.log(valueCounter(obj2, 88))  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
console.log(valueCounter(pairs, 'Roman'))  // => 2

function elementCount(array) {
    let counts = {};

    for(let i = 0; i < array.length; i++) {
        counts[array[i]] ? counts[array[i]]++ : counts[array[i]] = 1;
    }
    return counts;
}

console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 };
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 };

function nextTwoPrimes(num) {
    let next = [];

    while(next.length < 2) {
        num++;
        if(isPrime(num)) {
            next.push(num);
        }
    }

    return next;
}

console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
console.log(nextTwoPrimes(97));  // => [ 101, 103 ]

function pairProduct(arr, num) {
    let pairs = [];

    let count_a = 0;
    let count_b = 0;
    while(count_a < arr.length) {
        count_b = count_a+1;
        while(count_b < arr.length) {
            if(arr[count_a] * arr[count_b] === num) {
                pairs.push([count_a, count_b]);
            }
            count_b++;
        }
        count_a++;
    }
    return pairs;
}

console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

function twoDimensionalSize(array) {
    return array.map(sub => sub.length).reduce((ac, el) => ac + el, 0);
}


const arr1c = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
console.log(twoDimensionalSize(arr1c));  // => 9
  
  const arr2c = [
    ['a'],
    ['b', 'c', 'd', 'e']
  ];
console.log(twoDimensionalSize(arr2c));  // => 5

function longWordCount(string) {
    return string.split(' ').filter(word => word.length > 7).length;
}

console.log(longWordCount(""));  // => 0
console.log(longWordCount("short words only"));  // => 0
console.log(longWordCount("one reallylong word"));  // => 1
console.log(longWordCount("two reallylong words inthisstring"));  // => 2
console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
console.log(longWordCount("seventy schfifty five"));  // => 1

function factorial(n) {
    if(n === 1) {
        return n
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(10));  // => 3628800

function lcm(num1, num2) {
    let largest = num1 > num2 ? num1 : num2;
    let smallest = num1 < num2 ? num1 : num2;

    for(let i = 1; i <= smallest; i++) {
        if(i * largest % smallest === 0) {
            return i * largest;
        }
    }
}

console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312

function hipsterfyWord(word) {
    const vowels = ['a','e','i','o','u'];

    for(let i = word.length - 1; i > 0; i--) {
        if(vowels.includes(word[i].toLowerCase())) {
            return `${word.substring(0,i)}${word.substring(i+1)}`;
        }
    }

    return word;
}

console.log(hipsterfyWord('proper')) // => 'propr'
console.log(hipsterfyWord('tonic')) // => 'tonc'
console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'

function hipsterfy(sentence) {
    return sentence.split(' ').map(word => hipsterfyWord(word)).join(' ');
}

console.log(hipsterfy("proper"));  // => "propr"
console.log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
console.log(hipsterfy("runner anaconda"));  // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"

function objectToString(count) {
    return Object.keys(count).map(char => char.repeat(count[char])).join('');
}

console.log(objectToString({ a : 2, b: 4, c: 1 })) // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 }) )// => 'boot'

function shortestWord(sentence) {
    let words = sentence.split(' ');
    let shortest = words[0];

    for(let i = 1; i < words.length; i++) {
        if(words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest;
}

console.log(shortestWord('app academy is cool') )// => 'is'
console.log(shortestWord('programming bootcamp')) // => 'bootcamp'

function greatestCommonFactor(num1, num2) {
    let largest = num1 > num2 ? num1 : num2;
    let smallest = num1 < num2 ? num1 : num2;

    for(let i = 1; i <= smallest; i++) {
        let divisor = smallest / i;
        if(divisor % 1 === 0 && largest % divisor === 0) {
            return divisor;
        }
    }
}

console.log(greatestCommonFactor(15, 25)) // => 5
console.log(greatestCommonFactor(16, 24)) // => 8
console.log(greatestCommonFactor(7, 11) )// => 1


function isPassing(assessments) {
    return assessments.map(obj => obj['score']).reduce((ac, el) => ac + el, 0) / assessments.length >= 70;
}

const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
  ];
  
console.log(isPassing(assessments1)) // => true
  const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
  ];
  
console.log(isPassing(assessments2)) // => false

function valueConcat(array, obj) {
    return array.map(ele =>  {
        if(obj[ele]) {
            return `${ele}${obj[ele]}`;
        } else {
            return ele;
        }
    });
}

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]

function threeInARow(arr) {
    for(let i = 0; i < arr.length - 2; i++) {
        if(arr[i] === arr[i+1] && arr[i+1] === arr[i+2]) {
            return true;
        }
    }
    
    return false;

}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

function variableNameify(words) {
    return [words[0].toLowerCase(), ...words.slice(1).map(word => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)].join('');
}


console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

function threeIncreasing(arr) {
    for(let i = 0; i < arr.length - 2; i++) {
        if((arr[i] + 1) === arr[i+1] && (arr[i+1] + 1) === arr[i+2]) {
            return true;
        }
    }
    
    return false;

}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false

function reverse2D(array) {
    return array.map(subArr => subArr.reverse().join('')).reverse().join('');
}

const arr1d = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
  ];
  
console.log(reverse2D(arr1d)) // => 'ihgfedcba'
  const arr2d = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
  ];
console.log(reverse2D(arr2d)) // => 'PatrickOscarMikeMattJulian'

function reverb(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i = word.length-1; i >= 0; i--) {
        if(vowels.includes(word[i])) {
            return `${word}${word.substring(i)}`;
        }
    }
    return word;
}

console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'


function countRepeats(string) {
    let counts = {};

    for(let i = 0; i < string.length; i++) {
        if(counts[string[i]]) {
            counts[string[i]]++;
        } else {
            counts[string[i]] = 1;
        }
    }

    return Object.values(counts).filter(count => count > 1).length;
}

console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4

function pairsToString(arr) {
    return arr.map(sub => sub[0].repeat(sub[1])).join('');
}


const array1a = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
  ];
console.log(pairsToString(array1a));  // => 'aaabcc'
  
  const array2a = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
  ];
console.log(pairsToString(array2a));  // => 'food!'


function countAdjacentSums(arr, n) {
    return arr.filter((ele, i) => ele + arr[i+1] === n).length;
}

console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3

function signFlipCount(nums) {
    return nums.filter((num, i) => num * nums[i+1] < 0).length;
}

console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

function powerSequence(base, length) {
    if(length === 1) {
        return [base]
    } else {
        let prev = powerSequence(base, length - 1);
        prev.push(base * prev[length-2]);
        return prev;
    }
}

console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]

function collapseString(str) {
    return str.split('').filter((char, i) => char != str[i-1]).join('');
}

console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'

function oddWordsOut(sentence) {
    return sentence.split(' ').filter(word => word.length % 2 ===0).join(' ');
}

console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'

function mindPsAndQs(str) {
    let maxLen = 0;
    let len = 0;
    let chars = ['P', 'Q'];
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(chars.includes(char)) {
            len++;
            if(len > maxLen) {
                maxLen = len;
            }
        } else {
            len = 0;
        }
    }
    return maxLen;
}

console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5

function commonPrimeFactors(num1, num2) {
    let primeFactors = [];
    let [smallest, largest] = num1 > num2 ? [num2, num1] : [num1, num2];
    for(let i = 2; i <= smallest; i++) {
        if(smallest % i === 0 && isPrime(i)) {
            primeFactors.push(i);
        }
    }

    return primeFactors.filter(fac => largest % fac === 0);
}

console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22));  // => [ 11 ]
console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]

function splitHalfArray(array) {
    let idx1, idx2;

    if(array.length % 2 === 0) {
        idx1 = array.length / 2;
        idx2 = idx1;
    } else {
        idx1 = Math.floor(array.length / 2);
        idx2 = idx1 + 1;
    }

    return [array.slice(0,idx1), array.slice(idx2)]
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]


function threeUniqueVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return vowels.filter(vowel => string.indexOf(vowel) != -1).length >= 3;
}

console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false

function vowelShift(sentence) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return sentence.split('').map(char => {
        if(vowels.includes(char)) {
            return vowels[vowels.indexOf(char) + 1 % vowels.length]
        } else {
            return char;
        }
    }).join('');
}

console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'

function hasSymmetry(array) {
    for(let i = 0; i < array.length / 2 + 1; i++) {
        if(array[i] != array[array.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false

function evenSum(num) {
    let sum = 0;
    for(let i = 2; i <= num; i+=2) {
        sum+=i;
    }
    return sum;
}
function evenSumArray(array) {
    return array.map(num => evenSum(num));
}

console.log(evenSumArray([6, 7, 5])) // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]

function numsToWords(numstring) {
    const numStrings = {
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '0': 'Zero'
    }

    return numstring.split('').map(char => numStrings[char]).join('');
}

console.log(numsToWords('42')) // => 'FourTwo'
console.log(numsToWords('123')) // => 'OneTwoThree'
console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'

function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '.') {
            dotCount++
        } else if(str[i] === '-') {
            dashCount++;
        }
    }
    return dotCount > dashCount;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false
