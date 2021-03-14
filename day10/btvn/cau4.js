console.log("Câu 4:")

const chuoi = "Tôi học lớp web14"

function inChuoi(chuoi) {
    let doDaiChuoi = chuoi.length
    if (doDaiChuoi > 10) {
        let inChuoi = chuoi.substr(0, 10)
        console.log("In ra chuỗi kí tự hơn 10 chữ: ", inChuoi, "...")
    } else if (doDaiChuoi <= 10) {
        let inChuoi = chuoi
        console.log("In ra chuỗi kí tự <= 10 chữ: ", inChuoi)

    }
}
inChuoi(chuoi)