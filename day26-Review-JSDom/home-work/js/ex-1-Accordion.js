// Start câu 1 Accordion
// Chọn chỏ các thẻ nút có cùng class accordion
let acc = $('.panel');
console.log("acc", acc)

let showMenu = false;
function hiddenAccordion() {
    console.log("Ẩn hiện nội dung sau mỗi click")

        if (showMenu) {
            $('.panel').hide();
        } else {
            $('.panel').show();
        }
        showMenu = !showMenu;

}

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
