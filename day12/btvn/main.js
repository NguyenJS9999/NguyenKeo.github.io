// 1. Hai anh em nhà cừu không có gì chơi, thằng anh mới đố thằng em: “Tao cho mày 1 số, nếu nó chẵn thì chia đôi, nó lẻ thì nhân 3 cộng 1. Đố mày biết sau bao nhiêu phép tính thì nó ra 1 ???”. Ông em ngẩn tò te không biết trả lời như nào. Bạn hãy giúp chú bé 1 tay với. In ra đáp án hoặc “-1” nếu ko có số nào hợp lệ.
document.write("Câu 1: <br>")
let n = 8;
function tinhToan_Dem(n) {
  // kiểm tra n là số dương lơn hơn 0 mới chạy
  if (n <= 0) {
    return -1;
  }
  // kiểm tra n là số nguyên
  if (Number.isInteger(n) === false) {
    return;
  }
  // biến đếm xuất phát = 0 
  let countNumber = 0;
  // Cách 1: dùng vòng lặp while
  while (n > 1)   {
    if (n % 2 === 0) {
      // countNumber++;
      n = n / 2;
    } else if (n % 2 !== 0) {
      // countNumber++;
      n = (n * 3) + 1;
    }
    countNumber++;
  }
  // Cách 2: Dùng vòng lặp   do while
  // do {
  //   if (n % 2 === 0) {
  //     countNumber ++;
  //     n /= 2;
  //   } else { 

  //     countNumber ++;
  //     n = n * 3 + 1;
  //   }
  // } while (n > 1);

  if (countNumber === countNumber) {
    return countNumber;
  } else {
    return -1;
  }
}
document.write("Sau ", tinhToan_Dem(n), ` phép tính thì số ${n} sẽ còn lại = 1`, "<br>")
// 
document.write("Câu 2: <br>")
// m(rộng) ngang trai-phai, n (cao)dọc trên-dưới
function Rectangle(m, n) {
  if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
    return
  }
  var space = ""
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      space += "* ".fontcolor("brown");
    }
    space += ("<br><br>")
  }
  document.write(space)
}

Rectangle(7, 4)
document.write("<br>")
// 
document.write("Câu 3: <br>")

function drawEmptyRectangle(m, n) {
  if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === 0) {
    document.writeln("Thông số đầu vào không hợp lệ");
    return;
  }

  let str = "";
  // Vẽ hàng thứ nhất trước:
  for (let x = 0; x < m; x++) {
    str += "*  ".fontcolor("brown");
  }
  // Vẽ các hàng ở giữa có phần trống:
  // - từ tọa độ 1 vs trừ 2 đầu mút vẽ khoảng giữa
  for (let i = 0; i < n - 1; i++) {
    str += "<br><br>";
    for (let j = 0; j < m; j++) {
      if (j === 0 || j === m - 1) {
        str += "*  ".fontcolor("brown");
      } else {
        str += "*  ".fontcolor("white");
      }
    }
  }
  // Vẽ hàng cuối sau:
  str += "<br><br>"
  for (let y = 0; y < m; y++) {
    str += "*  ".fontcolor("brown");
  }
  document.writeln(str);
}
drawEmptyRectangle(7, 4);
// ///////////////////////////////
document.write("<br>Câu 4: <br>") // Vẽ tam giác vuông
function drawRightTriangle(h) {
  if (h <= 0 || Number.isInteger(h) === false) {
    document.writeln("Thông số đầu vào không hợp lệ");
    return;
  }

  for (i = 0; i < h; i++) {
    for (j = 0; j <= i; j++) {
      document.writeln(" * ".fontcolor("brown"));
    }
    document.writeln("<br><br><br>");
  }
}
drawRightTriangle(5)
// ///////////////////////////////
document.write("<br>Câu 5: <br>")

function isoscelesTriangleInverse(h) {
  if (h <= 0 || Number.isInteger(h) === false) {
    return "Thông số đầu vào không hợp lệ";
  }
  let string = "";
  // Định nghĩa độ dài đáy cho tam giác cân có chiều cao h - chiều cao là 4 => x2 - 1 = cạnh đáy a = 7
  let a = h * 2 - 1;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < a; j++) {

      if (j < i || j > a - 1 - i) {
        string += "*  ".fontcolor("white");
      } 
      else {
        string += "*  ".fontcolor("brown");
      }
    }

    string += "<br /><br />";
  }
  document.writeln(string);
}
isoscelesTriangleInverse(4) 
////////////////////////////////////////////////////////////////
