"using strict"

Name = prompt("Enter your name");
coffeeNumber = prompt("How many coffees do you want? Each Coffee is 2$");
coffeeCost = parseFloat(coffeeNumber)*2;
tipamt = prompt("Would you like to leave a tip, please enter the ammount");
tipamt = parseFloat(tipamt);
let totalcost = (coffeeCost * 1.07) + tipamt;
let resultP = document.getElementById("coffeeTalk");
resultP.innerHTML = `${Name} ordered ${coffeeNumber} coffee(s) and the total was ${totalcost}`;