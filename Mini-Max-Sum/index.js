// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then 
// print the respective minimum and maximum values as a single line of two space-separated long integers.

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const sortedArray = arr.sort(function(a,b){
        if(a>b) return 1
        if(a<b) return -1
        return 0
    })
    
    const firstArray = [...arr]
    
    function firstSum(sortedArray, arr){
    arr.pop()
    const sumArrayWithoutLastlement = arr.reduce((firstSum, index) => firstSum + index)
    
    firstArray.shift()
    const sumArrayWithoutFirstElement = firstArray.reduce((secondSum, index) => secondSum + index)
    console.log(sumArrayWithoutLastlement,sumArrayWithoutFirstElement)
    
    }
    
    firstSum(firstArray, arr)

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    

    miniMaxSum(arr);
}