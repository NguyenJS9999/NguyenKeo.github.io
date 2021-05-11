// Biến thời gian là 100 % để đếm ngược
let time = 100;
// Biến Interval (global) để lưu timer 
let timer_interval;
// Biến kiểm tra trạng thái thanh actual-progress đã dừng hay chưa
let status_pause = false;

// 1 Nút start   -   có 2 tham số Hàm và 1 số dạng thời gian mili second
$('.btn-start').click(function () {
    console.log("Start")
    // Sau ấn nút Start chạy hàm setInterval với 1 giây 1 vòng lặp
    timer_interval = setInterval(countdown, 1000);

    //  Sau ấn nút Start ẩn nút Start và hiển thị nút pause và reset lên
    $(".btn-start").addClass("disabled");
    $(".btn-pause").removeClass("disabled");
    $(".btn-reset").removeClass("disabled");

})


// 2 Nút pause tạm dừng Pause / tiếp tục Resume
$('.btn-pause').click(function () {
    console.log("Pause")

    // Khi thanh progress đang active, ấn nút pause, hàm Interval-xóa cũng như tạm dừng
    // Kiểm tra status_pause=false (!status_pause) và status_pause(true)

    // Nếu nút Pause được ấn status_pause=false bị phủ định(TẮT) => status_pause = true - BẬT
    if (!status_pause) {
        clearInterval(timer_interval);
        $("btn-pause").text("Resume");
        // Gán lại trạng thái nút pause được bật
        status_pause = true;
    }
    // Ngược lại nếu nút Pause được ấn trở lại,hoặc chưa ấn 
    // status_pause ở trạng thái ban đầu(TẮT)/Ấn resume rồi hoặc là = false - TẮT
    else {
        timer_interval = setInterval(countdown, 1000);
        $(".btn-pause").text("Pause");
        status_pause = false;
    }

})


// Nút reset
$('.btn-reset').click(function () {
    console.log("Reset");
    // Xóa hàm chạy vòng lặp setInterval 
    clearInterval(timer_interval);
    // Đưa lại biến time về 100 số để trừ ngược lại từ đầu
    time = 100;
    $(".actual-progress").css("width", "0%");
    $(".actual-progress").text("");

    // Đồng thời đổi text ở nút Pause LẠI thành Pause, trạng thái pause thành đóng
    $(".btn-pause").text("Pause");
    status_pause = false;

    // Bên cạnh đó sẽ bật nút Start và ẩn nút pause và reset đi
    $(".btn-start").removeClass("disabled");
    $(".btn-pause").addClass("disabled");
    $(".btn-reset").addClass("disabled");

})



// với biếm time=100 điếm ngược từ 100 số
// Hàm đếm ngược thời gian
function countdown() {
    time--;
    let actual_progress_width = 100 - time + "%";
    //  Thay đổi thuộc css của thanh tiến trình thực tế
    $(".actual-progress").css("width", actual_progress_width);
    // Hiển thị số liệu thực tế của thanh tiến trình thực tế
    $(".actual-progress").html(actual_progress_width);

    // Nếu thời gian biến time giảm về = 0 sau mỗi giây, hàm chạy bị xóa,
    // Nút pause hiện lên
    if (time == 0) {
        clearInterval(timer_interval);
        $(".btn-pause").addClass("disabled");
    }


}