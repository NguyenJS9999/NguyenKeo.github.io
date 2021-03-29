let chieu_cao = document.getElementById("chieu_cao").value;
let can_nang = document.getElementById("can_nang").value;
let result = document.getElementById("result").value;
let alert = document.getElementById("alert").value;



function bmiCalc() {
    if (can_nang >= 20 && can_nang <= 200 && chieu_cao >= 100 && chieu_cao <= 200) {
        result.innerHTML = `Chỉ số BMI là: ${height/(weight*weight)}`
    } else {
        result.innerHTML = "Giá trị vượt quá giới hạn cho phép"
    }

}