// Câu 7:

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

// function hiddenMenu(){
//     console.log("Ản hiện menu con dung ham")
//     $('.sub-menus-choice').toggleClass('hidden-css-class');
// }