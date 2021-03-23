document.write("Câu 1: <br /><br />")
console.log("Câu 1: ")
// Số nguyên tố chia hết cho 1 và chính nó ngoại từ 0 à 1
function checkPrimeNumber (n) {
    if (n === 0 || n === 1) {
        return "Ngoại từ 0 và 1";
    }
    for (let i in n ) {
        if (i % 2 === n/1 || i % 2 === i/n) {
            console.log(i)

            console.log(`${i} Là số nguyên tố`)
            return ("Là số nguyên tố")
        }
    }

}
checkPrimeNumber ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,103,134,156,598,809,907])
document.write("Câu 2: <br /><br />")
console.log("Câu 2: ")

document.write("Câu 3: <br /><br />")
console.log("Câu 3: ")

document.write("Câu 4: <br /><br />")
console.log("Câu 4: ")

document.write("Câu 5: <br /><br />")
console.log("Câu 5: ")

function taxi(km, waitime) {
    if (km <= 0 || waitime <= 0 ) {
        return "Chưa đi không hợp lệ";
    }
    let soKm = 0;
 



}