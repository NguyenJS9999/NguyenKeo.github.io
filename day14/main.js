console.log("Câu 1: ")
let students = [
    {
        name: "a",
        age: 10,
    },{
        name: "b",
        age: 20,
    },{
        name: "c",
        age: 30,
    },{
        name: "d",
        age: 40,
    },{
        name: "e",
        age: 50,
    },
]

function ageAvg(arrays) {
    let sum = 0;
    let avg = 0;
    for (let i of arrays) {
        console.log(i.age)
        sum = sum + i.age
        
    }
    console.log("sum:", sum)
    avg = sum / arrays.length 
    return avg
}

console.log("Avg", ageAvg(students))
// Câu 2: 
console.log("Câu 2: Sắp xếp")

// Câu 3:
console.log("Câu 3: Lọc giá trị")

let values = [false,NaN,24,0,"",undefined,null,"ANBC",true]
function giaTri(arr){
    let newArr =[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]) newArr.push(arr[i]);
    }
    return newArr
}
console.log("Các giá trị đúng sau khi loại bỏ các giá trị sai là: ", giaTri( values ) )
// Câu 4:
console.log("Câu 4: Kiểm tra chuỗi đối xứng")

function kiemTraChuoiDoiXung(str){
    let reverseStr=""; 
    for(let i=str.length-1;i>=0;i--){
            reverseStr=reverseStr+str[i];
    }
    reverseStr = reverseStr.split(" ").join("").toLowerCase();
    let newStr = str.split(" ").join("").toLowerCase();

    if(newStr === reverseStr){
        return true;
    }else{
        return false;
    }
}
// Câu 5:
console.log("Câu 5: Lọc kí tự dài nhất trong chuỗi")

function max(arr) {
    let max = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i].lenth) {
            max = arr[i].length;
        }
    }

    let array = [];
    for (let i = 0; i < arr.lenght; i++){
        if (arr[i].lenght === max){
            array.push(arr[i]);
        }
    }
    return array;
}
console.log( max( ["aba", "aa", "ad", "c", "vcd"] ) )