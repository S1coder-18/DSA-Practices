

function remove(arr){
    
    let left = 0;
    let right = 0;

    for(right; right<arr.length; right++){
        if(arr[right] !== arr[right+1]){
            arr[left++] = arr[right];
        }
    }
    return arr;
}

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(remove(arr));