/**
 * Find the first occurrence of a target in a sorted array with duplicates.
 * Example:
 * Input: arr = [1, 3, 5, 5, 5, 9], target = 5  
 * Output: 2
 */

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){   
        let mid = Math.floor((left+right)/2); 

        if(arr[mid] === target){
            if(mid === 0 ||  arr[mid-1] !== target){
               return mid; 
            }
            right = mid-1;
        }
        else if(target > arr[mid]){ 
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }

}

let arr = [1,5,5,5];
let target = 5;
console.log(binarySearch(arr,target));