// // Given an array of integers, calculate the ratios of its elements that are positive, 
// negative, and zero. Print the decimal value of each fraction on 
// a new line with 6 places after the decimal.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const equalToZero = arr.filter((justZero) => justZero === 0 )
    const positiveNumbers = arr.filter((positiveNumber) => positiveNumber > 0 )
    const negativeNumbers = arr.filter((negativeNumber) => negativeNumber < 0 )
    
    console.log(positiveNumbers.length/arr.length);
    console.log(negativeNumbers.length/arr.length);
    console.log(equalToZero.length/arr.length);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}