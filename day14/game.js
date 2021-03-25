let random = Math.floor(Math.random() * 100);
let alertMessage = document.getElementById("alert")
let alertMessage = document.getElementById("result")
let button  = document.getElementById("guessButton")
let count = 0;
function clickGuess() {
    let numberGuess = parseInt(document.getElementById("numberguess").value);
    
    console.log(random, numberGuess);
    if (!Number.isInteger(numberGuess)) {
        alertMessage.innerHTML("Vui lòng nhập số");
        alertMessage.style.color = red;;
    } else {
        if (numberGuess > random) {
            alertMessage.innerHTML = "Số bạn nhập quá lớn"
        } else if (numberGuess < random) {
            alertMessage.innerHTML = "Số bạn nhập quá bé"
        } else {
            alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng"
        }

        reseltMessage.innerHTML += `Lần đoán thứ ${count} có giá trị là ${numberGuess} <br />`
    }
}
