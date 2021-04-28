let showMenu = false;
function hiddenMenu() {
    console.log("Ản hiện menu con")

    if (showMenu) {
        $('.menu-infos-header-mobile').hide();
    }
    else {
        $('.menu-infos-header-mobile').show();
    }
    showMenu = !showMenu;
}

// Menu truợt ngang testimonials-contrainer
// $('.slide').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 10,
//     centerMode: true,
//     dots: true,
//     arrows: false,
//   });

