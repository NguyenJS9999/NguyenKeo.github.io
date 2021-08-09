// Phủ định trạng thái
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

// Menu truợt ngang testimonials-contrainer
$('.slides').slick({
    slidesToShow: 2.25,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,

    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            },
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.5,
            },
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.5,
            },
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },

    ],


});