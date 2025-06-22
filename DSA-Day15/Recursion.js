

//Print the sum of n numbers --> using recursion 
let sum = 0;
function sumOfNum(num){
   if(num == 0) return;

   sum += num;
   console.log(sum);
   sumOfNum(--num);
}

let num = 5;
(sumOfNum(num));