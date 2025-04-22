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
            process.stdout.write('*'); //It will print n number of times (*).
        }

        console.log(); 

        // It goes by default in new line. And this will start the inner loop to new line 
        //whenever the inner loop condition fails. 
    }
}

let number = 4;
Pattern1(number);

//In js , if we will use this statement (process.stdout.write) then it won't go to new line by default.

//Time Complexity --> O(n2) As we have used two for loops where inner loops runs n2 times.
//Space Complexity --> O(1).