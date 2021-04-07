console.log("Buổi 18: Dom Calculator")

//Calculator:
let display = document.querySelector(".calculation");
let result = document.querySelector(".result-number");

// let zero = parseInt (document.getElementsByClassName("zero")[0].textContent);

// let one = parseInt (document.getElementsByClassName("one")[0].textContent);
// let two = parseInt (document.getElementsByClassName("two")[0].textContent);
// let three = parseInt (document.getElementsByClassName("three")[0].textContent);
// let four = parseInt (document.getElementsByClassName("four")[0].textContent);
// let five = parseInt (document.getElementsByClassName("five")[0].textContent);
// let six = parseInt (document.getElementsByClassName("six")[0].textContent);
// let seven = parseInt (document.getElementsByClassName("seven")[0].textContent);
// let eight = parseInt (document.getElementsByClassName("eight")[0].textContent);
// let nine = parseInt (document.getElementsByClassName("nine")[0].textContent);
// let add =  (document.getElementsByClassName("add")[0].textContent);


// console.log( zero)
// console.log( one)
// console.log( two)
// console.log( three)
// console.log( four)
// console.log( five)
// console.log( six)
// console.log( seven)
// console.log( eight)
// console.log( nine)
// console.log(typeof add)

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
    // console.log(typeof display, display.innerHTML)

} //input

// Nút = chạy hàm xử lý kết quả
function calculate() {
    // Giá trị từ ô input nhập vào
    let calc = display.innerHTML;
    console.log(typeof calc, calc)
    // Kết quả trả về
    results_returned = eval(calc);
    console.log("Kết quả trả về: ", typeof results_returned, results_returned)  
    // Gán lại vào màn hiện kết quả
    result.innerHTML = "=" + results_returned

    // result.innerHTML = results_returned;
}

// Tính giai thừa
function giaiThua () {
    giaTri = Number( display );
    tich = 1;
    for (let i = 1; i >=  display ; i++) {
        tich *= i;
    } 
    result = tich
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
    // document.querySelector(".reset").innerText = "AC";
}



