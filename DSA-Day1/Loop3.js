/**
 * Write a function that returns the smallest number in an array.
 * Input: arr = [2, -6, 4, 8, 1, -9]
 * Output: -9
 */

function smallestNumber(arr){
    let minNumber = Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(minNumber>arr[i]){
            minNumber = arr[i];
        }
    }
    return minNumber;
}

let arr = [2, -6, 4, 8, 1, -9];
console.log(smallestNumber(arr));


/**
 * Approach
 * Intution --> Simply, As per the question we have to find smallest number so i took 
 *              a variable which will hold the max value. And we can compare that value 
 *              with the each value of an array, If the value is minValue(infinity)>arrr[i]
 *              just assign that value into minValue ...
 *              contitnue till the loop get false.
 * 
 * 1. Created a function and i took a variable minValue which will hold the Infinity(max value).
 * 2. I took Infinity as minValue because whatever the value present in the should be 
 *    equal or less than that Infinity so that we can easily get the smallest value.
 * 3.Iterated through the for loop, till the length of an array and
 * 4. Comparing using if else, if the arr[i]<minValue then assign that arr[i] to minValue.
 * 5. This will continue until loop get false.
 * 6. And return the minValue which will be our smallest value.  
 */

/**
 * Time Complexity --> O(n)
 * Because we used only one loop which will run n times(array's length).
 * 
 * Space Complexity --> O(1).
 * Because we have taken only one variable minValue which is constant
 * and we haven;t created new data structure.
 */