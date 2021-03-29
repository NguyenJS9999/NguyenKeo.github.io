let moneyFrom = document.querySelector(".money-from"); // số tiền nhập vào
let MoneyTo = document.querySelector(".money-to"); // số tiền sau chuyển đổi
let fromValueUnit = document.querySelector(".type-of-unit-from");
let toValueUnit = document.querySelector(".type-of-unit-to");
// let arrowIcon = document.querySelector(".arrow-icon");
let alertMessage = document.querySelector(".alert-Message");
// let swapBtn = document.querySelector(".swap-btn");
let returnResult;
// moneyFrom.focus();

function ConvertToUnitVND(numberMoney, Moneyto) {

    if (Moneyto === "EUR") {
        returnResult = (numberMoney / 27000).toFixed(6);
    } else if (Moneyto === "USD") {
        returnResult = (numberMoney / 23000).toFixed(6);
    } else if (Moneyto === "VND") {
        returnResult = numberMoney;
    }

    return returnResult;
}

function ConvertToUnitEuro(numberMoney, Moneyto) {
    let returnResult;
    if (Moneyto === "EUR") {
        returnResult = numberMoney;
    } else if (Moneyto === "USD") {
        returnResult = ((numberMoney * 27) / 23).toFixed(4);
    } else if (Moneyto === "VND") {
        returnResult = (numberMoney * 27000).toFixed(2);
    }

    return returnResult;
}

function ConvertToUnitUSD(numberMoney, Moneyto) {
    let returnResult;
    if (Moneyto === "EUR") {
        returnResult = ((numberMoney * 23) / 27).toFixed(4);
    } else if (Moneyto === "VND") {
        returnResult = (numberMoney * 23000).toFixed(2);
    } else if (Moneyto === "USD") {
        returnResult = numberMoney;
    }
    return returnResult;
}



// Chuyển đổi tiền tệ

function convertTheMoney() {
    let fromValMoneyUnit = fromValueUnit.value;
    let Moneyto = toValueUnit.value;
    let from = moneyFrom.value;
    let to;

    if (from === "") {
        MoneyTo.value = "";
        moneyFrom.style.borderColor = "red";
        alertMessage.style.visibility = "visible";
    } else {
        moneyFrom.style.borderColor = "#404c82";
        alertMessage.style.visibility = "hidden";
        // arrowIcon.style.color = "#393b44";

        if (fromValMoneyUnit === "EUR") {
            to = ConvertToUnitEuro(from, Moneyto);
        } else if (fromValMoneyUnit === "VND") {
            to = ConvertToUnitVND(from, Moneyto);
        } else if (fromValMoneyUnit === "USD") {
            to = ConvertToUnitUSD(from, Moneyto);
        }

    }

    MoneyTo.value = to;
}

// Hoán đổi chiều chuyển đổi giữa các đơn vị tiền tệ
function swapCurrency() {
    let TypeOfunitMoney = fromValueUnit.value;
    fromValueUnit.value = toValueUnit.value;
    toValueUnit.value = TypeOfunitMoney;
}

// Reset

function resetBtn() {
    location.reload();
}