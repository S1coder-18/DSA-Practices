


function optimize(arr){
    let minValue = Infinity;
    let maxP = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i];
        }else if(arr[i]>minValue)
        {
            maxP = Math.max(maxP, (arr[i]-minValue));
        }
    }
    return maxP;

}
let arr = [2,4,1];
console.log(optimize(arr));
