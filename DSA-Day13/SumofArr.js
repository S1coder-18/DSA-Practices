
let nums = [5,3,2,0,1];

function sum(i){
   
    if(i == nums.length-1){
        return nums[i];
    }

    return nums[i]+sum(++i);
}

console.log(sum(i=0));


//Also we can do in this way --->

// function sum(n){
//     if(n == 0) return nums[n];

//     if(nums[n]%2 !== 0){
//         return nums[n] + sum(n-1);
//     }else{
//         return sum(n-1);
//     }

//     // return (nums[n]%2 !== 0) ? nums[n]+sum(n-1) : sum(n-1);
// }

// console.log(sum(nums.length-1));