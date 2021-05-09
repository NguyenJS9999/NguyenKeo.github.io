$(document).ready(function () {

    // Ban đầu thẻ thông báo hiện mặc định, thêm class ẩn đi
    // Dùng toggleClass để bẩn tắt, trước đó tắt sau là bật
    // popover-top thẻ thông báo hiện ra với tọa độ có sẵn
    $(".popover-top").addClass("hide-class");
    $(".btn-primary").click(function () {
        $(".popover-top").toggleClass("hide-class");
    })

    $(".popover-right").addClass("hide-class");
    $(".btn-success").click(function () {
        $(".popover-right").toggleClass("hide-class");
    })

    $(".popover-bottom").addClass("hide-class");
    $(".btn-warning").click(function () {
        $(".popover-bottom").toggleClass("hide-class");
    })

    $(".popover-left").addClass("hide-class");
    $(".btn-danger").click(function () {
        $(".popover-left").toggleClass("hide-class");
    })


    
})