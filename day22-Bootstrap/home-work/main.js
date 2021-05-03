console.log("Ẩn menu mobile")
let showMenu = false;

function hiddenMenu() {
    console.log("Ản hiện menu con")

    if (showMenu) {
        $('.menu-infos-header-mobile').hide();
    } else {
        $('.menu-infos-header-mobile').show();
    }
    showMenu = !showMenu;
}