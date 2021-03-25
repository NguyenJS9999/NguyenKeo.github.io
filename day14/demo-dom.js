// getElementByID(tenID) để lấy ra phần tử có id tương ứng
// innerHTML là nội dung của element
document.getElementById("demo").innerHTML = "Xin chào các bạn, tôi là DOM"

// document.getElementsByClassName();
// document.getElementsByTagName();
// document.getSelector();
var hello = document.getElementById("demo");
hello.innerHTML = "Hello word"
hello.style.color = "blue";
hello.style.textAlign = "center";
hello.style.backgroundcolor = "yellow";

function pressOnclick() {
    hello.innerHTML = "Hi you"
    hello.style.color = "red"
}

