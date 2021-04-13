console.log("Buổi 17")

console.log("Câu 1:")

function SUMisInteger(a, b) {

  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return "Số đầu vào không hợp lệ";
  }
  // trừ chính số đó và hai số sát nhau
  if (Math.abs(a - b) === 0 || Math.abs(a - b) === 1) { 
    return `Không cố số nào nằm giữ hai số ${a} và ${b}`
  }

  let sum = 0;

  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      console.log("i", i);
      sum = sum + i
    }
    return `Tổng các số giữa hai số ${a} và ${b} là ${sum} `
  }

  if (a > b) {
    for (let i = a - 1; i < b; i--) {
      console.log("i2", i);
      sum = sum + i;
    }
    return `Tổng các số giữa hai số ${a} và ${b} là ${sum}`
  }

}

console.log("1.", SUMisInteger( 3, 10  ));

// Câu 2:
console.log("Câu 2:")
let text = "HELLO world"

function parseString() {
  let parseIntText = text.split(" ").join("-").toLowerCase();
  console.log("parseIntText: ", parseIntText)
  return parseIntText;
}
parseString(text)

// Câu 3:
console.log("Câu 3:")
let d = new Date();
let timeNow = d.getDate();
console.log("timeNow", timeNow)

function time() {

}


// Câu 4:
console.log("Câu 4:")

function countDaysBring(h, x, y) {
  if (h <= 0 || x <= 0 || y <= 0 || x <= y) {
    return;
  }
  let day = 0;
  do {
    day++;
    if (h - x === 0) {
      h = h - x;
    } else {
      h = h - x + y;
    }
  } while (h > 0)

  return `Sau ${day} ngày ốc sên sẽ bò lên đến miệng giếng.`;
}

console.log(countDaysBring(40, 16, 8));

// câu 5:
console.log("Câu 5: Cho 1 số nguyên dương")

function sortN(n) {
  if (Number.isInteger(n) === false || n <= 0) {
    return;
  }

  let array = [];

  do {
    array.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0)

  array.sort(function (a, b) { // hàm sắp xếp số số trước lớn hơn trừ số sau
    return a - b
  });

  if (array[0] === 0) { // Nếu chỉ mục đầu là giá trị = 0  thì gán lại bằng chỉ mục trước đó
    array[0] = array[1];
    array[1] = 0;
  }

  return array.join("");
}

console.log(sortN(750993));
console.log(sortN(756993));

// Câu 6:
console.log("Câu 6:")
// let bodyall = document.querySelector(".body")
// let randomNumber = Math.floor(Math.random() * 100);
// console.log("random", randomNumber);

let maHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", ];

function changeGbColorHex() {


  let soCacSoChiMuc = maHex.length; // Lấy chỉ mục
  console.log("soCacSoChiMuc", soCacSoChiMuc)
  let mauNgauNhien = "#"; // gán dấu Thăng
  console.log(mauNgauNhien)

  for (let i = 1; i <= 6; i++) {
    let ChiMucNgauNhien = Math.floor(Math.random() * soCacSoChiMuc); // ramdom số động, hex có 6 số, lặp 6 lần: = 1 và <= 
    console.log(" ChiMucNgauNhien ", ChiMucNgauNhien)

    mauNgauNhien += maHex[ChiMucNgauNhien]; // dấu # cộng gán với số ramdom động vào vào lấy giá trị từ mảng qua index
    console.log(" mauNgauNhien ", mauNgauNhien) // Ra một mã hex hoàn chỉnh
  }
  let changeTextBtn = document.querySelector(".btn-Color-Hex"); // gọi nút - nút được gán mã hex
  console.log("changeTextBtn", changeTextBtn)

  changeTextBtn.innerText = mauNgauNhien; // Gắn mã màu vào hiển thị của nút 
  console.log("changeTextBtn", changeTextBtn)

  document.body.style.backgroundColor = mauNgauNhien; // đổ màu cho body
}