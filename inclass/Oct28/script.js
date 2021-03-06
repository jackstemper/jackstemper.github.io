async function displayShoe(){
    console.log("3");
    let response = await fetch("https://portiaportia.github.io/CSCE242/json/shoes.json");
    let shoeJson = await response.json();
    let shoeName = shoeJson.name;
    let shoeBrand = shoeJson.brand;
    let reviews = shoeJson.reviews;

    console.log(`${shoeName} by ${shoeBrand}`)
    for(i in reviews){
        console.log(reviews[i]);
    }

    let section = document.createElement("section");
    section.innerHTML = `${shoeName} by ${shoeBrand}`
    let content = document.getElementById("content");
    content.append(section);
}

window.onload = function(){
    console.log("1");
    this.displayShoe();
    let content = document.getElementById("content");
    let h1 = document.createElement("h1");
    h1.innerHTML = "I love shoes";
    content.append(h1);
}