// str = str.replace('world', 'techmaster').toLowerCase();
// console.log(str);
// function first() {
// return number += 10;

// }

// console.log(first())


// _nvar = 1;
// console.log("in ra", _invar )
// var аrr = [];
// аrr[0] = "А";
// аrr[1] = "B";
// аrr[2] = "C";

// console.log(аrr.join(" - "))

// const a = 0.1;
// const b = 0.2;
// const c = 0.3;

// console.log(a + b === c)

var person = {
    name: "Tèo",
    age: 10,
    run: function () {
        console.log("running");
    }
}

var number;
number = 1;
number ++;
number += 10;

console.log(number);

var person = {
    age: 1,
    name: "number_guess"

}

console.log(person);

document.getElementById("test")

style.position

// Màn hình
var screen = document.querySelector(".input");

// Các nút trên bàn phím
var items = Array.from(document.querySelectorAll(".item"));

// Lặp qua các nút
items.forEach(function (btn) {
    // Gán sự kiện vào nút
    btn.addEventListener("click", function () {
        // Nếu màn hình đang là số 0 thì cho về rỗng
        if (screen.innerHTML == "0")
            screen.innerHTML = "";

        // Nếu mà bấm vào nút AC thì màn hình hiển thị số 0
        if (btn.innerHTML == "AC")
            screen.innerHTML = "0";

        // Nếu mà bấm vào nút Del
        else if (btn.innerHTML == "Del") {
            // Chuyển chuỗi thành mảng và bỏ ký tự cuối
            var arrText = Array.from(screen.innerHTML);
            arrText.splice(arrText.length - 1, 1);
            
            // Nếu mảng vẫn còn giá trị thì nối lại thành chuỗi
            if (arrText.length != 0)
                screen.innerHTML = arrText.join("");
            // Nếu không thì hiển thị số 0
            else
                screen.innerHTML = "0";
        }
        // Nếu bấm vào nút =
        else if (btn.innerHTML == "=") {
            // Dùng hàm eval để tính giá trị trên màn hình và hiển thị lại kết quả
            screen.innerHTML = eval(screen.innerHTML);
        }

        // Lấy nội dung của nút nối vào chuỗi màn hình
        else screen.innerHTML += btn.innerHTML;
    })

})