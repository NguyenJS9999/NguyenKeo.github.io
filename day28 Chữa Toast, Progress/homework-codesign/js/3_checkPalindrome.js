console.log("Câu 3: Kiểm tra tính đối xứng của 1 chuỗi kí tự")

function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('')
}

console.log("Chuỗi trên là chuỗi đối xứng", checkPalindrome('aabaa')) 


// Hướng tư duy dùng hàm của js để xử lý
// Split cắt chuỗi: Tách một chuỗi thành một mảng các chuỗi con: Phương pháp chia split() phân chia một String thành một danh sách có thứ tự các chuỗi con, đặt những chuỗi con vào một mảng,
// và trả về mảng. Việc phân chia được thực hiện bằng cách tìm kiếm một mẫu; trong đó mẫu được cung cấp làm tham số đầu tiên trong 
// lệnh gọi của phương thức.  "How are you doing today?" => How,are,you,doing,today?

// reverse: Đảo ngược chuỗi: Chuyển đổi các phần tử của một mảng thành một chuỗi RỖNG:
// ["Banana", "Orange", "Apple", "Mango"]  =>  Banana,Orange,Apple,Mango