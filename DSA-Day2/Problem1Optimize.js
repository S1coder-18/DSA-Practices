/**
 * 
 */

function secondLargest(arr){

    if(arr.length < 2){
        return -1;
    }

    let firstLargest = -Infinity;
    let secLargest = -Infinity;
  
    for(let i=0; i<arr.length; i++){
        if(arr[i] > firstLargest){
            secLargest = firstLargest;
            firstLargest = arr[i];
        }else if(arr[i] > secLargest && arr[i] !== firstLargest){
            secLargest = arr[i];
        }
    }
    
    return secLargest;

}

let arr = [4,9,0,3,4,2,25,25];
console.log(secondLargest(arr));

/**
 * Intitution --> First we will find the firstLargest, And when we get firstLargest 
 * then it means the older firstLargest is already secondLargest. 
 * 
 * Approach --> 1. I have taken two variables firstLargest & secondLargest which are assigned 
 *                 to -Infinity (least smallest value to get the largest or secondlargest).
 * 
 *              2. Iterated using for loop where i starts from 0 to till arr.length.
 *              3. If the array's value > firstLargest then, we will assign the 
 *                 value to firsLargest and 
 *  
 *              4. And secondLargest = firsLargest because if we are getting new largest value
 *                 It means the older largest value is second largest value.
 * 
 *              5. And if the value < firstLargest but (value > secLargest) then in that case
 *                 secLargest = value.
 *             
 *              6. And for handling dulicate largest value's, (arr[i] != firstLargest)
 *                 (For example, If [10,20,20] array is like this, then 
 *                  we will get 10 as secondLargest, if we right that above condition.)
 *          
 *              7. Return the secondLargest value.
 * 
 * Time Complexity --> O(n).
 * We are using just one loop which runs from 0 to length of array.
 * 
 * Space Complexity --> O(1).
 * We haven't created any new data structure.
 */

/**
 * Corner Cases --> 1. What if our array is empty or < 2 value's.
 *                  2. What if array has negative value's .
 *                  3. What if array has duplicate largest value's.
 */