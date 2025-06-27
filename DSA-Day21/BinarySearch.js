
let nums = [1,0,3,5,9,12];
let target = 9;
function search(left,right){

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(nums[mid] === target){
           return mid;
        }else if(target > nums[mid]){
           left = mid+1;
        }else{
           right = mid-1;
        }
    }

    return -1;
}

console.log(search( 0, nums.length-1));