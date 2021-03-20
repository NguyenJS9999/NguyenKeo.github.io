document.write("Câu 1: <br><br><br><br><br>")

function tinhToan_Dem(n) {
  // check n là số nguyên
  if (Number.isInteger(n) === false) {
    return;
  }
  // check n là số dương lơn hơn 0 mới chạy
  if (n <= 0) {
    return -1;
  }

  let countNumber  = 0;

  if (n === 1) {
    countNumber ++;
    n = n * 3 + 1;
  }

  do {
    if (n % 2 === 0) {
      countNumber ++;
      n /= 2;
    } else {
      countNumber ++;
      n = n * 3 + 1;
    }
  } while (n > 1);

  if (countNumber ) {
    return countNumber ;
  }
  return -1;
}

console.log(tinhToan_Dem(6));
document.write("Số đến là: ", tinhToan_Dem(6))

document.write("<br>")
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

document.write("<br>")
// 
document.write("Câu 4: <br>")

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
document.write("<br>")
// 
document.write("Câu 5: <br><br>")

function isoscelesTriangleInverse(h, a) {
  if (h <= 0 || Number.isInteger(h) === false) {
    return
  }

  for (let i = 0; i <= h; i++) {
    document.write(i)
    for (var x = 0; x < i; x++) {
      document.write("&nbsp;");
    }

    for (let j = 7; j >= i; j--) {
      document.write("* ")


    }
    document.write("<br><br>")
  }



}

isoscelesTriangleInverse(4, 7)
document.write("<br><br><br><br>")

function drawIsoTriangle(h) {
  document.writeln("<br /><br />");

  if (h <= 0 || Number.isInteger(h) === false) {
    return "Thông số đầu vào không hợp lệ";
  }

  let str = "";

  // Tìm độ dài đáy của tam giác cân có chiều cao h:
  let b = h * 2 - 1;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < b; j++) {
      if (j < i || j > b - 1 - i) {
        str += "*&nbsp&nbsp".fontcolor("white");
      } else {
        str += "*&nbsp&nbsp";
      }
    }

    str += "<br /><br />";
  }

  document.writeln(str);
}

drawIsoTriangle(4);