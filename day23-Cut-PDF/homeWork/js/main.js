let showMenu = false;
function hiddenMenu() {
    console.log("Ản hiện menu con")

    if (showMenu) {
        $('.sub-menus-choice').hide();
    }
    else {
        $('.sub-menus-choice').show();
    }
    showMenu = !showMenu;
}