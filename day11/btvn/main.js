// Câu 1: 
console.log("Câu 1:")

// Câu 2:
console.log("Câu 2:")
let numbers_N = [-1, -2, -4, 6, -8, 0, 1, 2, 4, 9, 10, 66]


function find_min_max(numbers_N) {
    var maxInNumbers = Math.max.apply(Math, numbers_N);
    var minInNumbers = Math.min.apply(Math, numbers_N);
    console.log("Giá trị lớn nhất là: " + maxInNumbers);
    console.log("Giá trị nhỏ nhất là: " + minInNumbers);
}
find_min_max(numbers_N)

// Câu 3: 
console.log("Câu 3:")

var array_n = [-1, -22, -4, 6, -8, 0, 1, 22, 34, 9, 100, 66];

function sort_Array() {
    // Sắp xếp từ lớn đến bé theo chiều tự nhiên của hàm sort
    let n_sort_min_max = array_n.sort(function (a, b) {
        return a - b
    });
    console.log("Min-Max", n_sort_min_max);
    // Sắp xếp ngược lại thứ tự của hàm sort - lớn đến bé
    n_reverse = n_sort_min_max.reverse()
    // In ra vị trí hiển thị sau khi hàm sắp xếp từ vị trí 1 là số lớn thứ 2
    return n_reverse[1]
}
console.log("Số lớn thứ 2 trong mảng số nguyên bất kì là :", sort_Array(array_n))

// Câu 4:
console.log("Câu 4:")


// Câu 5:
console.log("Câu 5:")
let text = "HelLo"

function reverse_string(text) {
    var newString = "";
    for (var i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    return newString;
}
console.log("Chuỗi kí tự đảo ngược sẽ là: ", reverse_string(text))

// function sort_text_reverse(text) {
//     var splitText = text.split();
//     console.log(splitText)

//     var reverse_text = split_text.reverse();
//     console.log(reverse_text)

//     var john_text = reverse_text.join();
//     // return john_text;
//     console.log("john_text", john_text)
// }
// sort_text_reverse(text)

// Câu 6:
console.log("Câu 6:")

var array_n = [-1, 1, -2, 2, -3, 3, 0, -4, 4, -5, 5, -6, 6];
// [-1, -22, -4, 6, -8, 0, 1, 22, 34, 9, 100, 66];

function n_sort_min_max(array_n) {
    var a = array_n.sort(function (a, b) {
        return a - b
    });
    console.log("Sắp xếp số cá số nguyên theo thứ tự(tự nhiên) Tăng dần: " + a);
    var b = a.reverse()
    console.log("Sắp xếp số cá số nguyên theo thứ tự(tự nhiên) Giảm dần: " + a);

}
n_sort_min_max(array_n)

function n_sort_minTOmax2(array_n) {
    for (var i = array_n.length - 1; i >= 0; i--) {
        // console.log(array_n[i]);
    }
}
n_sort_minTOmax2(array_n)

// function n_sort_maxTOmin2(array_n) {
//     for (var i = 0; i = array_n.length; i++) {
//         console.log(array_n[i]);
//     }
// }
// n_sort_maxTOmin2(array_n)

// for (let value of array_n) {
//     console.log("Sắp xếp tắng dần", array_n[value])
//     return value;
// }