console.log("Modal")
let modal = $('.modal');


// Mở modal
$(".btn-open").click(openModal);
// Ấn nút mở hộp thoại, hiện thành block với màu nền xám xuyên thấu

function openModal() {
    console.log("Mở modal")

    $(".btn-open").css("disabled");
    $('.modal').css("display", "block")
    $('.modal-backdrop').css("opacity", "1")
    $('.modal-backdrop').css("display", "block")

    setTimeout(function () {
        $('.modal').css("display", "none")
        $('.modal-backdrop').css("opacity", "0")
        $('.modal-backdrop').css("display", "none")

    }, 5000);

}

// Đóng modal - dùng class close riêng
$(".close").click(closeModal);

function closeModal() {
    $('.modal-backdrop').css("display", "none")
    $('.modal').css("display", "none")
}

// Đóng modal khi click vào vùng ngoài khối Modal
$(window).on('click', function (e) {
    if ($(e.target).is('.modal')) {
        modal.hide();
        // css div phủ về trong suốt
        $('.modal-backdrop').css("opacity", "0")
    }
});