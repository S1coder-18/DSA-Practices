// Prime Number --> is a number which should be divisible by either 1 or number itself.

// If that number is divisible by any other number except 1 and that number itself then 
// that is not a prime number.

//Why 1 is not a prime number because 1 is divisible by only divisior which is itself but 
// there should be 2 divisior 1 nd itself.


function Prime(number){

    if(number < 1) return false;
    for(let i=2; i<number; i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}

let number = 11;
console.log(Prime(number));