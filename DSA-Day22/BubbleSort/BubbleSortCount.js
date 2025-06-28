
function bubbleSort(nums){
    let count = 0;
    for(let i=0; i<nums.length-1; i++){
        let swapped = false;
        for(let j=0; j<nums.length-i-1; j++){
            if(nums[j] < nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                count++;
                swapped = true;
            }
        }
        if(!swapped) break; //If no swap, Means array is already sorted!.
    }
    return count;

}

let nums =[5, 2, 6, 3, 1];
console.log(bubbleSort(nums));