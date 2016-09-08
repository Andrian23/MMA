 $('.slider').slick({
     autoplay: true
     , autoplaySpeed: 2000
     , slidesPerRow: 3
     , slidesToShow: 3
     , responsive: [
         {
             breakpoint: 600
             , settings: {
                 slidesToShow: 1
                 , slidesToScroll: 2
             }
  }
   
         
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

 });
 $('.slider_2').slick({
     autoplay: true
     , autoplaySpeed: 2000
     , slidesPerRow: 3
     , slidesToShow: 3
       , responsive: [
         {
             breakpoint: 600
             , settings: {
                 slidesToShow: 1
                 , slidesToScroll: 2
             }
  }
   
         
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

 });



$(document).ready(function() {
    $('a').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
    scrollTop: $(el).offset().top}, 2000);
    return false;
    });
});