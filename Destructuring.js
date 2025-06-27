let obj = {
    name: "Sachin",
    age: 24,
    Address: {
        city: "Umaria",
        zip: 484555
    }
}

//Nested Object destructuring --
const { name, age, Address:{city, zip} } = obj;
console.log(name, age);

console.log(`City is ${city} and zipcode is ${zip}`);

//Array destructuring --> Nested array destructuring 

let arr = [1, 2, [5,4]];
const [a,,[y]] = arr;
console.log(a, y);

//Skipping values --

const[,v] = arr;
console.log(v); //2,  -- it skipped 1 .

//Function parameter destructuring 

function dest([q,w,e ]) {
    // return (q, w, e);       // This will last value coz comma operator evalutes from left to right
                               // return last value 
    return ` Values are : ${q} ${w}  ${e}`; // We can use template literals in this case  ....
}

console.log(dest([7, 8, 9]));

//For objects as well we can do the same -- > Template literals
function dest1({ name, age }) {
    // return { name, age }; //Give whole object but wanna print values only...
    return `Name is ${name} and ${age}.`; //Here, also we can use template literals .....
}

console.log(dest1({ name: "Sachin", age: 24 }));


//Destructure with renaming 

const person = {
    firstName: " Sachin",
    lastName: "Gupta",
    age:24
}

// const{firstName: fName, lastName} = person;
// console.log(fName, lastName); //Sachin Gupta , Here we are logging using fName......

//Destructure with rest --

const{firstName, ...rest} = person;
console.log(firstName); // Sachin
console.log(rest); //{lastName: "Gupta", age: 24} whole object

const nums = [1,2,3,4,5,6];
const[p, ...rest1] = nums;
console.log("First value of the array",p); //first value
console.log("Rest of the values of an array ", rest1); //[2,3,4,5,6] --> wrest of the array  

//We can set the fallback values, When array is undefined ... then only other wise it will 
//log the arrays values only ....

const nums1 = [undefined];
const[g=12,f=23] = nums1;
console.log(g,f); //
console.log(nums1); //


//Destructruing in loops 

const p1 = [
    {
    name:"Raj",
    age:24
    },
    {
        name:"Jay",
        age: 24
    }
];

for(const{name,age} of p1){
    console.log(`${name} and ${age}`);
}


//5. Mixed Nested + Default + Renaming 
const data = {
  id: 1,
  user: {
    name: "Sachin",
    address: {
      city1: "Umaria",
      zip1: 484555
    }
  }
};
const {
  user: {
    name: userName,
    address: { city1, zip1: z = 0 }
  }
} = data;

console.log(userName, city1, z);