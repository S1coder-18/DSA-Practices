

function removeEle(nums,val){
   
    let left = 0;
    let right = nums.length-1;
    
    
    while(left <= right){


        if(nums[right] === val){
            right--;
        }else if(nums[left] === val){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
            left++;
        }else{
            left++;
        }
        
    }
    
    return right+1;
}

let arr = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(removeEle(arr,val));