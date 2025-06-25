

/**
 * If username is "admin" and password is "1234" → resolve
Otherwise → reject
 */

function isLoggedIn(userName, password){
    return new Promise((resolve, reject) =>{
        if(userName == "admin" && password == 1234){
            resolve("User Logged in Successfully!.");
        }else{
            if(userName !== "admin"){
                reject("userName is wrong!.");
            }else if(password !== 1234){
                reject("Password is wrong!.");
            }else{
                reject("userName and Password is wrong!.");
            }
        }
    })
}

isLoggedIn("admin",1234)
.then((res)=>{
    console.log(res);
    return isLoggedIn("admin",12334);
}).then((res) =>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise Settled!.");
});