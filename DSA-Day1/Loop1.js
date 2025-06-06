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

/**
 * Approach --
 * 
 * We know that if the value is divisible by 2 then that value is even 
 * otherwise that will be odd
 * 
 * 1.I created a function,
 * 2.Iterated through the loop till length of an array
 * 3.If the array of index value is divisible by 2 then print,
 * 4.Otherwise skip and loop will run until the loop condition will get false.
 */