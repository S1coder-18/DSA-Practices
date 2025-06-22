

function stock(arr){
    let maxProfit = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > arr[i]){
                maxProfit = Math.max(maxProfit,(arr[j]-arr[i]));
            }
        }
    }
    return maxProfit;

}
let arr = [7,1,5,3,6,4];
console.log(stock(arr));