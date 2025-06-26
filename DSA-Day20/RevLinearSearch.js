

//Reverse Linear Search -- Iterate from backwards.....

function revLinearSearch(arr, target){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;

}

let arr = [5, 10, 15, 10, 5];
let target = 10;
console.log(revLinearSearch(arr,target));