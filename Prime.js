// Prime Number --> 
function Prime(number){
    for(let i=2; i<number; i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}

let number = 15;
console.log(Prime(number));