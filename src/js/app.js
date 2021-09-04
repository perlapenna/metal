$(window).on('load', function () {
    
    $('.nav').on("click", function() {
        $('.menu-container').css('display', 'flex');
        
         $('.menu-item').bind('oanimationend animationend webkitAnimationEnd', function() {
            $(this).removeClass('menu-fade');
            $(this).toggleClass('visible');
         })
         
    })
})