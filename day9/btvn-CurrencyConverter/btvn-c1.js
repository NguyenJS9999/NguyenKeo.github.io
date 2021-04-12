// Bài tập về nhà buổi 9 js 1 10/03/2021
console.log("Câu số 1: ")
// Đổi độ C sang độ F => C cho biết trước
const c = 1;
function c_to_f(c = "Chưa nhập độ C") {
    return (c * 1.8) + 32;
}
let c_f = c_to_f(c);
console.log("Độ F sang độ C, độ F sẽ là: ", c_f)
// alert("Độ F sang độ C, độ F sẽ là: ", c_f)

// https://www.metric-conversions.org/vi/nhiet-do/bang-do-c-sang-do-f.htm

// Đổi độ F sang độ C => F cho biết trước
const _f = 200;
function f_to_c(_f = "Chưa nhập độ F") {
    return  (_f-32) / 1.8;
}
let f_c = f_to_c(_f);
console.log("Độ C sang độ F, độ C sẽ là: ", f_c)
// alert("Độ C sang độ F, độ C sẽ là: ", f_c)

// https://www.metric-conversions.org/vi/nhiet-do/bang-do-f-sang-do-c.htm