let time = 5;
let timer, countDown;

$(".btn").click(function () {
  // Hiện popup
  $(".info").removeClass("d-none");

  // Xóa timer cũ
  clearInterval(countDown);
  clearTimeout(timer);

  // Đếm ngược đến lúc tự tắt
  const count = () => {
    if (time >= 1) {
      time--;
      $(".count-down").text(time);
    } else {
      clearInterval(countDown);
    }
  };
  countDown = setInterval(count, 1000);

  // Tự tắt pop-up sau 5s
  const callback = () => {
    time = 5;
    $(".info").addClass("d-none");
  };
  timer = setTimeout(callback, 5000);
});

// Ấn nút "x" để tắt pop-up ngay lập tức
$(".close").click(function () {
  $("div.info").addClass("d-none");
  clearTimeout(timer);
});

// Ẩn toast 
$(".btn-close").click(closeToast);

// Chủ động ẩn khối Toast cuộn lên
function closeToast() {
 
    clearTimeout(setTimeOut);
}
