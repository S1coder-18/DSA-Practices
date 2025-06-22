

function reverseArray(nums,start,end){
     let start = 0;
     let end = nums.length-1;
    if(start > end){
        return;
    }
    [nums[start], nums[end]] = [nums[end], nums[start]];
    
    return reverseArray(nums, ++start, --end);
}

let nums=[1,2,3,5];

(reverseArray(nums,start,end));
console.log(nums);