
let nums = [6,5,9,2,7];
function maxEle(nums, n){
    if(n === 1){
        return nums[0]
    }

    return Math.max(nums[n-1], maxEle(nums,n-1));
}

let n = nums.length;
console.log(maxEle(nums,n));