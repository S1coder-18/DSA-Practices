// Promise Example --------------

function SaveToDB(data){
    return new Promise((resolve,reject)=>{
        

        if(data > 4){
            resolve("Promise Resolved!!");
        }else{
            reject("Promise Rejected!");
        }
    })

}

let randomNum = Math.floor(Math.random()*10)+1;
SaveToDB(randomNum)
.then((res)=>{console.log(res);
    return SaveToDB(randomNum);
}).then((res)=>{
    console.log(res);
    return SaveToDB(randomNum);
}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise Settled!");
})