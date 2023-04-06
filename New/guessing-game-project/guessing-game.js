const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

function checkIfNum (num) {
    if(isNaN(num)) {
        console.log('Please enter numbers only.')
        return false;
    }
    return true;
};

function checkGuess (num) {
    if(num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if(num < secretNumber) {
        console.log('Too low.');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function askGuess() {
    
    if(numAttempts === 0) {
        console.log('You lose.')
        rl.close();
        return;
    }

    numAttempts--;
    rl.question('Enter a guess: ', (answer) => {
        let guess = Number(answer);

        if(checkIfNum(guess) === false || checkGuess(guess) === false) {
            askGuess();
        } else {
            console.log('You win!');
            rl.close();
        };
    })
}
function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function askRange() {
    let nums = [];    
    
    rl.question('Please enter your desired minimum number: ', handleMinResponse);

    function handleMinResponse(num) {
        nums.push(Number(num));
        rl.question('Please enter your desired maximum number: ', handleMaxResponse);
    }

    function handleMaxResponse(num) {
        nums.push(Number(num));
        let allNums = true;
        for(let i = 0; i < nums.length; i++) {
            if(!checkIfNum(nums[i])) {
                allNums = false;
                break;             
            }
        }

        if(allNums) {
            secretNumber = randomInRange(...nums);
            askGuess();
        } else {
            askRange();           
        }
    }
}

function askLimit() {
    rl.question('Please enter your desired number of attempts: ', (answer) => {
        if(!checkIfNum(Number(answer))) {
            askLimit();
        } else {
        numAttempts = Number(answer);
        askRange();
        }
    })
}

askLimit();
