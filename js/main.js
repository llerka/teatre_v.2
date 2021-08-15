$(function(){

    $('.header-slider').slick({
       fade: true,
       prevArrow: '<svg class="slick-left" width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM41 7L1 7L1 9L41 9L41 7Z" fill="#C4C4C4"/></svg> <span class="arrow-text arrow-text__right">СЛЕД<span>',
       nextArrow: '<svg class="slick-right" width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928938C33.9526 0.538414 33.3195 0.538414 32.9289 0.928938C32.5384 1.31946 32.5384 1.95263 32.9289 2.34315L38.5858 8.00001L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-1.74846e-07 9L40 9.00001L40 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="white"/></svg> <span class="arrow-text arrow-text__left">ПРЕД<span>'
    });

    
$('.benefits-slider').slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__item-link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
      menu.toggleClass('burger-menu--active');
      if (menu.hasClass('burger-menu--active')){
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }

  burgerMenu('.burger-menu');
});