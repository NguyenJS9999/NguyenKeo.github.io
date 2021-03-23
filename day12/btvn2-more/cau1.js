document.write("Câu 1: <br /><br />")
console.log("Câu 1: ")
// Số nguyên tố chia hết cho 1 và chính nó ngoại từ 0 à 1
// let n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,103,134,156,598,809,907]
function checkPrimeNumber(N) {
    if (N < 2 || Number.isInteger(N) === false) {
        return false;
    }
    // ngoại trừ 0 và 1 => tính từ 2 lên
    if (N === 2) {
        return true;
    }

    if (N > 2) {
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i === 0) {
                return false;
            }
        }
        return true;
    }
}
// Hàm đếm số nguyên tố trong đoạn [a, b]
function countPrimeNumbers(a, b) {
    let count = 0;

    if (a > b) {
        greater = a;
        smaller = b;
    } else {
        greater = b;
        smaller = a;
    }

    for (let i = Math.ceil(smaller); i <= Math.floor(greater); i++) {
        if (checkPrimeNumber(i)) {
            count++;
        }
    }

    return `Có ${count} số nguyên tố trong đoạn [${smaller}, ${greater}]`;
}

console.log(countPrimeNumbers(-2, 7));
console.log(countPrimeNumbers(10.5, 30));


console.log("Câu 2: ")


console.log("Câu 3: ")


console.log("Câu 4: ")


console.log("Câu 5: ")


function costTaxi() {
    let soKM = prompt("nhap so km");
    let b = prompt("nhap thoi gian  cho");
    let giacuoc = 0;

    if (soKM < 0 && b < 0) {
        return "nhap lai du lieu";
    }

    if (soKM <= 1) {
        giacuoc = 9000;
    } else if (soKM > 1 && soKM < 31) {
        giacuoc = 9000 + (soKM - 1) * 11000;
    } else if (soKM >= 31) {
        giacuoc = 9000 + (29 * 11000) + (soKM - 30) * 9500;
    }

    if (b > 0) {
        let a = 0;
        a = 20000 * b;
        giacuoc += a
    }


    console.log("KM di: ", soKM);
    console.log("thoi gian cho la:", b, "gio")
    console.log("so tien la: ", giacuoc);
}

function calTaxiFare(distance, wait) {
    // distance: tham số chỉ độ dài quãng đường, đơn vị km
    // wait: tham số chỉ thời gian chờ, đơn vị hour(tiếng)

    if (distance < 0 || wait < 0) {
        return "Thông số đầu vào không hợp lệ";
    }

    let fare;

    if (distance <= 1) {
        fare = 9000;
    } else if (distance <= 30) {
        fare = 9000 + 11000 * (distance - 1);
    } else {
        fare = 9000 + 11000 * (30 - 1) + 9500 * (distance - 30);
    }

    // Cộng thêm tiền chờ:
    fare += 20000 * wait;

    return `Tiền cước taxi đi ${distance} km, chờ ${wait} tiếng là ${fare} đồng.`;
}
////////////////////////////////
let km = 1; 
let waitTime = 2; // Chờ cất hành lý
function calTaxiFare(km, waitTime) {
    // km: Độ dài quãng đường, đơn vị km
    // waitTime: Thời gian chờ, đơn vị (tiếng) với 20k/h 

    if (km < 0 || waitTime < 0) {
        return "Thông số đầu vào không hợp lệ hoặc chưa lên taxi";
    }

    let totalCost;

    if (km <= 1) {
        totalCost = 9000;
    } else if (km <= 30) {
        totalCost = 9000 + 11000 * (km - 1);
    } else {
        totalCost = (9000 + 11000 * (30 - 1)) + (9500 * (km - 30));
    }

    // Cộng thêm tiền nếu có thời gian chờ:
    totalCost = totalCost + 20000 * waitTime;

    return `Tổng cước phí taxi đi ${km} km và chờ ${waitTime} tiếng là ${totalCost} Việt Nam đồng.`;
}

console.log(calTaxiFare(km, waitTime ));