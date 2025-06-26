
/**
 * 🔸 2. Return All Indices Matching a Condition
 * Description:
 * Find all indices in an array where the value is an even number.
 * 
 * arr = [1, 4, 6, 7, 8, 3];
🔹 Output: [1, 2, 4]
 */

function linearEvenIndices(arr){
    let nums = [];
    let obj = {};
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            nums.push(i);
            obj[i] = arr[i]; // Just for practice, I have pushed the key : value pairs.
        }
    }

    return [nums, obj];

}
let arr = [1, 4, 6, 7, 8, 3];
console.log(linearEvenIndices(arr));