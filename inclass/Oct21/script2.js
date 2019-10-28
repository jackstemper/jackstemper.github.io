class Person {
    constructor(fName, lName){
        this._firstName = fName;
        this._lastName = lName;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(){
        this._firstName = fname;
    }
}
me = new Person("Amy", "Stemper");
me.firstName = "Bobby";
console.log(me.firstName);