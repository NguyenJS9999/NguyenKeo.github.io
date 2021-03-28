console.log("Chuyển đổi tiền tệ")
function test() {
    let selectFrom = document.getElementById("from");
    let result = selectFrom.Value;
    console.log(result);
}

function quiDoiTienTe() {
    let moneyInput = document.getElementById("number").value;
    let donViTienTeFrom = document.getElementById("form").value;
    let donViTienTeTo = document.getElementById("to").value;
    let moneyOutput = document.getElementById("output");
    console.log(moneyOutput)

    moneyInput.innerHTML = `${chuyenDoi(donViTienTeFrom, donViTienTeTo, moneyInput)} ${donViTienTeTo}`
}

function chuyenDoi (currencyFrom, curencyTo, money) {

    if (donViTienTeFrom ==="USD" && donViTienTeTo === "VND") {
        moneyOutput.innerHTML = `${moneyInput*23000} ${donViTienTeTo}`;
    }
    if (donViTienTeFrom ==="EUR" && donViTienTeTo === "VND") {
        moneyOutput.innerHTML = `${moneyInput*27000} ${donViTienTeTo}`;
    }
}