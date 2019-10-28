async function special(){
    console.log("In Special Beginning");
    setTimeout(doStuff, 2000);
    console.log("In special Ending");
}

function doStuff(){
    console.log("In do stuff");
}

window.onload = function(){
    this.console.log("Before calling Special");
    this.special();
    this.console.log("After calling Special");
}