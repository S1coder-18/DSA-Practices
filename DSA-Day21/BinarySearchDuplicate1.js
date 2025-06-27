
/**
 * ✅ Question 2: Find the Last Occurrence
Given a sorted array (may contain duplicates), return the index of the last occurrence of a target element.
Example 1:
Input: arr = [1, 3, 5, 5, 5, 9], target = 5  
Output: 4
 */

function lastOccurence(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target){
           if(mid === arr.length-1 || arr[mid+1] !==target){
              return mid;
           }
           left = mid + 1; 
        }else if(target > arr[mid]){ 
           left = mid + 1;   
        }else{
           right = mid -1; 
        }
    }
}

let arr = [1, 3, 5, 5, 5, 9]; 
let target = 5;
console.log(lastOccurence(arr, target)); 