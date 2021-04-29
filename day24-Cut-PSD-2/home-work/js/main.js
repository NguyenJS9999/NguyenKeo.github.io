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
$('.slides').slick({
    slidesToShow: 2.25,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    dots: true,
    arrows: false,

   



 
  slidesToScroll: 1,
  pauseOnFocus: false,
  pauseOnHover: false,

    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4.6,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3.6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.6,
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

