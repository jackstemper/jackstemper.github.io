class Person {
    constructor(fname, lname){
        this._firstName = fname;
        this._lastname = lname;
    }
    getFirstName(){
        return this._firstName;
    }
    getLastName(){
        return this._lastname;
    }
    setFirstName(fname){
        this._firstName = fname;
    }
}

me = new Person("Amy", "Stemper");
me.setFirstName("Shuler");
console.log(me.getFirstName());
console.log(me.getLastName());
console.log(typeof(Person));

class MyDate{
    constructor(h,m,s){
        this._hours = h;
        this._minutes = m;
        this._seconds = s;
    }
    GetFormattedDate(){
        return `${prependZero(this._hours)}:${prependZero(this._minutes)}:${prependZero(this._seconds)}`;
    }
    prependZero(data){
        if(data < 10){
            return '0'+data;
        }
    }
}
myTime = new MyDate("5","34", "52");
console.log(myTime.GetFormattedDate());