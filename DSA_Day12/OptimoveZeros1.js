

function moveZeros1(nums){

    let result = [];
    let i=0;
    for(i; i<nums.length; i++){
        if(nums[i] !== 0){
            result.push(nums[i]);
        }
    }

    while(i<nums.length){
        result.push(nums[i++]);
    }
    return result;
}

let nums = [0,1,0,3,12];
console.log(moveZeros1(result));