console.log("Câu 1: ");
document.write("Câu 1: ")
//1. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh', age: 20 }. Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên.
let student = [{
        name: "d",
        age: 40
    },
    {
        name: "a",
        age: -10
    },
    {
        name: "e",
        age: -50
    },
    {
        name: "b",
        age: 20
    },
    {
        name: "f",
        age: 60
    },
    {
        name: "c",
        age: 30
    },
];

function avgAgeStudent(student) {
    let sum = 0;
    let avg = 0;
    for (let value of student) {
        // console.log(value.age)
        sum += value.age
    }
    document.write("<br />", "Tổng số tuổi các học sinh là: ", sum)

    let numberO = 0
    for (let i of student) {
        // console.log("Có số học sinh: ", i.name.length)
        // console.log("check", i.name)
        numberO += i.name.length
        // console.log("numberO",numberO)
        avg = sum / numberO
    }
    // console.log("numberO",numberO)
    return avg
}
// console.log("Số tuổi trung bình của các học sinh là: ", avgAgeStudent (student))
document.write("<br />", "Số tuổi trung bình của các học sinh là: ", avgAgeStudent(student), "<br /><br />")

console.log("Câu 2: ");
document.write("Câu 2: ")
//2. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp.
function sortArrayObject(student) {
    let count = "";
    let sort = 0;
    for (let i of student) {
        // console.log(i.age)
        count = i.age
        // let sort = count

        console.log("count", typeof count)


    }


    // console.log(Object.values(student))
    // for (let value of student ) {
    // console.log(value)
    // count = value.age.toString().split().sort()
    // sortCount = count.sort()
    // console.log( sortCount)
    // let splitStr = count
    // console.log(splitStr)
    // count += value.age
    // console.log(typeof count)
    // }

}
console.log(sortArrayObject(student))

console.log("Câu 3: ");
document.write("<br /> Câu 3: ")

arrayFail = [false, null, undefined, NaN, 0, "", 1, 2, "a", "b"]

// function removedItemFail(arrayFail) {
    // let deleteItem = 0;
    // for (let i in arrayFail) {
    //     console.log(i === 0)
    //     if (i === false || i === null || i === NaN || i === 0 || i === "") {
    //         deleteItem = delete arrayFail.i

    //     }
    // }
    // return arrayFail

// }

removedItemFail = (arrayFail) => {
    arrayFail = arrayFail.filter((value) => value);
    return arrayFail;
};
document.write("Các giá trị đúng sau khi loại bỏ còn lại là: ", removedItemFail(arrayFail));
console.log("Các giá trị đúng sau khi loại bỏ còn lại là: ", removedItemFail(arrayFail))
console.log("Câu 4: ");
document.write("<br /> Câu 4: ")