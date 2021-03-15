// bai 1 Chữa bài buổi 10 15/03/2021
function thang() {
  var date = new Date();
  console.log(date.getDate());
  var m = date.getMonth() + 1;
  if (m < 1 || m > 12) {
    return;
  }
  if (m <= 3) {
    return `Thang ${m} la mua xuan`;
  } else if (m <= 7) {
    return `Thang ${m} la mua he`;
  } else if (m <= 9) {
    return `Thang ${m} la mua thu`;
  } else if (m <= 12) {
    return `Thang ${m} la mua xuan`;
  }
}

// bài 2: 
function DateCount(m, y) {
  if (m < 1 || m > 12 || y < 1) {
    return `Không hợp lệ`;
  }

  if (m === 4 || m === 6 || m === 9 || m === 11) {
    return `Thang ${m} nam ${y} co 30 ngay`;

  } else if (m === 2) {
    //
    if (NamNhuan(y)) {
      return `Thang 2 nam ${y} co 29 ngay`

    } else {
      return `Thang 2 nam ${y} co 28 ngay`;
    }
    //
  } else {
    return `Thang ${m} nam ${y} co 31 ngay`
  }
}

function NamNhuan(y) {
  if (y % 4 === 0 && y % 100 !== 0) {
    return true;
  } else if (y % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function kiemTraNamNhuan(y) {
  if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
    return true;
  }
  return false
}
// Chỉnh lại code anh Thịnh
function DateCount2(m, y) {
  if (m < 1 || m > 12 || y < 1) {
    return `Không hợp lệ`;
  }

  if (m === 4 || m === 6 || m === 9 || m === 11) {
    return `Thang ${m} nam ${y} co 30 ngay`;

  } else if (m === 2) {
    return kiemTraNamNhuan(y) ?
      `Thang ${m} nam ${y} co 29 ngay` :
      `Thang ${m} nam ${y} co 28 ngay`;

  } else {
    return `Thang ${m} nam ${y} co 31 ngay`
  }
}

// Câu 4:
function catchuoi(n) {
  let x = n.length;
  let y = n.substring(0, 10);
  if (x > 10) {
    return `${y}...`;
  } else {
    return `${y}`
  }
}
// Câu 5:
function translate(text) {
  if (typeof text != "string") {
    return "xin chào";
  }

  if (text === "French") {
    return "Borjou"
  } else if (text === "Hawaiian") {
    return "aloha"
  } else if (text === "Germany") {
    return "Hallo"
  } else if (text === "Italy") {
    return "Ciao"
  } else if (text === "Croatia") {
    return "zdravo"
  } else {
    "xin chào :)"
  }

}
// Bạn văn
function translate(language) {
  let x = String(language)
  switch (x) {
    case "French":
      console.log("Borjou");
      break;

    case "Hawaiian":
      console.log("aloha");
      break;

    case "Italy":
      console.log("Ciao");
      break;

    case "Croatia":
      console.log("zdravo");
      break;

    default:
      console.log("Xin chào");
      break;

  }
}