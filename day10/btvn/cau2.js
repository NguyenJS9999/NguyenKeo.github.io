console.log("Câu 2:")
// Tìm năm nhuận có khi nào - là bội của 4, số năm đố chia hết cho 4
const nam = 200;
const thang = 9;

function kieuNam(nam, thang) {
    let namNhuan = nam % 4; // chia hết cho 4 - phần dư bằng 0
    console.log("Năm nhuận trả về phần dư True=0, không nhuận là false=1 : ", namNhuan) // True => 1

    if (namNhuan === 0 || namNhuan % 100 !== 0) {
        console.log(`${nam} => là năm nhuận`)

        function soNgayNamNhuan(thang) {
            if (thang === 2) {
                console.log(`Tháng ${thang} năm không nhuận có số ngày là: `, 29)

            } else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang == 8 || thang == 10 ||thang == 12) {
                console.log(`Tháng ${thang} là tháng lẻ có số ngày là: `, 31)
                
            } else if (thang === 4 || thang === 6 || thang === 9 || thang == 11 ) {
                console.log(`Tháng ${thang} là tháng chẵn có số ngày là: `, 30)
            }
        }
        soNgayNamNhuan(thang)

    } else if (namNhuan !== 0) {
        console.log(`${nam} => là năm thường - KHÔNG nhuận`)
        function soNgayNamThuong(thang) {
            if (thang === 2) {
                console.log(`Tháng ${thang} năm không nhuận có số ngày là: `, 28)

            } else if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang == 8 || thang == 10 || thang == 12) {
                console.log(`Tháng ${thang} là tháng lẻ có số ngày là: `, 31)
                
            } else if (thang === 4 || thang === 6 || thang === 9 || thang == 11 ) {
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