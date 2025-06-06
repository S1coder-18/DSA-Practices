/**
 * Write a function that returns the number of negative numbers in an array.
 * Input: arr = [2, -6, 4, 8, 1, -9]
 * Output: 2
 */

function countNegative(arr){

    let count = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}

let arr = [2, -6, 4, 8, 1, -9];
console.log(countNegative(arr));

/**
 * Approach
 * 
 * 1. I read the question and what i understood that just if the value is < 0 count that.
 * 2. I created a function countNegative which will take array as parameter.
 * 3. Inside function, I have taken one variable count which is used to count the negative value.
 * 4. And then iterated through loop to check whether the value is < 0 or not.
 * 5. given condition if arr[i]<0 then, We will increment count by 1.
 * 6. And this will continue until loop will get false.
 * 7. Return the result.
 */