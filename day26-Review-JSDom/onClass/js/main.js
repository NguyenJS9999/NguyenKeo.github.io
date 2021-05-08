console.log("Buổi 26 Ôn Js Dom")

let showMenu = false;

function send(data) {
    if (data === "top") {
        $('.thongBao1').css('display', 'block')
        console.log("top")

        if (showMenu) {
            $('.thongBao1').hide();
        } else {
            $('.thongBao1').show();
        }
        showMenu = !showMenu;
    }

    if (data === "right") {
        console.log("right")
        $('.thongBao2').css('display', 'block')
        console.log("right")

        if (showMenu) {
            $('.thongBao2').hide();
        } else {
            $('.thongBao2').show();
        }
        showMenu = !showMenu;
    }

    if (data === "bottom") {
        console.log("bottom")
        $('.thongBao3').css('display', 'block')
        console.log("bottom")

        if (showMenu) {
            $('.thongBao3').hide();
        } else {
            $('.thongBao3').show();
        }
        showMenu = !showMenu;
    }

    if (data === "left") {
        console.log("left")

        $('.thongBao4').css('display', 'block')
        console.log("left")

        if (showMenu) {
            $('.thongBao4').hide();
        } else {
            $('.thongBao4').show();
        }
        showMenu = !showMenu;
    }
}

// Tab
function tabContent(data_tab) {
    if (data_tab === "Home") {
        $('.content-out').html($('#home'))


        console.log("$('#home')", $('#home').html())

        
        $('.content-out').html($('#home')) =  $('#home').html() 

        // console.log("Home", data_tab)


        // console.log("Home", data_tab )
    }

    if (data_tab === "Menu1") {
        $('.content-out').html($('#Menu1'))
        console.log("Menu1", data_tab)

    }

    if (data_tab === "Menu2") {
        $('.content-out').html($('#Menu2'))
        console.log("Menu2", data_tab)

    }
}