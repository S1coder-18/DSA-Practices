/**
 * Write a function that returns the largest number in an array.
 * Input: arr = [2, -6, 4, 8, 1, -9]
 * Output: 8
 */

function largestValue(arr){
   
    let largest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [2, -6, 4, 8, 1, -9];
console.log(largestValue(arr));

/**
 * Intution --> We have to find the largest, So for that we will take the least negative number
 *              which i have assigned to a variable largest.
 *              Taken loop, And checking each value of an array, If the value > largest
 *              just assign that value to the largest and this will continue until the 
 *              loop get false.
 * 
 * Approach --> 1. Created a function, Inside function taken var largest which holds the least
 *                 smallest value.
 *              2. Cheching the each value of an array, and if the value > largest then
 *              3. Assign that value in to the variable.
 *              4. Return the largest.
 */

/**
 * Time Complexity --> O(n)
 * We have used only one loop which will run n number of times.
 * 
 * Space Complexity --> O(1)
 * We haven't created any new data structure.
 */