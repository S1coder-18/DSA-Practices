// // Sum of odd numbers using recursion --->

// let nums = [5,4,2,6,7];
// function sumOdd(i){
//     let isOdd = ((nums[i]%2) !== 0);

//     if(i == nums.length-1){
//         return isOdd ? nums[i] : 0;
//     }

//     return isOdd ? nums[i]+sumOdd(i+1) : sumOdd(i+1);
// }

// let i = 0;
// console.log(sumOdd(i));


// Sum of odd numbers using recursion --->
//Also we can do by backward traversal --> let me show you 


let nums = [5,4,2,6,7];

function sumofOdd(n){
    let isOdd = ((nums[n]%2) !== 0);
    if(n == 0){
        return isOdd ? nums[n] : 0;
    }

    return (isOdd) ? nums[n] + sumofOdd(n-1) : sumofOdd(n-1);
}
let n = nums.length-1;

console.log(sumofOdd(n));
