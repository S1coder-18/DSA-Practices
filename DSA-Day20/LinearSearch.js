

//Linear Search -- Simplest Searching algorithm which is used to check each element one by one until 
// its find the target element  -- or reaches to an end.

function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;

}
let target = 5;
let arr = [3,4,6,7,8,9];
console.log(linearSearch(arr, target));