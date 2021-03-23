// Câu 1:
console.log("Câu 1:")

function checkSoHoanHao(a) {
    let tongCacUocSo = 0;
    // Các ước ố hoàn hảo nằm ở nừa đầu của số nhập vào => /2
    for (let i = 1; i <= a / 2; i++) {
        if (a % i === 0) {
            tongCacUocSo += i;
            // console.log(i);
        }
    }
    if (tongCacUocSo === a) {
        console.log(`${a} Là số hoàn hảo`)
        return true;
    }
    return false;
}
// quét các số hoàn hảo trả về để in ra
function inRaSoHoanHao(n) {
    for (let i = 1; i <= n; i++) {
        if (checkSoHoanHao(i) === true) {
            console.log(i);
        }
    }
}
inRaSoHoanHao(8128)
// 6 28 496 8128
//Câu 2:
console.log("Câu 2:")
// console.log("Cách 1: Dùng Hàm")// Cách 1: Dùng hàm có sẵn
// let numbers_N = [-1, -2, -4, 6, -8, 0, 1, 2, 4, 9, 10, 66]
// function find_min_max(numbers_N) {
//     var maxInNumbers = Math.max.apply(Math, numbers_N);
//     var minInNumbers = Math.min.apply(Math, numbers_N);
//     console.log("Giá trị lớn nhất là: " + maxInNumbers);
//     console.log("Giá trị nhỏ nhất là: " + minInNumbers);
// }
// find_min_max(numbers_N)
console.log("Cách 2: vòng for") // Cách 2: dùng vòng lặp
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
MaxMin([8, -1, -2, 2, -3, 3, 0, -4, 4, -5, 5, -6, 6])
console.log("Cách 3: for in") // Cách 3: Dùng vòng lặp for in
// Tìm số nhỏ nhất trong mảng các số nguyên
function soNhoNhat(arraY) {
    let Nmin = arraY[0]; // xuất phát từ bé nhất 

    for (let item of arraY) {
        if (item < Nmin) {
            Nmin = item;
            // console.log("arraY[i]", arraY[i])
        }
    }
    return Nmin;
}

// Tìm số lớn nhất trong mảng các số nguyên
function soLonNhat(arraY) {
    let N_max = arraY[0];
    for (let i in arraY) {
        if (arraY[i] > N_max) { // lấy ra các số
            N_max = arraY[i]; // Quét qua mảng số nào lớn hơn số trước thì gán lại
            // console.log("arraY[i]", arraY[i])
        }
    }
    return N_max;
}

let arraY = [14, -43, 239, 27, -110, 15, 315, 116, -322, -243];

console.log("Số nhỏ nhất: ", soNhoNhat(arraY));
console.log("Số lớn nhất: ", soLonNhat(arraY));

// Câu 3: 
console.log("Câu 3: Cách 1")
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

console.log("Câu 3: Cách 2");
function soLonNhat(array_n) {
    let max = array_n[0];
  
    for (let i in array_n) {
      if (array_n[i] > max) {
        max = array_n[i];
      }
    }
    return max;
  }

function soLonThuHai(array_n) {
    let secondMax = array_n[0];

    for (let i in array_n) {
        if (array_n[i] < soLonNhat(array_n) && array_n[i] > secondMax) {
            secondMax = array_n[i];
        }
    }
    return secondMax;
}
console.log("Số lớn thứ 2 trong mảng cho trước là: ",soLonThuHai(array_n));


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
console.log(dau_soLe(arrayN))
console.log(cuoi_SoChan(arrayN))

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