// Bài tập về nhà buổi 9 js 1 10/03/2021
console.log("Câu số 3: ")

// const namHienTai = 2021;
function theKiHienTai(namHienTai) {
    // return namHienTai % 100;
    return Math.ceil(namHienTai / 100) + 1; // Hàm làm tròn lên
}
const theki = theKiHienTai( namHienTai);
console.log("Thế kỉ hiện tại với số năm tướng ứng (có sẵn/nhập vào): ", theki);