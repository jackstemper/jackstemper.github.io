function animalTable(){
    let callerName = event.target.tagName;
    //For anything other then table cell get out
    if(callerName.toLowerCase() != "td") return;
    //highlight cell
    event.target.classList.add("highlight");
}
function isTD(event){
    return (event.target.tagName.toLowerCase()=="true")
}
function showAnimals(){
    let animalTDs = document.querySelectorAll("#animal-table td");
    let p = document.createElement("p");
    this.after(p);
    for(let animalTD of animalTDs){
        p.innerHTML += animalTD.innerHTML + ", ";
    }
}
function stylePara(){
    let p = document.querySelector(".special");
    p.classList.toggle("highlight");
}
window.onload = function() {
    document.getElementById("btn-show").addEventListener("click", showAnimals);
    document.getElementById("btn-style").addEventListener("click", stylePara);
    this.setInterval(stylePara,1000);
}