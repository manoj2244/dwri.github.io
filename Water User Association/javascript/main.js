$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autopPlaySpeed:1000,
        autoPlayHoverPaused:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next'),]
        

    });
    AOS.init();
    $(".move-up span").click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })

});

