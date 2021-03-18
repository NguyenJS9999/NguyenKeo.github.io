// Câu 1:
console.log("Câu 1:")

function checkSoHoanHao(a) {
    let tongCacUocSo = 0;
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            tongCacUocSo += i;
            console.log(i);
        }
    }
    if (tongCacUocSo === a) {
        console.log(`${a} Là số hoàn hảo`)
        return true;
    }
    return false;
}

function inRaSoHoanHao(n) {
    for (let i = 1; i <= n; i++) {
        if (checkSoHoanHao(i) === true) {
            console.log(i);
        }
    }
}
inRaSoHoanHao()
// Câu 2:
console.log("Câu 2:")
// let numbers_N = [-1, -2, -4, 6, -8, 0, 1, 2, 4, 9, 10, 66]
// Cách 1:
// function find_min_max(numbers_N) {
//     var maxInNumbers = Math.max.apply(Math, numbers_N);
//     var minInNumbers = Math.min.apply(Math, numbers_N);
//     console.log("Giá trị lớn nhất là: " + maxInNumbers);
//     console.log("Giá trị nhỏ nhất là: " + minInNumbers);
// }
// find_min_max(numbers_N)

function MaxMin(array) {
    let minNumber = array[0];
    let maxNumer = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minNumber > array[i]) {
            minNumber = array[i];
        }
        if (maxNumer < array[i]) {
            maxNumer = array[i];
        }


    }
    console.log("Số lớn nhất là: ", maxNumer);
    console.log("Số nhỏ nhất là: ", minNumber);
}
MaxMin([8, -10, -2, 2, -3, 3, 0, -4, 4, -5, 5, -6, 6])
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
var arrayN = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// Trả về vị trí đầu tiên của số lẻ trong mảng
function dau_soLe(arrayN) {
    for (let i in arrayN) {
        if (arrayN[i] % 2 === 1 || arrayN[i] % 2 === -1) {
            return `Lẻ Index: ${i} - value: ${arrayN[i]}`;
        }
    }
}

// Trả về vị trí cuối cùng của số chắn trong mảng
function cuoi_SoChan(arrayN) {
    for (let i = arrayN.length - 1; i >= 0; i--) {
        if (arrayN[i] % 2 === 0) {
            return `Chẵn Index: ${i} - value: ${arrayN[i]}`;
        }
    }
}
console.log( dau_soLe(arrayN)  )
console.log( cuoi_SoChan(arrayN) )

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