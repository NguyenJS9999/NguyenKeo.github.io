   // Mới vào thì hiển thị nội dung tab Home có id=home
   $(function () {
    const homeContent = $("#home").html();
    $("#tab-content").html(homeContent);
  });


  // Hàm bắt sự kiện, có 2 biến hứng từ onclick
  // this là cả thẻ li trở vào, data từ thẻ id=home
  function changeTabContent(liElement, tabId) {
    console.log("liElement", liElement)
    console.log("tabId", tabId)
    
    // Xóa hết class active cũ 
    $(".nav-link").removeClass("active");

    // Thêm class active riêng biệt ngay khi bấm vào riêng thẻ đó
    // Bấm vào đâu thêm lại class active vào thẻ đó
    const aElement = $(liElement).children();
    aElement.addClass("active");

    // Thay đổi nội dung theo tab - nội dung thẻ ẩn được truyền-thay đổi
    // nội dung vào thẻ rỗng
    const tabContent = $(tabId).html();
    $("#tab-content").html(tabContent);
  }