console.log("Câu 6: Make Array Consecutive 2")

// function makeArrayConsecutive2(statues: number[]): number {

// }

// Công thức tính số bị thiếu giữa hai số
// Vòng lặp chỉ check giữa số trước và số sau thiếu bao số rồi công vào biến số bị thiếu là bao nhiêu thôi



function makeArrayConsecutive2(statues) {
    
    // Sắp xếp lại mảng theo chiều tăng dần theo mong muốn của Ratiorg
    statues.sort(function(a, b) {
        return a - b;
    })
    // đếm số bị thiếu
    let numOfStatuesMissing = 0;
    for (let i = 0;  i < statues.length; i++ ) {
        // không nhất thiết phải check = 1 [2, 3, 6, 8]
        if ( statues[i + 1] - statues[i] > 1) 
        {
            // Số tượng thiếu = tượng cớ sau trừ tượng cỡ trước - 1 để lấy khoảng cách, so vào số cỡ tượng
                numOfStatuesMissing += ( statues[i + 1] - statues[i] ) - 1
        }
    }
    
    return numOfStatuesMissing;
}

console.log("Số lượng tượng còn thiếu là: ", makeArrayConsecutive2([6, 2, 3, 8]) )