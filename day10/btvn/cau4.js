console.log("Câu 4:")

// const chuoi = "Tôi học"

function catChuoi(chuoi) {
    let doDaiChuoi = chuoi.length;
    
    if (doDaiChuoi > 10) {
        let inChuoi = chuoi.substr(0, 10)
        console.log("In ra chuỗi kí tự > 10 chữ: ", inChuoi, "...")
    } else if (doDaiChuoi <= 10) {
        let inChuoi = chuoi
        console.log("In ra chuỗi kí tự <= 10 chữ: ", inChuoi)

    }
}
catChuoi("12345678910");