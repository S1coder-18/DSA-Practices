

function insertionSort(nums){
    for(let i=1; i<nums.length; i++){
        let curr = nums[i];
        let prev = i-1;

        while(nums[prev] > curr && prev >= 0){
            nums[prev+1] = nums[prev];
            prev--;
        }

        nums[prev+1] = curr;
    }    
    return nums;
}

let nums = [5,-1,3,-2];
console.log(insertionSort(nums));