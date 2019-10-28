function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(){
        alert("Hello " + this.firstName + " " + this.lastName);
    }
}
let fName = prompt("Enter First Name");
let lName = prompt("Enter Last Name");

let me = new Person(fName,lName);
me.sayHello();