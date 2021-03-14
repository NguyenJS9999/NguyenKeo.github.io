// 3. Tính tổng các chữ số trong 1 số nguyên dương.
console.log("Câu 3:")

const soNguyenDuong = 123

function congTong(soNguyenDuong) {
    if (soNguyenDuong <= 0) {
      return;
    }
  
    let tong = 0;
  
    while (soNguyenDuong > 0) {
        // Cộng rồi gán lại

        tong += soNguyenDuong % 10;
        soNguyenDuong = Math.floor(soNguyenDuong / 10);
        console.log(soNguyenDuong)

    }
    return tong;
  }
  
  console.log("Tổng số mỗi chữ số của 1 số nguyên là: ", congTong(soNguyenDuong));
;