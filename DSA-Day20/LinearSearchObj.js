
/**
 * 🔸 1. Linear Search in an Array of Objects
 * Description:
 * Given an array of user objects, find the first user with a given name and return the full object. 
 * If not found, return null.
🔹 Input: 
const users = [
  { id: 1, name: "Sachin" },
  { id: 2, name: "Virat" },
  { id: 3, name: "Rohit" }
];

targetName = "Virat";
output -{ id: 2, name: "Virat" }
*/

function linearSearchObj(users, target){

    for(let user of users){
        if(user.name === target){ //Searching by name ...  
            return user;
        }
    }
    return -1;
}
 
 const users = [
  { id: 1, name: "Sachin" },
  { id: 2, name: "Virat" },
  { id: 3, name: "Rohit" }
];
let target = "Virat";
console.log(linearSearchObj(users, target));

// Searching by id --> Suppose in question is given that, target = 1 id ... whichever 
// the id matches just return that.... whole object.


function linearSearchObj1(users, target){  
 //Here, if we wont change param name then also it will work fine, Do u know why coz users, target are
 // present in local scope inside linearSearchObj1... (Thats How Js Works...)
    for(let user of users){
        if(user.id === target){ //Searching by name ...  
            return user;
        }
    }
    return null;
}
 
 const users1 = [
  { id: 1, name: "Sachin" },
  { id: 2, name: "Virat" },
  { id: 3, name: "Rohit" }
];
let target1 = 5;
console.log(linearSearchObj1(users1, target1));