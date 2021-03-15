console.log("Câu 1:")
//  Bài tập về nhà buổi 10(12/3/2021) if else và switch case
function time() {
    let timeNow = new Date();
    console.log("Ngày Tháng Năm hiện tại là: ",timeNow);
    let monthNow = timeNow.getMonth() + 1; // bù thứ tự đếm(từ 0) của js
    console.log("Số tháng hiện tại là: ", monthNow)

    // let monthNow = 4
    if ( monthNow === 1 || monthNow === 2 || monthNow === 3) {
        console.log("Tháng hiện tại đang vào mùa Xuân")
    } else if (  monthNow === 4 || monthNow === 5 || monthNow === 6 ) {
        console.log("Tháng hiện tại đang vào mùa Hè")
    } else if (  monthNow === 7 || monthNow === 8 || monthNow === 9 ) {
        console.log("Tháng hiện tại đang vào mùa Thu")
    } else if (  monthNow === 10 || monthNow === 11 || monthNow === 12 ) {
        console.log("Tháng hiện tại đang vào mùa Đông")
    }

//     switch (monthNow) {
//         case 1:
//             console.log("Tháng hiện tại là mùa Xuân")
//             break
//         case 2:
//             console.log("Tháng hiện tại là mùa Xuân")
//             break
//         case 3:
//             console.log("Tháng hiện tại là mùa Xuân")
//             break
//         case 4:
//             console.log("Tháng hiện tại là mùa Hè")
//             break
//         case 5:
//             console.log("Tháng hiện tại là mùa Hè")
//             break
//         case 6:
//             console.log("Tháng hiện tại là mùa Hè")
//             break
//         case 7:
//             console.log("Tháng hiện tại là mùa Thu")
//             break
//         case 8:
//             console.log("Tháng hiện tại là mùa Thu")
//             break
//         case 9:
//             console.log("Tháng hiện tại là mùa Thu")
//             break
//         case 10:
//             console.log("Tháng hiện tại là mùa Đông")
//             break
//         case 11:
//             console.log("Tháng hiện tại là mùa Đông")
//             break
//         case 12:
//             console.log("Tháng hiện tại là mùa Đông")
//             break
//     }

}

time() // chạy hàm tự động 
// Mình cần tư vấn thêm về nguyên lý đặt điều kiện cho If else