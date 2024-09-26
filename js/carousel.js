jQuery(document).ready(function($){

    function autoSlide() {
        let activeSlide = $('.slider-img.active');
        let nextSlide = activeSlide.next('.slider-img').length ? activeSlide.next('.slider-img') : $('.slider-img').first();
        
        activeSlide.removeClass('active');
        nextSlide.addClass('active');

       }

    $('.slider-img').on('click' , function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    });

    // Faire défiler automatiquement toutes les 5 secondes
    setInterval(autoSlide, 3000);
});