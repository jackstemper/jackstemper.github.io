'using strict'

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

function togglePara(){
    const moreInfoPara = document.getElementById("more-info");
    moreInfoPara.hidden = !moreInfoPara.hidden;
    console.log("toggling");
    return false;
}

function validateFirstName(){
    //remove error if its showing
    let errorSpan = document.getElementById("error-first-name");
    if(errorSpan!=null){
        errorSpan.remove();
    }

    //show error when console is blank
    if(this.value.trim() == ""){
        const errorSpan = document.createElement("span");
        errorSpan.id = "error-first-name";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);
    }
}

window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = this.toggleNav;
    
    const moreInfoPara = document.getElementById("more-info");
    moreInfoPara.hidden = true;

    const expandLink = document.getElementById("expand-link");
    expandLink.onclick = this.togglePara;

    const firstNameTB = document.getElementById("txt-first-name");
    firstNameTB.addEventListener("keyup", validateFirstName);

}