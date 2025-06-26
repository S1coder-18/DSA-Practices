
/**
 * 🔸 4. Linear Search in Array of Strings (Case-Insensitive)
 * 📝 Description: Find the index of a given string (case-insensitive) in an array of strings.
 * 🔹Input: arr = ["Sachin", "Virat", "Rohit", "Dhoni"]
 * target = "virat"
 * 🔹 Output: 1
 */

function strLinear(arr, target){
    for(let i=0; i<arr.length; i++){
        // if(arr[i] === target){
        //     return arr[i];  // Case - Sensitive so, Will return -1;
        // }

        //For handling this case, We can toLowerCase() -- which converts upperCase into lowerCase.

        if(arr[i].toLowerCase() === target.toLowerCase()){
            return arr[i]; // Virat
        }
    }
    return -1;

}
let arr = ["Sachin", "Virat", "Rohit", "Dhoni"];
let target = "virat"; 

console.log(strLinear(arr, target)); // -1 (Virat !== virat) 