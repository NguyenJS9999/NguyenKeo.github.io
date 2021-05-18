console.log("Câu 4: adjacentElementsProduct - Tích (Sản phẩm) các phần tử-số (yếu tố) liền kề")

// function adjacentElementsProduct(inputArray: number[]): number {

// }

let inputArray = [5, 6, -4, 2, 3, 2, -23]
console.log(inputArray.length)


function adjacentElementsProduct(inputArray) {
    let tich;
    let mangMoi = []

    for (let i = 0; i < inputArray.length; i++) {
        tich = inputArray[i] * inputArray[i + 1];
        mangMoi.push(tich);
    }
    
    let tichLonNhat = mangMoi[0]    
    for (let j = 0; j < mangMoi.length; j++) {
        
        if (mangMoi[j] > tichLonNhat) {
            tichLonNhat = mangMoi[j]
            console.log("2 số liền kề có tích lớn nhất là", j)
        }
    }
    return tichLonNhat;

}

console.log( adjacentElementsProduct() )