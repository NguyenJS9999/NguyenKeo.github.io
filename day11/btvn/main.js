// Câu 1: 
// Câu 2: 
let numbers_N = [-1, -2, -4, 6, -8, 0 , 1, 2, 4, 9, 10, 66]

var maxInNumbers = Math.max.apply(Math, numbers_N); 
var minInNumbers = Math.min.apply(Math, numbers_N);

console.log("Giá trị lớn nhất là: " +maxInNumbers );
console.log("Giá trị nhỏ nhất là: " +minInNumbers );

// Câu 3: 
function sum_in_number(in_number) {
    if (in_number <= 0) {
      return;
    }
  
    let sum = 0;
  
    while (in_number > 0) {
      sum = in_number % 10;
      console.log("sum",sum)
      in_number = Math.floor(in_number / 10);
      console.log("in_number",in_number)
     
    }
    return sum;
  }
  
  console.log("Tổng các số các chữ số của số Nguyên đó là: ",sum_in_number(123));


  