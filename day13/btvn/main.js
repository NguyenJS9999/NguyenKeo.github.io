console.log("Câu 1: ");
document.write("Câu 1: ")
//1. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh', age: 20 }. Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên.
let students = [{
        name: "d",
        age: 40
    }, {
        name: "a",
        age: -10
    },{
        name: "e",
        age: -50
    }, {
        name: "b",
        age: 20
    }, {
        name: "f",
        age: 60
    },{
        name: "c",
        age: 30
    },
];
function ageAvg(arrays) {
    let sum = 0;
    let avg = 0;
    for (let i of arrays) {
        // console.log(i.age)
        sum = sum + i.age 
    }
    console.log("sum:", sum)
    avg = sum / arrays.length 
    return avg
}
console.log("Avg", ageAvg(students))
document.write("<br />", "Số tuổi trung bình của các học sinh là: ", ageAvg(students), "<br /><br />")

console.log("Câu 2: ");
document.write("Câu 2: ")
//2. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. 
// Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp.
// Cách 1: Dùng hàm
function sortArrayObject(arr) {
    arr.sort(function (a, b) {
        return b.age - a.age
    });
   return arr
}
console.log(sortArrayObject(students))
// Dùng vòng lặp for 
function sortArrayObject(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i].age > arr[j].age) {
          let item = arr[i];
          arr[i] = arr[j];
          arr[j] = item;
        }
      }
    }
    return arr;
  }
console.log(sortArrayObject(students))
//
console.log("Câu 3: ");document.write("<br /> Câu 3: ")
let arrayFail = [false, null, undefined, NaN, 0, "", 1, 2, "a", "b"]
// Cách 1:  dùng vòng lặp for 
function giaTri(array){
    let newArr =[];
    for(let i = 0;i<array.length;i++){
        if(array[i]) newArr.push(array[i]);
    }
    return newArr
}
console.log(giaTri(arrayFail))
// Cách 2: Dùng hàng filter 
removedItemFail = (arrayFail) => {
    arrayFail = arrayFail.filter((value) => value);
    return arrayFail;
};
// Cách 3: Dùng vòng for loại trừ các giá trị sai
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

console.log("Các giá trị đúng sau khi loại bỏ còn lại là: ", removedItemFail(arrayFail))
document.write("Các giá trị đúng sau khi loại bỏ còn lại là: ", removedItemFail(arrayFail));
//
console.log("Câu 4: ");
document.write("<br /> Câu 4: ")