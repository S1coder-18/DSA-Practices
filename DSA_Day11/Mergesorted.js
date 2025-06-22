

function Merge(nums1, nums2){
    let m = nums1.length;
    console.log(m);
    let n = nums2.length;

    let nCopy = [...nums1];

    let i=0; //Ncopy array
    let j=0; //nums2 array
    let k=0; //nums1 array

    while(i<m && j<n){
      if(nCopy[i] <= nums2[j]){
        nums1[k++] = nCopy[i++];
      }else{
        nums1[k++] = nums2[j++];
      }
    }

    //Copy the remaining elements 
    while(i<m){
      nums1[k++] = nCopy[i++];
    }

    //Copy the remaining array 

    while(j<n){
      nums1[k++] = nums2[j++];
    }

    return nums1;
}
let nums1 = [1,2,3];
let nums2 = [2,5,6];

console.log(Merge(nums1,nums2));