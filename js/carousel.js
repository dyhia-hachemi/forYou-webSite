let index = 0 ; 
let img = $(".carousel-track img");
const imgWidth = img.prop("width");
const totalImages = img.length;

function showSlide (index){
    $ (" .carousel-track").animate({
        left : - index * imgWidth + "px"
    },
    500 );

    $ (".carousel-indicators button").removeClass("active");

    $ (".carousel-indicators button[data-slide=${index}]").addClass("active");
}

$ (" #next") .click (function () {
    index = (index +1 ) % totalImages ;
    showSlide (index);
})


$ (" #prev") .click (function () {
    index = (index - 1 + totalImages ) % totalImages ;
    showSlide (index);
})

$ (".carousel-indicators button").click(function (){
    const newIndex = $(this).attr("data-slide");
    showSlide(newIndex);
})