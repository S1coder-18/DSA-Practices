
//Calculate the factorial using recusrsion -->

function fact(num){
   if(num == 0) return 1;  //Base Case

   return num*fact(num-1);
}

console.log(fact(5));