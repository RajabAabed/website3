$(function () {
    new WOW().init();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    
    $(document).scroll(function(){
        var top = $('html , body').scrollTop();
        
            if (top > 50) {
                $('header').addClass('scroll');
            } else {
                $('header').removeClass('scroll');
            }
   }); 
})
