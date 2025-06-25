

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
const [a, ,[y]] = arr;
console.log(a, y);

//Function parameter destructuring 

function dest([q,w,e ]) {
    // return (q, w, e);       // This will last value coz comma operator evalutes from left to right
    // return last value 
    return ` Values are : ${q} ${w}  ${e}`; // We can use template literals in this case  ....
}

console.log(dest([7, 8, 9]));

function dest1({ name, age }) {
    // return { name, age };
    return `Name is ${name} and ${age}.`; //Here, also we can use template literals .....
}

console.log(dest1({ name: "Sachin", age: 24 }));