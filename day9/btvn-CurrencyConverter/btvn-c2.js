// Bài tập về nhà buổi 9 js 1 10/03/2021
console.log("Câu số 2: ")
// Viết hàm chuyển đổi tiền tệ: chuyển đổi từ USD, Euro sang VNĐ và ngược lại 
console.log("Js runed")
// Câu 1:

// Câu 2: 1USD ~ 23.000VND   1euro ~ 27.500 VND
// USD = u
// EURO = e
// VND = v
const u = 2 // 1USD
const e = 4 // 1EURO
// u_v => USD - VND
// e_v => EURO - VND

function usdToVnd(u) {
    return u * 23000;
}
let u_v = usdToVnd(u)
console.log("Đổi USD sang VND:" , u_v, "vnđ" );



// const e = 1 
function euroToVnd(e) {
    return e * 27500;
}
let e_v = euroToVnd(e)
console.log("Đổi EURO sang VND: ", e_v, "vnđ" );



function vndToUsd(u_v) {
    return u_v / 23000;
}
let v_u = vndToUsd(u_v) 
console.log("Đổi VND sang USD: ", v_u, "USD")



function vndToEuro(e_v) {
    return e_v / 27500;
}
let v_e = vndToEuro(e_v)
console.log("Đổi VND sang EURO: ", v_e, "USD")
