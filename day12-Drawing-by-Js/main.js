// Hai anh em nhà cừu không có gì chơi, thằng anh mới đố thằng em: “Tao cho mày 1 số, nếu nó chẵn thì chia đôi, nó lẻ thì nhân 3 cộng 1. Đố mày biết sau bao 
// nhiêu phép tính thì nó ra 1 ???”. Ông em ngẩn tò te không biết trả lời như nào. Bạn hãy giúp chú bé 1 tay với. In ra đáp án hoặc “-1” nếu ko có số nào hợp lệ.

// function checkSo(n) {
//     if (n % 2 == 0 ) {
//         console.log("So chan", n)
//         return n = n / 2
//     }
//     if (n % 2 == 1 ) {
//         console.log("So le", n)
//         return n = (n* 3) + 1
//     }
// }

"use strict";
document.write("Lam bai tap ve hinh");
document.write("<br>");
document.writeln(
  "Bài 1: Vẽ hình chữ nhật đặc có kích thước mxn (trong đó m, n > 0)"
);

function drawRectangle(m, n) {
  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    document.writeln("Thông số đầu vào không hợp lệ");
    return;
  }

  let str = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      str += "*&#32;";
    }
    str += "<br />";
  }
  console.log(str);
  document.writeln(str);
}

function drawEmptyRectangle(m, n) {
  document.writeln("<br>");
  if (
    m <= 0 ||
    n <= 0 ||
    Number.isInteger(m) === false ||
    Number.isInteger(n) === false
  ) {
    document.writeln("Thông số đầu vào không hợp lệ");
    return;
  }

  let str = "";

  // ve hang thu nhat
  for (let x = 0; x < m; x++) {
    str += "* ";
  }

  // ve cac hang o giua
  for (let i = 1; i < n - 2; i++) {
    str += "<br>";
    for (let j = 0; j < m; j++) {
      if (j === 0 || j === m - 1) {
        str += "* ";
      } else {
        str += "* ".fontcolor("red");
      }
    }
  }

  // ve hang cuoi
  str += "<br>"
  for (let x = 0; x < m; x++) {
    str += "* ";
  }
  document.writeln(str);
}

drawEmptyRectangle(6, 5);
