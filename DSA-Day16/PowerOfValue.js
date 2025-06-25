

// a = 5 and n = 2 it should return --> 5*5 => 25
// a = 5 and n = 3 it should return --> 5*5*5 => 125

//Without Recursion --
let power = 0
function pow(a, n){
    let power = 1;
    while(n >= 1){
        power *= a;
        n--;
    }
    return power;

}
console.log(pow(3,4));

// Power of values using Recursion --> 

function pow1(a, n){
    if(n == 1) return a;

    return a* pow(a, n-1);

}

console.log(pow1(5,4));