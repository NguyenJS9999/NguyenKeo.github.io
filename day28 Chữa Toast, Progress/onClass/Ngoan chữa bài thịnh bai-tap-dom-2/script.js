let time = 5;
let timer, countDown;

$(".btn").click(function () {
  // Hiện popup
  $(".info").removeClass("d-none");
  $(".count-down").text(time);

  // Xóa timer cũ
  clearInterval(countDown);
  clearTimeout(timer);
  console.log(time);

  // Đếm ngược đến lúc tự tắt
  countDown = setInterval(count, 1000);

  // Tự tắt pop-up sau 5s
  timer = setTimeout(close, 5000);
});

// Ấn nút "x" để tắt pop-up ngay lập tức
$(".close").click(close);

function close() {
  $("div.info").addClass("d-none");
  clearTimeout(timer);
  clearInterval(countDown);
  time = 5;
}

function count() {
  time--;
  console.log(time);
  $(".count-down").text(time);
  if (time == 0) {
    clearInterval(countDown);
  }
}
