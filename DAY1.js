/**
 * Question
 * Write a program to print all even numbers from an array.
 * 
 * Example array: [10, 3, 5, 2, 7, 6, 9]
 * 
 * Expected Output: 10 2 6
 */

function evenfunc(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            console.log(arr[i]);
        }
    }
}

const arr = [10, 3, 5, 2, 7, 6, 9];
console.log(evenfunc(arr));