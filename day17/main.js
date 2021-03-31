console.log("Buổi 17")

console.log("Câu 1:")
let soNguyen = (3, 8)
// function tongHaiSoNguyen() {
// let count = 0
for (let i = 3; i > 8; i++) {
    console.log(i.length)
}
// for (let value in soNguyen) {
//     console.log(soNguyen[value])

// }
// if (Number.isInteger (in_number) === false || in_number <= 0) {
//     return;
// }



// }

// tongHaiSoNguyen(soNguyen)

console.log("Câu 2:")
let text = "HELLO world"

function parseString() {
    // for (let key of text)
    // console.log(key)

    let parseIntText = text.split(" ").join("-").toLowerCase();

    // let noichuoi


    console.log("parseIntText: ", parseIntText)
    return parseIntText;
}
parseString(text)

// let chuoiKiTu = "Race car"

function CheckChuoiDoiXung(string) {
    let String_reverseStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        String_reverseStr = String_reverseStr + string[i];
    }
    String_reverseStr = String_reverseStr.split(" ").join("").toLowerCase();
    console.log("String_reverseStr", String_reverseStr)
    let newStr = string.split(" ").join("").toLowerCase();

    if (newStr === String_reverseStr) {
        return true;
    } else {
        return false;
    }
}
// console.log("Chuỗi đó là đối xứng? ", CheckChuoiDoiXung(chuoiKiTu) )

console.log("Câu 3:")

console.log("Câu 4:")

console.log("Câu 5: Cho 1 số nguyên dương")
let number = 530751;

function sortNumber() {
    // for () {

    // }
}

console.log("Câu 6:")

// let redColor =  document.querySelector(".red");
// let greenColor = document.querySelector(".red");
// let blueColor = document.querySelector(".blue")
// let blackColor =  document.querySelector(".black")
let bodyall = document.querySelector(".body")
// let randomNumber = Math.floor( Math.random() );
let random = Math.floor(Math.random() * 100);

console.log("random", random);

function red() {
    bodyall.style.backgroundColor = "red"
}

function green() {
    bodyall.style.backgroundColor = "green"
}

function blue() {
    bodyall.style.backgroundColor = "blue"
}

function brown() {
    bodyall.style.backgroundColor = "brown"
}