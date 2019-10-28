'using strict'
function foodDisplay(){
    let foods = ["popcorn", "cherries"];
    ulElm = document.createElement("ul");
    this.after(ulElm);
    let foodsP = document.getElementsByTagName("p");
    
    for(let item of foods){
        let num = Math.floor(Math.random()*10+1);
        
    }
}
window.onload = function(){
    let foodButton = document.getElementById("foodbtn");
    foodButton.onclick() = this.foodDisplay;
}