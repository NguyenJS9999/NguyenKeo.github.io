console.log("Câu 1: ")
// Số nguyên tố chia hết cho 1 và chính nó ngoại từ 0 à 1
// let n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,103,134,156,598,809,907]
function checkPrimeNumber(N) {
    if (N < 2 || Number.isInteger(N) === false) {
        return false;
    }
    // ngoại trừ 0 và 1 => tính từ 2 lên, 2 là sng tố chẵn nhỏ nhất
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
function  demSoNguyenTo (a, b) {
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

console.log( demSoNguyenTo (-2, 7));
console.log( demSoNguyenTo (10.5, 30));

////////////////////////////////////////////////////////////////
console.log("Câu 2: ")

////////////////////////////////////////////////////////////////
console.log("Câu 3: ")
// Hàm kiểm tra 1 mảng có phải mảng tăng dần không

function isAscendingArray(aRRay) {
  for (let i = 0; i < aRRay.length; i++) {
    if (aRRay[i] > aRRay[i + 1]) { 
      return false;
    }
  }
  return true;
}

// Hàm chèn phần tử X vào mảng sao cho mảng vẫn có thứ tự tăng dần

function  chenPhanTu (y, aRRay) {
  if ( isAscendingArray(aRRay) !== isAscendingArray(aRRay)  ) {
    return `Mảng nhập vào không phải mảng tăng dần`;
  }

  let Index_y;

  // Tìm vị trí sẽ chèn y trong mảng:
  for (let i = 0; i < aRRay.length; i++) {
    if (y >= aRRay[i] && y <= aRRay[i + 1]) {
      Index_y = i + 1;
    }
  }

  // Chèn y vào trong mảng tăng dần ban đầu:
  aRRay.splice(Index_y, 0, y);
  return aRRay;
}

let newArrayAdded = [-136, -125, -119, -17, 16, 18, 116, 117, 129, 140, 147, 153];

console.log( chenPhanTu (100, newArrayAdded));
//////////////////////////////////////////////////////////////// soNguyenTo
console.log("Câu 4: ")
function isPalindrome(N) {
    if (N < 0 || Number.isInteger(N) === false ) {
      return false;
    }
  
    if (N >= 0 && N < 10) {
      return `${N} là số đối xứng`;
    }

    let soBanDau = N;
    let daoNguocSo = 0;
   
    do {
      let digit = N % 10;
      daoNguocSo = daoNguocSo * 10 + digit;
      N = (N - digit) / 10;
    } while (N > 0)
  
    if (daoNguocSo === soBanDau) {
      return `${soBanDau} là số đối xứng`;
    } else {
      return `${soBanDau} không phải số đối xứng`;
    }
  }

  console.log(isPalindrome(8));
  console.log(isPalindrome(1234321));
  console.log(isPalindrome(6868));
////////////////////////////////////////////////////////////////
console.log("Câu 5: ")
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