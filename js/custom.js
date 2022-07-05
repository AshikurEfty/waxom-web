$(function(){
    
   $('.back-top').click(function(){
       $('html, body').animate({scrollTop:0},1500)
   });
    
   $('.back-bottom').click(function(){
     $('html,body').animate({scrollTop:$(document).height()},1000);   
   });
    
    
   $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
       if(scrolling > 200){
           $('.back-top').fadeIn(1500);
       }
       else{
          $('.back-top').fadeOut(1500);
       }
       
       
       var scrolling = $(this).scrollTop();

        if(scrolling >= 2500){
            $('.back-bottom').fadeOut(1500);
        }
        else{
             $('.back-bottom').fadeIn(1500);
        }
       
       
       if(scrolling > 150){
           $('.navbar').addClass('navbar2');
       }
       else{
           $('.navbar').removeClass('navbar2');
       }
       
   })
    
    
     //animation scroll js
    var html_body = $('html, body');
    $('.collapse a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
// ====== counter up ======
     $('.counter').counterUp({
                delay: 5,
                time: 10000
            });
    
    
    
//    wow animation
    new WOW().init();
    
    
    
});