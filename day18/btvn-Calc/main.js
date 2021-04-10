console.log("Buổi 18: Dom Calculator")

//Calculator:
let display = document.querySelector(".calculation");
let result = document.querySelector(".result-number");
let giaTri = "";

// Input of Validate
function input(value) {
    // Loại bỏ số 0 khi nhập vào
    // if (display.innerHTML === "0") {
    //     display.innerHTML = "";
    //     // Kiểm tra kí tự nhập vào vô ích đầu nhập vào đưa về kí tự 0
    //     if (value == "0" || value == ".") {
    //         value = "0";
    //     }
    //     if (value == "+" || value == "-" || value == "*" || value == "/") {
    //         value = "0" + value;
    //     }
    // }

    display.innerHTML += value;
    giaTri += value;
    console.log("Đầu vào display", typeof display, display.innerHTML)
    console.log("Đầu vào giaTri", typeof giaTri, giaTri)

} //input


// 1 Tính % - chia cho 100 %
function chiaMotTram() {
    display.innerHTML += "%"
    giaTri = giaTri / 100;
    result.innerHTML = giaTri;
}

// 2 Tính Căn bậc 2
function canBacHai() {
    display.innerHTML += "√";
    giaTri += "√";
}

// 3 Tính bình thương
function binhPhuong() {
    display.innerHTML += "<span><sup>2</sup></p>"
    giaTri += "^";
}

// 4 Tính giai thừa
function giaiThua() {
    display.innerHTML += "!";
    console.log("giaTri giaiThua", giaTri)
    giaTri = Number(giaTri);
    let tich = 1;
    for (let i = 1; i <= giaTri; i++) {
        tich *= i;
    }
    giaTri = String(tich);

}
// 5 Mũ 3
function muBa() {
    display.innerHTML += "<span><sup>3</sup></p>"
    giaTri += "^3";
}
// Nút = chạy hàm xử lý kết quả 
function calculate() {
    console.log("= display", display.innerHTML)
    console.log("= giaTri", giaTri)

    // Căn bậc 2 - Nếu cắt lấy ra mà có √
    if (giaTri.slice(0, 1) === "√") { 
        // Cắt lấy ra để tính
        giaTri = giaTri.slice(1, giaTri.length);
        console.log("giaTri sau cắt cbh", giaTri)

        // gán lại số cho biến giaTri
        giaTri = Math.sqrt(Number(giaTri))
    }

    // Bình phương
    else if (giaTri.slice(giaTri.length - 1, giaTri.length) === "^") {
        giaTri = giaTri.slice(0 ,giaTri.length - 1);
        console.log("giaTri sau cắt bp", giaTri)
        giaTri = giaTri * giaTri
    }
    // Mũ ba
    else if (giaTri.slice(giaTri.length - 2, giaTri.length) === "^3") {
        giaTri = giaTri.slice(0 ,giaTri.length - 2);
        console.log("giaTri sau cắt bp", giaTri)
        giaTri = giaTri * giaTri * giaTri
    }

    // Giá trị từ ô input nhập vào
    let calc = giaTri;
    console.log("Phép tính đầu vào", typeof calc, calc)

    // Kết quả trả về
    results_returned = eval(calc);
    console.log("Kết quả trả về: ", typeof results_returned, results_returned)

    // Gán lại vào màn hiện kết quả lên màn hình
    result.innerHTML = "= " + results_returned.toLocaleString("vi-VN");
}

// Xóa từng phần tử cuối chuỗi
function del() {
    display.innerHTML = display.innerHTML.slice(0, -1);
    giaTri = giaTri.slice(0, -1)
}

// Xóa hết-chuyển màn hình về rỗng
function reset() {
    window.location.reload() 
    display.innerHTML = "0";
    giaTri.innerHTML = "";
    result.innerHTML = "";
}

// let btnAC = document.querySelector(".butonAC")
// btnAC = addEventListener("click", AC)
// function AC() {
//     display.innerHTML = "0";
//     result.innerHTML = "";
// }