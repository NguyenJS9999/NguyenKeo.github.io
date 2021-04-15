if (window.matchMedia && window.matchMedia('(max-width: 500px)').matches) {
    // Code xử lý khi màn hình có chiều rộng nhỏ hơn hoặc bằng 500px
}


let showMenu = true;

function hiddenMenu() {
    if (showMenu) {
        $('.container-menu').hide();
        // showMenu = false;

    } else {
        $('.container-menu').show();
        // showMenu = true
    }
    
    if (showMenu == true) {
        showMenu = false;

    } else {
        showMenu == true
    }
    // console.log("hien menu")
    // let showMenu = false;
    // $('.container-menu').toggleClass('show');

}


function menu() {
    if (showMenu) {
        $('#sub-menu').hide();
    }
    else {
        $("#sub-menu").show();
    }
    showMenu = !showMenu;
}
