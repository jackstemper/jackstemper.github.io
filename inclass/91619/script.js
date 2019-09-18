"using strict"

Name = prompt("Enter your name");
coffeeNumber = prompt("How many coffees do you want?");
tipamt = prompt("Would you like to leave a tip, please enter the ammount");
let totalcost = (coffeeNumber * 1.07);
let tipinc = coffeeNumber + tipamt;
let resultP = document.getElementById("result");
resultP.innerHTML = `${Name} ordered ${coffeeNumber} coffee(s) and the total was ${tipinc}`;