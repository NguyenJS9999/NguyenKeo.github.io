console.log("Buổi 18: Dom Calculator")

//Calculator:
let screenDisplay = document.querySelector(".calculation");

let zero = parseInt (document.getElementsByClassName("zero")[0].textContent);
let one = parseInt (document.getElementsByClassName("one")[0].textContent);
let two = parseInt (document.getElementsByClassName("two")[0].textContent);
let three = parseInt (document.getElementsByClassName("three")[0].textContent);
let four = parseInt (document.getElementsByClassName("four")[0].textContent);
let five = parseInt (document.getElementsByClassName("five")[0].textContent);
let six = parseInt (document.getElementsByClassName("six")[0].textContent);
let seven = parseInt (document.getElementsByClassName("seven")[0].textContent);
let eight = parseInt (document.getElementsByClassName("eight")[0].textContent);
let nine = parseInt (document.getElementsByClassName("nine")[0].textContent);
let add =  (document.getElementsByClassName("add")[0].textContent);


console.log( zero)
console.log( one)
console.log( two)
console.log( three)
console.log( four)
console.log( five)
console.log( six)
console.log( seven)
console.log( eight)
console.log( nine)
console.log(typeof add)

function input(value) {
    // Loại bỏ số 0 khi nhập vào
    if (screenDisplay.innerHTML === "0") {
        screenDisplay.innerHTML = "";
        // Kiểm tra kí tự nhập vào vô tích đầu nhập vào đưa về kí tự 0
        if (value == "0" || value == ".") {
            value = "0";
        }
        if (value == "+" || value == "-" || value == "*" || value == "/") {
            value = "0" + value;
        }
    }

    screenDisplay.innerHTML += value;
    return value;


} //input

// function calc() {
//     console.log(value)
// }

function del(){
    screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1)
}

function reset() {
    screenDisplay.innerHTML = "0";
    document.querySelector(".reset").innerText = "AC";
}

