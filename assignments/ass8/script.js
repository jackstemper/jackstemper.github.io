'using strict'
function displayCode(){
    /* Get Input */
    let charInput = document.getElementById("codeInput").value;
    var codeword = charInput;
    let pElm = document.createElement("p");
    this.after(pElm);
    let count = 0;
    while(count < codeword.length){
        pElm.append(codeword.charCodeAt(count));
        if(count < codeword.length-1){
            pElm.append(", ")
        }
        count++;
    }
}
function displayCount(){
    let countInput = document.getElementById("countUpInput").value;
    let countword = countInput;
    let pElm2 = document.createElement("p");
    this.after(pElm2);
    let count = 0
    let countSum = 0
    while(count <= countword){
        if(count % 2 == 0){
            countSum = count+countSum;
        }
        count++;
    }
    pElm2.append(`Sum: ${countSum}`);
}
window.onload = function() {
    let codebutton = document.getElementById("coding");
    codebutton.onclick = displayCode;
    let countbutton = document.getElementById("countingUp");
    countbutton.onclick = displayCount;
}