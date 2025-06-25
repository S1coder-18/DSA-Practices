
//Even or odd based on that reject or resolve the promise ----
function EvenorOdd(data){

    return new Promise((resolve,reject) =>{
        if(data % 2 === 0){
            resolve("Data is even, Promise Resolved!.");
        }else{
            reject("Data is Odd, Promise Rejected!.");
        }
    })
}

let EvenOdd = Math.floor(Math.random()*10)+1;
EvenorOdd(EvenOdd)
.then((res)=>{
    console.log(res);
    return EvenorOdd(EvenOdd);
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise Setteled!.");
})