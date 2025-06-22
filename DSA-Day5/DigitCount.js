/**
 * Write a function countDigits(n) that takes an integer n and returns how many digits it contains.

Requirements
Handles both positive and negative integers.
Return 1 if n is 0 (since 0 is a single-digit number).
Constraints
Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
Space Complexity: O(1) — Only a few variables are used.
Examples
Input: 259
Output: 3

Input: -1035
Output: 4

Input: 0
Output: 1
 */

function countDigit(n){
   if(n === 0){
     return 1;
   }


   
    let temp = Math.abs(n);
    let count = 0;

   while(temp>0){
    temp = Math.floor(temp/10);
    count++;
   }
   return count;
}

let n = '123456789';
console.log(countDigit(n));