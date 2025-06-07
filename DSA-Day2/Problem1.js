/**
 * Second largest --
 * arr = [4,9,0,3,4,6,23]
 * output = 9
 */

function secLargest(arr){
   
    let largest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(largest<arr[i]){
            largest = arr[i];
        }
    }
    let selargest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(selargest < arr[i] && largest !== arr[i]){
            selargest = arr[i];
        }
    }

    return selargest;
}


let arr = [4,9,0,3,4,6,23];
console.log(secLargest(arr));

/**
 * Intution --> First i found the largest value, And then i was looking ofr sec largest
 *              so sec largest should not be largest, I just gave that condition.
 * 
 * Approach --> 1. Find the largest value.
 *              2. Taken a variable for selargest to find the second largest value.
 *              3. used simple if condition if the arr[i]>selargest and arr[i] !== largest.
 *              4. We got the second largest value.
 *              5. Return the second largest value.
 */

/**
 * Time Complexity --> O(n)
 * We have used two loops for finding -- 1. Largest --> O(n)
 *                                       2. Second largest --> O(n)
 *      SO overall TimeComplexity ---> O(n)+O(n) => O(2n) => O(n)
 * 
 * Space Complexity  --> O(1).
 * We haven't created any new data structure.
*/