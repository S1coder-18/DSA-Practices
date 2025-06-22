

function revStr(s){
    let nums = s.split("");
    let left = 0;
    let right = s.length-1;

    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums.join('');

}
let s = "Sachin";
console.log(revStr(s));