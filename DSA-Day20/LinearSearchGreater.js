
/**
 * 3. First Element Greater Than Target
 * Description:
 * Return the first element in the array that is greater than a given number.
 * arr = [2, 4, 7, 1, 10];
 * target = 5;
 * output -- 7
 * 
 * We have to find in linear Fashion suppose if the array is 
 * arr = [2, 4, 9, 1, 10]; then return 9 .... not 7.
 * */

function firstGreater(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > target){
            return arr[i];
        }
    }
    return null;
}
let target = 5;
let arr = [2, 4, 7, 1, 10];
console.log(firstGreater(arr,target));


//Suppose, In question it is given that we have to 
// "find the smallest value greater than target" Try to understand the question here.... ok 
// Value should be smallest but greater than target --


function firstGreater1(arr, target){
    let min = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > target && arr[i] < min){
            min = arr[i];
        }
    }
    if(min !== Infinity) return min; 
    return null;
}
let target1 = 5;
let arr1 = [6, 9, 7, 10];
console.log(firstGreater1(arr1,target1));


