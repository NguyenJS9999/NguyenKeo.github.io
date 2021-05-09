// Start câu 1 Accordion

// Gán sự kiện cho thẻ có class accordion
$(".accordion").click(function () {
    // Ngoại trừ chỉnh thẻ có class accordion sẽ ẩn lên (slideUp) content-thẻ panel  
    // Cũng như  đồng thời đóng hết các nội dung khác nó
    $(".accordion").not(this).next().slideUp(600);
  
    // và thay đổi style của accordion item khác
    $(".accordion").not(this).children()
  
    // Tính mặc định Ẩn hoặc hiện của mỗi slideToggle - cho từng content - (panel) 
    $(this).next().slideToggle(400);

    // Và thay đổi style - cuộn slide (collapsed) cho accordion item mới khác đươc lặp qua
    // $(this).children().toggleClass("collapsed");
  });
  


// Chọn chỏ các thẻ nút có cùng class accordion

//Lấy các thẻ mô tả tổng quát - viết tắt cho nội dung bên trong
// let acc = $('.accordion');
// console.log("acc", acc)     


// function hiddenAccordion() {

//     console.log("Ẩn hiện nội dung sau mỗi click")

    //Lấy các button mô tả nội dung
    // var acc = document.getElementsByClassName("accordion");

    //lặp qua các button để gán sự kiện
    // for (var i = 0; i < acc.length; i++) {
        // acc[i].onclick = function () {
            /* Thêm/xóa class active để đánh dấu các thẻ đã được click */
            // this.classList.toggle("active");

            /* Hiển thị hoặc ẩn nội dung khi button được click */
    //         var panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         };



    //     }
    // }


// } 
// function hiddenAccordion

// if (dataCick == 1) {
//     console.log("dataCick 1")

//     if (showMenu) {
//         $('.panel1').hide();
//     } else {
//         $('.panel1').show();
//     }
//     showMenu = !showMenu;
// }

// if (dataCick == 2) {
//     console.log("dataCick 2")

//     if (showMenu) {
//         $('.panel1').hide();
//     } else {
//         $('.panel1').show();
//     }
//     showMenu = !showMenu;
// }

// if (dataCick == 3) {
//     console.log("dataCick 3")

//     if (showMenu) {
//         $('.panel3').hide();
//     } else {
//         $('.panel3').show();
//     }
//     showMenu = !showMenu;
// }

// if (showMenu) {
//     $('.panel1').hide();
// } else {
//     $('.panel1').show();
// }
// showMenu = !showMenu;