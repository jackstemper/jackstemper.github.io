async function displayBreweries(){
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let beerApi = await response.json();
    let contentDiv = document.getElementById("content");
    let contentSec = document.createElement("section");
    contentSec.className = "double";
    for(i in beerApi){
        let brewery = beerApi[i];
        contentDiv.append(getBreweryInfo(brewery));
        //let brewery2 = beerApi[i+1];
        //contentSec.append(getBreweryInfo(brewery2));
        //contentDiv.append(contentSec);
        //i++;
    }
}

function getBreweryInfo(brewery){
    beerSection = document.createElement("section");
    beerSection.className = "brewery";
    let breweryName = document.createElement("h3");
    breweryName.innerHTML = brewery.name;
    beerSection.append(breweryName);
    if(brewery.brewery_type == "brewpub"){
        beerSection.append(makeBreweryPara(brewery.brewery_type));
    } else {
        beerSection.append(makeBreweryPara(brewery.brewery_type + " brewery"));
    }
    beerSection.append(makeBreweryAddy(brewery.street, brewery.city, brewery.state, brewery.postal_code));
    beerSection.append(makeBreweryPhone(brewery.phone));
    return beerSection;
}

function makeBreweryPhone(phone){
    let beerPhone = document.createElement("p");
    beerPhone.innerHTML = `(${phone.substr(0,3)}) ${phone.substr(3,3)} - ${phone.substr(6,4)}`;
    return beerPhone;
}

function makeBreweryAddy(street, city, state, zip){
    let beeraddy = document.createElement("p");
    beeraddy.innerHTML = `${street}, ${city}, ${state} ${zip}`
    return beeraddy;
}

function makeBreweryPara(text){
    let beerP = document.createElement("p");
    beerP.innerHTML = text;
    return beerP;
}

window.onload = function(){
    this.displayBreweries();
}