


function Palindrome(n){

    if(n < 0) return false;
    let res = 0;

    let nCopy = n;
    
    while(n>0){
        
        let rem = n % 10;
        res = res*10 + rem;
        n = Math.floor(n/10);
    
    }
    return nCopy === res;
}

let n = -1221;
console.log(Palindrome(n));