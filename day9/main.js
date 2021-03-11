console.log("Hello world")

// chu thich 1 dong

/*
    chu thich
    nhieu dong
*/    
    
/** 
 * - So nguyen, so thuc
 * - Infinity
 * NaN (Not a number) 
*/

/**
 * 2. String (chuoi, xau)
 * 'Dat trong dau nhay don'
 * "Dat trong day nhay kep"
 * Dat trong dau back-tick ${1+3}'
*/

/**
 * 3. Boolean
 * - Chi co 2 gia tri dung/sai (true/false)
*/

/**
 * 4. null -  Có nhưng rỗng
 * - null là một biến / doi tuong no trong, no khong co gì -
*/

/**
 * 4. undefined - ko trả về
 * - mot biết/hằng số mà đã được khai báo, chưa được khởi tạo
*/

/** 
 * Ham so -function
*/
function sendEmail() {
    console.log("This is a function")
}

sendEmail() // gọi hàm

function getMessage(from, message = "Khong co noi dung") {
    console.log(from + ":" + message);
}

getAMessage('Robin', 'hi')
getAMessage('John') // truyền vào 1 về vế còn lại trống vế đố sẽ trả về mặc định là khong co noi dung

function getABox() {
    return "This is a box";
}

let boc = getABox; // gọi biến ngoài để hứng data trẳ về từ return






// Lệnh sau hiển thị gì ra màn hình?
// 23
// undefined
// 1John
// 1John22 
// 23John
// john1
// john122
// john23
// Hello john
// john+1
// john1

// 1/ 1    
// 2/ -1
// 3/ 1
// 4/ 2
// 5/ 6
// 6/ "9px"
// 7/ "$45"
// 8/ 2
// 9/ NaN
// 10/ Infinity
// 11/ -95
// 12/ -14
// 13/ 1
// 14/ NaN
// 15/ number1
// 16/ string1