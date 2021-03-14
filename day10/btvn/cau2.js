console.log("Câu 2:")
// Tìm năm nhuận có khi nào - là bội của 4, số năm đố chia hết cho 4
const nam = 2029;
const thang = 9;

function kieuNam(nam, thang) {
    let namThuong_Nhuan = nam % 4 == 0; // chia hết cho 4 - phần dư bằng 0
    console.log("Năm nhuận trả về phần dư = 0 là true: ", namThuong_Nhuan) // True => 1

    if (namThuong_Nhuan == true) {
        console.log(`${nam} => là năm nhuận`)
        function soNgayNamNhuan(thang) {
            if (thang == 2) {
                console.log(`Tháng ${thang} năm nhuận có số ngày là: `, 29)

            } else if (thang % 2 == 1) {
                console.log(`Tháng ${thang} là tháng lẻ có số ngày là: `, 31)
                
            } else if (thang % 2 == 0) {
                console.log(`Tháng ${thang} là tháng chẵn có số ngày là: `, 30)
         
            }
        }
        soNgayNamNhuan(thang)

    } else if (namThuong_Nhuan == false) {
        console.log(`${nam} => là năm thường - KHÔNG nhuận`)
        function soNgayNamThuong(thang) {
            if (thang == 2) {
                console.log(`Tháng ${thang} năm không nhuận có số ngày là: `, 28)

            } else if (thang % 2 == 1) {
                console.log(`Tháng ${thang} là tháng lẻ có số ngày là: `, 31)
                
            } else if (thang % 2 == 0) {
                console.log(`Tháng ${thang} là tháng chẵn có số ngày là: `, 30)
            }
        }
        soNgayNamThuong(thang)

    }

}

kieuNam(nam, thang)



// const namTraVe = neuLaNamNhuan(nam);

// let monthNow = new Date().getDay() + 1;

// Câu hỏi tại sao năm trả về là nhuận chia hết cho 4 là sẽ là == 0 mà lại vào trường hợp năm ko nhuận
// In ra hàm tra về ture là = 1 false là bằng 0