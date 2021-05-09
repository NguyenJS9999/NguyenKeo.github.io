  // Mới vào thì hiển thị nội dung tab Home
  $(function () {
    const homeContent = $("#home").html();
    $("#tab-content").html(homeContent);
  });

  function changeTabContent(liElement, tabId) {
    // Xóa hết class active cũ
    $(".nav-link").removeClass("active");

    // Thêm class active
    const aElement = $(liElement).children();
    aElement.addClass("active");

    // Thay đổi nội dung theo tab
    const tabContent = $(tabId).html();
    $("#tab-content").html(tabContent);
  }