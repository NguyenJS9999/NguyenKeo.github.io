// 3. Tính tổng các chữ số trong 1 số nguyên dương.
console.log("Câu 3:")

function sum_in_number(in_number) {
  if (in_number <= 0) {
    return;
  }

  let sum = 0;

  while (in_number > 0) {
    sum += in_number % 10;
    in_number = Math.floor(in_number / 10);
  }
  return sum;
}

console.log("Tổng các số các chữ số của số Nguyên đó là: ",sum_in_number(123));