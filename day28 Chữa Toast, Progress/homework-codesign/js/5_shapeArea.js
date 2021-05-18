console.log("Bài 5: shapeArea hình dạng Khu vực")

// function shapeArea(n: number): number {

// }

// Cách dùng đệ quy

function shapeArea(n) {
    // n = 1 là 1 chấm trả về 1
    if (n == 1) return 1;
    
    // Vòng ngoài bị chậm 4 đầu lặp lại rồi không được tính, cũng như mỗi cạnh trừ đi 1 x 4, hoặc cạnh đó x4 rồi - 4 số đỉnh
    const vongNgoai = ( n - 1 ) * 4;
    
    // Kết quả trả về vòng ngoài từ lộn dần vào bên trong, vòng trong có cạnh kém hơn ngoài 1 số nên là (n-1)
    document.write("*")
    return vongNgoai + shapeArea(n - 1)
}

console.log( shapeArea( 4 ) )