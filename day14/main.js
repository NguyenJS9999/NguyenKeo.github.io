// Câu 1:
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
let values = [false,NaN,24,0,"",undefined,null,"ANBC",true]
function giaTri(arr){
    let newArr =[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]) newArr.push(arr[i]);
    }
    return newArr
}
console.log(giaTri(values))

// Câu 3: 
let values = [false,NaN,24,0,"",undefined,null,"ANBC",true]
function giaTri(arr){
    let newArr =[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]) newArr.push(arr[i]);
    }
    return newArr
}
console.log(giaTri(values))
// Câu 4:
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
function max(arr) {
    let max = ar[0].length;
    // for () {
        
    // }
}
