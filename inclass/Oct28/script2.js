async function displayShoes(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/shoes.json");
    let shoesJson = await response.json();
    let contentDiv = document.getElementById("content");
    //loop through shoes array
    for(i in shoesJson){
        let shoe = shoesJson[i];
        contentDiv.append(getShoeItem(shoe));
    }
}

function getShoeItem(shoe){
    secElm = document.createElement("section");
    secElm.className = "shoe";
    let shoeName = document.createElement("h3");
    shoeName.innerHTML = shoe.name;
    secElm.append(shoeName);
    secElm.append(createShoePara("$:" + shoe.price));
    secElm.append(createShoePara(shoe.material));
    secElm.append(createShoePara(shoe.description));
    //loop through reviews and add as a bulleted list
    secElm.append(createShoeList(shoe.reviews));
    return secElm;
}

function createShoeList(reviews){
    let ulElm = document.createElement("ul");
    for(i in reviews){
        let liElm = document.createElement("li");
        liElm.innerHTML = reviews[i];
        ulElm.append(liElm);
    }
    return ulElm;
}

function createShoePara(text){
    let shoeP = document.createElement("p");
    shoeP.innerHTML = text;
    return shoeP;
}

window.onload = function(){
    this.displayShoes();
}