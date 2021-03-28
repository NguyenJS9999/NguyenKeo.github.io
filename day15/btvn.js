let q = document.getElementById("container")
let paraNo1 = document.getElementById("paraNo1")
let paraNo2 = document.getElementById("paraNo2")
let paraNo3 = document.getElementById("paraNo3")


function changeFontSize() {
    let newFontSize = promt("Nhập vào font-size")
    container.style.fontSize = newFontSize;
}

function copyContent() {
    document.getElementById("paraNo2").innerHTML = document.getElementById("paraNo1").innerHTML 
}

function changeBgColor() {
    document.getElementById("container").style.backgroundColor= "white";
}

function tangSize() {
    let value = prompt("Hãy nhập vào id đoạn văn (paraNo1, paraNo2, paraNo3)", "paraNo1")
    let element = document.getElementById(value)
    let fontsizeNumber = window.getComputedStyle(font)
}

function reser() {
    location.reload()
}

let para0 = document.getElementsByTagName("p") 
console.log(para0)