//let person = new Object();

//let person = {};

let person = {
    firstName: "Amy",
    lastName: "Stemper",
    age: 20,
    hobbies: ["reading", "studying", "learning"],
    sayHello(){
        console.log("Hello " + this.firstName);
    },
}
person.sayHello();
console.log(person.firstName + " " + person.lastName);
//get key from user and display value
//let key = "firstName";
//console.log(person[key]);
//console.log(person["lastName"]);

//loop throught the keys
for(let key in person){
    console.log(key + ": " + person[key]);
}
let menu = {
    Cheese: 3,
    Banana: 2,
    OJ: 5,
}
let total = 0;
for(items in menu){
    menu[items] += menu[items];
}
for(items in menu){
    total += menu[items];
}
console.log("Total is: " + total);