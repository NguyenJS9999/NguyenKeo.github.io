/**
 *  Arrow function
 */

function SayHi(name) {
    return `Hi ${name}`
}

let hello = SayHi("Quynh");

// viet rut gon
let hello2 = (name) => `Hi ${name}`;

console.log(hello2("An"));

// tinh tong cua mang
let sumArray = (arrs) => {
    let sum = 0;
    for (let i = 0; i < arrs.length; i++) {
        sum = sum + arrs[i];
    }
    return sum;
};

console.log(sumArray([1, 2, 3, 4]))

var binhPhuong = a => a * a; // function có 1 tham số thì không cần ngoặc

var chuoi = () => "empty";

/**
 * Object
 */

// gan va them moi phan tu
let person = new Object;

person.name = "Quynh";
console.log(person.name);

let animal = {
    name: "Fish",
    color: "Gray",
    "number feet": 2,
}

console.log(animal.color);
console.log(animal["number feet"]);
console.log(animal["name"]);

// Xóa phần tử
delete animal["number feet"];
animal["number feet"] = ""; // Gán bằng chuỗi rỗng
console.log(animal["number feet"]);