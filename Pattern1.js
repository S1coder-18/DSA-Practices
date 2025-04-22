// Pattern printing --> 
/**
 *    ****
      ****
      ****
      ****
 * 
 */


function Pattern1(number){
    
    for(let i=0; i<number; i++){
        for(let j=0; j<number; j++){
            process.stdout.write('*');
        }
        console.log(); // It goes by default in new line.
    }
}

let number = 4;
Pattern1(number);

//In js , if we will use this statement (process.stdout.write) then it won't go to in new line by default.

//Time Complexity --> O(n2) As we have used two for loops where inner loops runs n2 times.
//Space Complexity --> O(1).