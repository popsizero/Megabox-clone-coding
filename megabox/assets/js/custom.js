(function($){

    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
     },
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
     },
        scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
     },
        autoplay: {
        delay: 3000,
     },
     });

     //영화차트 이미지 슬라이드

     var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        mousewheel: {
        invert: true,
        },breakpoints: {
        // when window width is >= 600px
        600: {
           slidesPerView: 1.4,
           spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
           slidesPerView: 2,
           spaceBetween: 30
        },
        // when window width is >= 960px
        960: {
           slidesPerView: 3,
           spaceBetween: 40
        }
     }
  });

     //영화차트 탭 메뉴

     let movBtn = $(".movie_title > ul > li");
     let movCont = $(".movie_chart > div");

     movCont.hide().eq(0).show();
     movBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display","none");
        movCont.eq(index).css("display","block");
     });

     //공지사항 탭 메뉴

     let noticeBtn = $(".notice > ul > li");
     let noticeCont = $(".notice > ul > li > ul");

     noticeCont.hide().eq(0).show();
     noticeBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        noticeBtn.removeClass("active");
        target.addClass("active");
        noticeCont.css("display","none");
        noticeCont.eq(index).css("display","block");
     });

})(jQuery);     