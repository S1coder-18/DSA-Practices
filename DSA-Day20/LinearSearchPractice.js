/**
 * 🔸 3. Count Occurrences
 * Description:
 * Count how many times the target value appears in the array.
 * Input: arr = [1, 2, 3, 2, 4, 2, 5]
 * target = 2
 * Output: 3 (because 2 appears 3 times)
 */

function countLinear(arr, target){
    let nums = [];
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            count++;
            nums.push(i);
        }
    }
    return `Count is ${count} and indeces of all matching elements ${nums} .`;
}
let arr = [1, 2, 3, 2, 4, 2, 5];
let  target = 2;
console.log(countLinear(arr, target));