//Selection sort --> Just find the min value and swap it out.

function selection(nums){

    for(let i=0; i<nums.length-1; i++){
        let min = i;
        for(let j = i+1; j<nums.length; j++){
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        if(min !== i){
            [nums[min], nums[i]] = [nums[i], nums[min]];
        }
    }
    return nums;
}

let nums = [5, 2, 6, 4, 1];
console.log(selection(nums));