let numberGuessInput = document.querySelector(".input");
let randomNumber = Math.floor(Math.random() * 100);

let buttonGuess = document.querySelector(".guessButton");

let alertMessage = document.querySelector(".alertMessage");
let resultMessage = document.querySelector(".result");
let soLuotConLai = document.querySelector(".soLuotConLai");


let countNumber = 0;
let countNumberRemaining = 10;
function clickGuess() {


  if (numberGuessInput.value === "") {
    alertMessage.innerHTML = "Vui lòng nhập số !";
  } else {
    var inputNum = +(numberGuessInput.value);
  }
  // 
  if (Number.isInteger(inputNum) === false) {

    if (isNaN(inputNum) === false) {
      alertMessage.innerHTML = "Vui lòng nhập số kiểu nguyên !";
    } 
    else {
      alertMessage.innerHTML = "Vui lòng nhập số. Không nhập chữ !";
    }
    alertMessage.style.color = "red";

  } 
  else if (inputNum < 0 ) {
    alertMessage.innerHTML = "Số bạn đoán nhỏ hơn khoảng cho phép!";
    alertMessage.style.color = "blue";

  } 
  else if (inputNum > 100) {
    alertMessage.innerHTML = "Số bạn đoán lớn hơn khoảng cho phép!";
    alertMessage.style.color = "blue";
  }
  
  else {
    countNumber++;
    countNumberRemaining--;

    if (inputNum === randomNumber) {

      alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng số Ramdom!";
      alertMessage.style.color = "red";
      alertMessage.style.fontSize = "30px";
      buttonGuess.disabled = true;

    
    } else if (inputNum < randomNumber) {
      alertMessage.innerHTML = "Số bạn đoán quá nhỏ so với số Random!";
      alertMessage.style.color = "blue";

    } else {
      alertMessage.innerHTML = "Số bạn đoán quá lớn so với số Random !";
      alertMessage.style.color = "blue";
    }


    resultMessage.innerHTML += `Lần số: ${countNumber} bạn đoán là số: ${ inputNum } <br />`;
    soLuotConLai.style.color = "brown";

    soLuotConLai.innerHTML = ` Bạn còn lại ${ countNumberRemaining } lượt đoán`;
    soLuotConLai.style.color = "green";
    

    if (countNumber === 10 && countNumberRemaining === 0) {

      if (inputNum === randomNumber) {
        alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng số Ramdom!";
      } else {
        alertMessage.innerHTML = "Rất tiếc bạn đã hết lượt đoán số rồi!";
      }

      // khóa nút sau khi hết 10 lượt đoán
      buttonGuess.disabled = true;
      alertMessage.style.color = "red";
    }


  }

  numberGuessInput.value = null;
}

// Khởi động lại toàn bộ trang web
function restartButton() {
  location.reload();
}