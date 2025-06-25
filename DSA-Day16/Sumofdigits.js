

// Sum of Digits without Recursion --> 


function sumOfDigits(n){ 
    let sum = 0;
    while(n > 0){
        let lastDigit = n%10;
        sum += lastDigit;
        n = Math.floor(n/10);
    }
    return sum;
}
let n = 1234;
console.log(sumOfDigits(n));


//Sum of Digits using Recursion --> 

function sumOfDigits1(n1){

   if(n1 < 10) return n1;

   return (n1%10) + sumOfDigits1(Math.floor(n1/10));

}
let n1 = 1234;
console.log(sumOfDigits1(n1));