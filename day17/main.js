console.log("Buổi 17")

console.log("Câu 1:")

function SUMisInteger(a, b) {
    let sum = 0;
    if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return "Số đầu vào không hợp lệ";
    }
    for (i = a + 1; i < b; i++) {
        sum += i;
    }
    console.log(`Tổng giữa hau số ${a} và số ${b} là ${sum}`);
    return sum;
}

SUMisInteger(3, 8)

// Câu 2:
console.log("Câu 2:")
let text = "HELLO world"

function parseString() {
    let parseIntText = text.split(" ").join("-").toLowerCase();
    console.log("parseIntText: ", parseIntText)
    return parseIntText;
}
parseString(text)

// Câu 3:
console.log("Câu 3:")
let d = new Date();
let timeNow = d.getDate();
console.log("timeNow", timeNow)

function time() {

}



console.log("Câu 4:")

console.log("Câu 5: Cho 1 số nguyên dương")
let number = 530751;

function sortNumber(h, x, y) {
    if (h <= 0 || x <= 0 || y <= 0 || x <= y) {
        return;
    }

    let day = 0;

    do {
        day++;

        if (h - x === 0) {
            h = h - x;
        } else {
            h = h - x + y;
        }
    } while (h > 0)

    return day
}

console.log(`Sau ${day} ngày ốc sên sẽ bò lên đến miệng giếng.`, countDays(20, 8, 4));

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