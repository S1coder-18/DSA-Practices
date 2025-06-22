

function moveZeros(arr){
   let lastNonZero = 0;

   for(let i=0; i<arr.length; i++){
      if(arr[i] !==0){
        [arr[i], arr[lastNonZero++]] = [arr[lastNonZero], arr[i]];
      }
   }
   return arr;
}

let arr = [0,1,0,3,12];
console.log(moveZeros(arr));