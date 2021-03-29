let fromAmount = document.querySelector(".from-amount");
let toAmount = document.querySelector(".to-amount");
let fromValueUnit = document.querySelector(".from-unit");
let toValueUnit = document.querySelector(".to-unit");
// let arrowIcon = document.querySelector(".arrow-icon");
let alertMessage = document.querySelector(".alert-Message");
// let swapBtn = document.querySelector(".swap-btn");

// fromAmount.focus();

function ConvertToUnitVND(numberMoney, toCur) {
    let result;
    if (toCur === "usd") {
      result = (numberMoney / 23000).toFixed(6);
    } else if (toCur === "eur") {
      result = (numberMoney / 27000).toFixed(6);
    } else if (toCur === "vnd") {
      result = numberMoney;
    }
    return result;
  }

function ConvertToUnitUSD(numberMoney, toCur) {
  let result;
  if (toCur === "vnd") {
    result = (numberMoney * 23000).toFixed(2);
  } else if (toCur === "eur") {
    result = ((numberMoney * 23) / 27).toFixed(4);
  } else if (toCur === "usd") {
    result = numberMoney;
  }
  return result;
}



function ConvertToUnitEuro(numberMoney, toCur) {
  let result;
  if (toCur === "usd") {
    result = ((numberMoney * 27) / 23).toFixed(4);
  } else if (toCur === "vnd") {
    result = (numberMoney * 27000).toFixed(2);
  } else if (toCur === "eur") {
    result = numberMoney;
  }
  return result;
}

// Chuyển đổi tiền tệ

function convertTheMoney() {
  let fromCur = fromValueUnit.value;
  let toCur = toValueUnit.value;
  let from = fromAmount.value;
  let to;

  if (from === "") {
    alertMessage.style.visibility = "visible";
    fromAmount.style.borderColor = "#ec0101";
    toAmount.value = "";
  } else {
    alertMessage.style.visibility = "hidden";
    fromAmount.style.borderColor = "#393b44";
    // arrowIcon.style.color = "#393b44";

    if (fromCur === "usd") {
      to = ConvertToUnitUSD(from, toCur);
    } else if (fromCur === "vnd") {
      to = ConvertToUnitVND(from, toCur);
    } else if (fromCur === "eur") {
      to = ConvertToUnitEuro(from, toCur);
    }
  }

  toAmount.value = to;
}

// Hoán đổi đơn vị tiền tệ

function swapCurrency() {
  let TypeOfunitMoney = fromValueUnit.value;
  fromValueUnit.value = toValueUnit.value;
  TypeOfunitMoney =  toValueUnit.value;
}

// Reset

function resetBtn() {
  location.reload();
}
