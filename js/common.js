$(document).ready(function(){

      $(".gnb > li").mouseenter(function(){
        $(this).children(".depth2").stop().slideDown();
      });

      $(".gnb > li").mouseleave(function(){
        $(this).children(".depth2").stop().slideUp();
      });


      const mb = new Swiper('.mb', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


      AOS.init();

    });
