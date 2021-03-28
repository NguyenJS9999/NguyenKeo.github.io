function changeColor() {
    var paragraph1 = document.getElementById("paragraph1");
    paragraph1.style.color = "green";

    var paragraph2 = document.getElementById("paragraph2");
    paragraph2.style.color = "yellow";

    var paragraph3 = document.getElementById("paragraph3");
    paragraph3.style.color = "red";
}
changeColor()

function changeBgColor(color) {
    var hello = document.getElementById("body");
    hello.style.backgroundColor = color;
}
changeBgColor("pink")
//

// var copyContent = document.getElementById("paragraph1");
// copyContent.innerHTML = "Nguyen"
// var content1 = document.getElementsByClassName('paragraph1').innerHTML
// console.log(content)
// var content2 = document.getElementsByClassName('paragraph2').innerHTML
// console.log(content)
// content2 = content1
// console.log(content2)
function copyContent(paragraph1, paragraph2) {
    document.getElementById("paragraph1").innerText = document.getElementById("paragraph2").innerText;
}

copyContent();

//
function changeFontSize(Font_Size) {
    var FontSize1 = document.getElementById("paragraph1");
    FontSize1.style.fontSize = Font_Size + "px";
    var FontSize2 = document.getElementById("paragraph2");
    FontSize2.style.fontSize = Font_Size + "px";
    var FontSize3 = document.getElementById("paragraph3");
    FontSize3.style.fontSize = Font_Size + "px";
}
changeFontSize("20")
//
function increaseFontSize() {

}
increaseFontSize()
//
function decreaseFontSize() {

}
decreaseFontSize()