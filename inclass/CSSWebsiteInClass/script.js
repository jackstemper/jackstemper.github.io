'using strict'
function toggleNav(){
    console.log("toggling");
    const HBItems = document.getElementById(hamburgeritems);
    HBItems.classList.toggle("hidden");
}
window.onload = function(){
    const hamburger = document.getElementById(hamburger);
    hamburger.onclick = toggleNav;
}