console.log("Buổi 18: Dom Calculator")

//Calculator:
let display = document.querySelector(".calculation");
let result = document.querySelector(".result-number");
let giaTri = "";

// Input of Validate
function input(value) {
    // Loại bỏ số 0 khi nhập vào
    if (display.innerHTML === "0") {
        display.innerHTML = "";
        // Kiểm tra kí tự nhập vào vô tích đầu nhập vào đưa về kí tự 0
        if (value == "0" || value == ".") {
            value = "0";
        }
        if (value == "+" || value == "-" || value == "*" || value == "/") {
            value = "0" + value;
        }
    }

    display.innerHTML += value;
    giaTri += value;
    console.log("giaTri", typeof display, display.innerHTML)
    console.log("giaTri", typeof giaTri, giaTri.innerHTML)

} //input


// 1 Tính lấy dư %

// Tính Căn bậc 2
function canBacHai() {
    let cbHai = giaTri.innerHTML;
    console.log(cbHai)

    result.innerHTML = Math.sqrt(cbHai)

    result.innerHTML = String(cbHai.toLocaleString('en-US'));
}

// Tính bình thương
function binhPhuong() {

}

// Tính giai thừa
function giaiThua() {
    display.innerHTML += "!";
    console.log("giaTri", giaTri)
    giaTri = Number(giaTri);
    let tich = 1;
    for (let i = 1; i <= giaTri; i++) {
      tich *= i;
    }
    giaTri = String(tich);

}


// Nút = chạy hàm xử lý kết quả 
function calculate() {
    // Tính giai thừa
    // display.innerHTML = Array(display.innerHTML).pop()
    console.log("display",display.innerHTML)
    console.log("giaTri",giaTri.innerHTML)





    // Giá trị từ ô input nhập vào
    let calc = giaTri;
    console.log("Phép tính đầu vào", typeof calc, calc)
    // Kết quả trả về
    results_returned = eval(calc);
    console.log("Kết quả trả về: ", typeof results_returned, results_returned)
    // Gán lại vào màn hiện kết quả
    result.innerHTML = "= " + results_returned

}

// Xóa từng phần tử cuối chuỗi
function del() {
    display.innerHTML = display.innerHTML.slice(0, -1)

    // Chuyển chuỗi thành mảng và bỏ ký tự cuối
    var arrText = Array.from(display.innerHTML);
    arrText.splice(arrText.length - 1, 1);

    // Nếu mảng vẫn còn giá trị thì nối lại thành chuỗi
    if (arrText.length != 0)
        display.innerHTML = arrText.join("");
    // Nếu không thì hiển thị số 0
    else
        display.innerHTML = "0";

}

// Xóa hết-chuyển màn hình về rỗng
function reset() {
    display.innerHTML = "0";
    result.innerHTML = ""
}

// let btnAC = document.querySelector(".butonAC")
// btnAC = addEventListener("click", AC)
// function AC() {
//     display.innerHTML = "0";
//     result.innerHTML = "";
// }