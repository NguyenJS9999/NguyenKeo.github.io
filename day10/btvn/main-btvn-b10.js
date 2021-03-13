//  Bài tập về nhà buổi 10(12/3/2021) if else và switch case
function tinhTong() {
    var timeNow = new Date();
    console.log("Ngày Tháng Năm hiện tại là: ",timeNow);
    // Lấy ra tháng thiện tại
    var monthNow = timeNow.getMonth() + 1;
    console.log("Số tháng hiện tại là: ",monthNow)

}
tinhTong();