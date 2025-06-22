function RevInt(n){
    let rev = 0;
    let isNegative = n<0;
    
    let num = Math.abs(n);
    while(num > 0){
        let rem = num % 10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    let limit = 2**31;

    if(rev < -limit || rev > limit) return 0;

    return isNegative ? -rev : rev;
}

let n = -12113;
console.log(RevInt(n));