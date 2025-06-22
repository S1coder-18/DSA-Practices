

function moveZeros(nums){
    
    let k = 0;
    for(let i=0;i<nums.length; i++){
        if(nums[i] !== 0){
            nums[k++] = nums[i];
        }
    }

    //ramaining zero elements we push into last 

    while(k<nums.length){
        nums[k++] = 0;
    }
    return nums;

}

let nums = [0,1,0,-3,12];
console.log(moveZeros(nums));