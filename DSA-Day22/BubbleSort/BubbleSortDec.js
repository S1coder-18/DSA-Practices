
//Bubble Sort in Descending order -->

function bubbleSort(nums){

    for(let i=0; i<nums.length-1; i++){
        let swapped = false;
        for(let j=0; j<nums.length-i-1; j++){
            if(nums[j] < nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                swapped = true;
            }
        }
        if(!swapped) break; //If no swap, Means array is already sorted!.
    }
    return nums;

}

let nums =[5, 2, 6, 4, 1];
console.log(bubbleSort(nums));