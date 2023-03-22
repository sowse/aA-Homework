function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let odds = [];
    for (let i = 1; i < arr.length; i += 2) {
        odds.push(arr[i]);
    };

    return odds;

}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let odds = [];
    for (let i = 1; i < arr.length; i += 2) {
        odds.unshift(arr[i]);
    };

    return odds;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let pwrs = [];
    for (let i = 1; i < arr.length; i *= 2) {
        pwrs.push(arr[i]);
    };

    return pwrs;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let pwrs = [];
    for (let i = 1; i < arr.length; i *= n) {
        pwrs.push(arr[i]);
    };

    return pwrs;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let half = [];
    for (let i = 0; i < arr.length / 2; i++) {
        half.push(arr[i]);
    };

    return half;

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    
    let half = [];
    for (let i = arr.length - 1 ; i == arr.length / 2; i--) {
        half.push(arr[i]);
    };

    return half;

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
