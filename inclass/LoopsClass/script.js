'using strict'
function displayCount(){
    /* Make ul, get div, put ul in div */
    ulElem = document.createElement("ul");
    contentElem = document.getElementById("nalgene");
    contentElem.append(ulElem);

    let count = 1;
    while(count <= 10){
        liElm = document.createElement("li");
        liElm.innerText = count;
        ulElem.append(liElm);
        count++;
    }
}
function displayLinks(){
    let linksElm = document.getElementById("links");
    for(let i = 1; i<6;i++){
        aElm = document.createElement("a");
        linksElm.append(aElm);
        aElm.href = `#${i}`;
        aElm.innerText = `Page ${i}`;

    }

}
function displayTables(){
    let tableElm = document.createElement("table");
    this.after(tableElm);
    for(let y =1;y<=10;y++){
        let rowElm = document.createElement("tr");
        tableElm.append(rowElm);
        for(let x =1;x<=10;x++){
            let colElm = document.createElement("td");
            tableElm.append(colElm);
            colElm.innerHTML = y*x;
        }
    }
}
window.onload = function() {
    this.displayCount();
    this.displayLinks();
    let tbutton = document.getElementById("timestables");
    tbutton.onclick = displayTables;
}