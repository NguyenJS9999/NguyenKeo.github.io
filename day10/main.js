 /**
  * Câu điều kiện
  */
 // Kiểm tra N có lớn hơn 0
 let n = 10;

 function checkN(n) {
     if (n > 0) {
         console.log("n lon hon 0")
     }

     //  Kiểm tra số này là số chẵn hay số lẻ
     if (n % 2 === 0) {
         console.log("n la so chan")
     } else {
         console.log("n la so le")
     }

     //  Kiểm tra n là số dương hay, số âm, hay số 0
     if (n > 0) {
         console.log("n là số dương")
     } else if (n < 0) {
         console.log("n là số âm")
     } else {
         console.log("n = 0")
     }
 }

 function checkN(n)
 /**
  * 1. Viêt hàm kiểm tra 2 số, trả về số lơn hơn.
  * 2. 
  * - Cho điểm 3 môn Toán, Lý, Hóa. Viết hàm tính điểm trung bình môn và kiểm tra loại học lực
  * - Biết rằng:
  * + ĐTB lớn hơn bằng 8 và nhỏ hơn hoặc bằng 10: Xếp loại Giỏi
  * + ĐTB lớn hơn bằng 6.5 và nhỏ hơn hoặc bằng 8: Xếp loại Khá
  * + ĐTB lớn hơn bằng 4 và nhỏ hơn hoặc bằng 6.5: Xếp loại Trung Bình
  * + ĐTB nhỏ hơn 4 và nhỏ hơn hoặc bằng 0: Xếp loại Yếu
  * - Lưu ý: Tính điểm môn học theo thang điểm 10.
  */

 function kiemTraHaiSo(x, y) {
     if (x > y) {
         return x;
     }

     return y;
 }

 function hocluc(x, y, z) {
     if (x < 0 || x > 10 || y < 0 || y > 10 || z < 0 || z > 10) {
         console.log("Điểm không hợp lệ")
         return;
         console.log("abc ")

     }
     let a = (x + y + z) / 3;

     if (a = 10) {

     }
     let a = (x + y + z) / 3;

     if (a < 4) {
        console.log("Xếp loại Yếu")    
     } else if (a < 6.5) {
        console.log("Xếp loại Trung Bình")
     } else if (a < 8) {
        console.log("Xếp loại Khá")
     } else {
        console.log("Xếp loại Giỏi")
     }
 }

 function checkSo4() {
     let a = 2 + 2;

     switch (a) {
         case 3:
             console.log("small");
             break

         case 4:
             console.log("equal");
             break

         case 5:
             console.log("big");
             break

         case 6:
             console.log("default");
             break
     }
 }

 // Giải phương trình bậc 2: ax^2 + bx + c = 0.
 function giaiPTbac2(a, b, c) {
     if (a === 0) {
         return;
     }
     let delta = b * b - 4 * a * c;
     console.log(delta);

     if (delta > 0) {
         let x1 = (-b - Math.sqrt(delta)) / (2 * a)
         let x2 = (-b - Math.sqrt(delta)) / (2 * a)
         console.log("x1 = " + x1 + "," + "x2 = " + x2);
     } else if (delta === 0) {
         let x = -b / (2 * a)
         console.log(`Phương trình có nghiệm kép là ${x}`);
     } else {
         console.log("Phương trình vô nghiệm")
     }

 }

 // Cho 3 cạnh a,b,c kiểm tra 3 cạnh có tạo thành một tam giác không 
 // nếu có thì tính diện tích của tam giác
 // Tổng 2 cạnh phải lơn hơn cạnh còn lại
 function kiemTraBaCanh(a, b, c) {
     if (a <= 0 || b <= 0 || c <= 0) {
         console.log("Ba cạnh không tạo thành tam giác")
         return;

     } else {
         let dienTichTamGiac = a * b * c;
         console.log("Diện tích của tam giác là: ")
         // return dienTichTamGiac;

     }
 }