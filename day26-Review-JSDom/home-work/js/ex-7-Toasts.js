console.log("toast")

let setTimeOut;

// Mở toast
$(".on-toast").click(function () {
    console.log("Open toast")
    $(".toast").slideDown(500);
    $(".toast").css("display", "block")
    $(".toast").css("opacity", "1")
    // Tự động ẩn khối toast lên sau 5s, chạy vào hàm Ẩn Toast
    setTimeOut = setTimeout(closeToast, 5000)
});

// Ẩn toast 
$(".btn-close").click(closeToast);

// Chủ động ẩn khối Toast cuộn lên
function closeToast() {
    $(".toast").slideUp(500);
    $('.toast').css("display", "none")
    clearTimeout(setTimeOut);
}