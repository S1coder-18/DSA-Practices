
/**
 * 🔸 5. Linear Search in Nested Arrays
 * 📝 Description:
 * You're given a 2D array (array of arrays). 
 * Return the coordinates [i, j] of the first match for the target value. If not found, return [-1, -1].
 */

/**
 * arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]

  target = 6

 */

function nestedLinear(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] === target){
                return [i,j];
            }
        }
    }
    return [-1,-1];
}
let arr = [
  [1, 2, 3],
  [4, 5, 6],  // 1,2
  [7, 8, 9]]
let target = 6;
console.log(nestedLinear(arr, target));