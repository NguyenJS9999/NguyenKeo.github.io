// Bài tập về nhà buổi 9 js 1 10/03/2021
console.log("Câu số 3: ")

const namHienTai = 2021;
function theKiHienTai(namHienTai) {
    // return namHienTai % 100;
    // dùng Math.floor
    //return Math.floor((namHienTai-1) /100 ) + 1; // C1
    return Math.ceil(namHienTai / 100); // C2 Hàm làm tròn lên

}
const theki = theKiHienTai(namHienTai);
console.log("Thế kỉ hiện tại với số năm tướng ứng (có sẵn/nhập vào): ", theki);