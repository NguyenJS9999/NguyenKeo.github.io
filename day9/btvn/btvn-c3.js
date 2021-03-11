// Bài tập về nhà buổi 9 js 1 10/03/2021

const namHienTai = 2021;
function theKiHienTai(namHienTai) {
    // return namHienTai % 100;
    return Math.ceil(namHienTai / 100);
}
const theki = theKiHienTai( namHienTai);
console.log(theki);