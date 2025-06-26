
/**
 * 🔸 4. Find All Elements Starting with a Letter
 * Description:
 * Given an array of strings, return all elements that start with a given character (case-insensitive).
 * Input: arr = ["Sachin", "Virat", "Sourav", "Rohit", "Sunil"];
 * targetLetter = "s";
 * 
 * ["Sachin", "Sourav", "Sunil"]
 */

function findFirstLetter(arr, target){
    let nums = [];
    for(let i=0; i<arr.length; i++){
        let char = arr[i].slice(0,1);
        if(char.toLowerCase() === target.toLowerCase()){
            nums.push(arr[i]);
        }
    }
    return nums;
}
let arr = ["Sachin", "Virat", "Sourav", "Rohit", "Sunil"];
let targetLetter = "s";
console.log(findFirstLetter(arr, targetLetter));


// Also, There is one method called in js .cahrAt() which gives the correct index value,
//Let's do using that 


//  * 🔸 4. Find All Elements Starting with a Letter
//  * Description:
//  * Given an array of strings, return all elements that start with a given character (case-insensitive).
//  * Input: arr = ["Sachin", "Virat", "Sourav", "Rohit", "Sunil"];
//  * targetLetter = "s";
//  * 
//  * ["Sachin", "Sourav", "Sunil"]
//  */

function findFirstLetter(arr, target){
    let nums = [];
    for(let str of arr){
        if(str.charAt(0).toLowerCase() === target.toLowerCase()){
            nums.push(str);
        }
    }
    return nums;
}
let arr1 = ["Sachin", "Virat", "Sourav", "Rohit", "Sunil"];
let targetLetter1 = "s";
console.log(findFirstLetter(arr1, targetLetter1));