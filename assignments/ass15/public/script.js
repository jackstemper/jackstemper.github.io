async function showDogs(){
    let dogsJson = await fetch('api/dogs');
    let dogs = await dogsJson.json();
    let dogsDiv = document.getElementById("dogs");
    dogsDiv.innerHTML = "";

    for(i in dogs){
        dogsDiv.append(getDogElem(dogs[i]));
    }
}

async function showDog(){
    let id = document.getElementById("showDogId").value;
    let response = await fetch(`api/dogs/${id}`);
    let dog = await response.json();

    let dogDiv = document.getElementById("dog");
    doggDiv.append(getDogElem(dog));
}

function getDogElem(dog){
    let dogDiv = document.createElement("div");
    dogDiv.classList.add("dog");
    let dogTitle = document.createElement("h3");
    dogTitle.innerHTML = dog.id + ": " + dog.name;

    let dogP = document.createElement("p");
    dogP.innerHTML = `is a ${dog.breed}, and has ${dog.color} fur`;

    //create edit and delete links
    let editLink = document.createElement("a");
    editLink.href = "#edit-dog-form";
    editLink.innerHTML = "Edit";
    editLink.setAttribute("data-id", dog.id);
    editLink.onclick =showEditDog;
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.innerHTML = "Delete";
    deleteLink.setAttribute("data-id", dog.id);
    deleteLink.onclick = deleteDog;
    dogP.append(editLink);
    dogP.append(deleteLink);

    dogDiv.append(dogTitle);
    dogDiv.append(dogP);
    
    return dogDiv;
}

async function showEditDog(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-dog-id").innerHTML = id;

    let response = await fetch(`api/dogs/${id}`);
    let dog = await response.json();
    document.getElementById("editDogName").value = dog.name;
    document.getElementById("editDogBreed").value = dog.breed;
    document.getElementById("editDogColor").value = dog.color;

    return false;
}

async function deleteDog(){
    const id = document.getElementById("deleteDogId").value;
    
    let response = await fetch(`/api/dogs/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting dog");
        return;
    }

    showDogs();
    return false;
}

async function addDog(){
    //get the dog inforamtion
    const dogName = document.getElementById("newDogName").value;
    const dogBreed = document.getElementById("newDogBreed").value;
    const dogColor = document.getElementById("newDogColor").value;

    console.log(`you are adding ${dogName}, ${dogBreed}, ${dogColor}`);

    let dog = {"name": dogName, "breed":dogBreed, "color":dogColor};

    let response = await fetch('/api/dogs/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(dog),
    });

    if(response.status != 200){
        console.log("Error adding dog");
        return;
    }

    let result = await response.json();
    showDogs();
}

async function editDog(){
    let id = document.getElementById("editDogId").value;
    let name = document.getElementById("editDogName").value;
    let breed = document.getElementById("editDogBreed").value;
    let color = document.getElementById("editDogColor").value;
    let dog = {"name":name, "breed": breed, "color": color};

    let response = await fetch(`/api/dogs/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(dog),
    });

    if(response.status != 200){
        console.log("Error edditing dog");
    }

    //update the dog list
    showDogs();
}

window.onload = function(){
    this.showDogs();
    let showDogButton = document.getElementById("showDogBtn");
    showDogButton.onclick = showDog;

    let addDogButton = document.getElementById("addDogBtn");
    addDogButton.onclick = addDog;

    let editDogButton = document.getElementById("editDogBtn");
    editDogButton.onclick = editDog;

    let deleteDogButton = document.getElementById("deleteDogBtn");
    deleteDogButton.onclick = deleteDog;
}