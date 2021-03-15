console.log("Vong lap for")
for (let i = 0; i < 10; i ++) {
    console.log(i);
} 

console.log("Vong lap while")
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
// còn thiếu code phía trên
// Cho n, (n < 50). Liệt kê tất cả các số chia hết cho 5 trong đoạn từ 0 - n ([0, n]).
function chiaHetCho5(n) {
    if  (n < 0 || n > 50 ) { return}

    let dem = 0;

    for (let i = 0; i <=n; i++) {
        if (i % 5 === 0) {
            console.log(i);
            dem++;
        }
    }
    console.log(`Co tat car ${dem} so chia het cho 5`)

}
