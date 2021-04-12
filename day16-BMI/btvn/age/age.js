let inputAge = document.querySelector(".age-input");
let CalculateButton = document.querySelector(".calculator-button");
let publicMessage = document.querySelector(".notification-message");

function AgeCalculation() {
  let  YearOfBirth  = parseInt(inputAge.value);
  console.log(typeof  YearOfBirth  )

  let timeNow = new Date();
  let  TheCurrentYear  = timeNow.getFullYear();

  if ( YearOfBirth  < 0 || Number.isInteger( YearOfBirth ) === false ) {
    publicMessage.innerText = "Số năm sinh nhập vào không hợp lệ!";
    publicMessage.style.fontSize = "20px";
    publicMessage.style.color = "#fa0536";
  } 
  else if ( YearOfBirth  < 1900 ||  YearOfBirth  >  TheCurrentYear ) {
    publicMessage.innerText = "Vui lòng nhập năm sinh trong khoảng cho phép từ năm 1900 đến năm" +  TheCurrentYear  + "!";
    publicMessage.style.fontSize = "20px";
    publicMessage.style.color = "#ff0000";
  } 
  else {
    let ageNumber =  TheCurrentYear  -  YearOfBirth ;
    publicMessage.innerText = "Năm nay bạn đã " + ageNumber + " tuổi rồi.";
    publicMessage.style.fontSize = "20px";
    publicMessage.style.color = "inherit";
    publicMessage.style.fontWeight = "900";
  }
}

function resetPage() {
  location.reload();
}
