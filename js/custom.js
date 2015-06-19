

/* Scroll to Top */

$(document).ready(function(){
  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>600)
      {
        $('.totop').slideDown();
      } 
      else
      {
        $('.totop').slideUp();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 500);
    });

  });
});

/* Flex slider #1 (flex-text) - homepage*/

$('.flex-text').flexslider({
  direction: "vertical",
  easing: "easeOutCirc",
  controlNav: true,
  directionNav: false,
  pauseOnHover: true,
  slideshowSpeed: 3000,
  animationSpeed: 3000    
});

/* Flex slider #2 (flex-image) - homepage*/

$('.flex-image').flexslider({
  easing: "easeOutCirc",
  controlNav: true,
  directionNav: true,
  pauseOnHover: true,
  slideshowSpeed: 3000,
  animationSpeed: 3000    
});

/* Coming soon page twitter */

jQuery(function($){
   $(".ctweet").tweet({
      username: "CoEdoKYB",
      join_text: "auto",
      avatar_size: 0,
      count: 1,
      auto_join_text_default: "we said,",
      auto_join_text_ed: "we",
      auto_join_text_ing: "we were",
      auto_join_text_reply: "we replied to",
      auto_join_text_url: "we were checking out",
      loading_text: "loading tweets...",
      template: "{text}"
   });
}); 

/* Modal fix */

$('.modal').appendTo($('body'));

/* Support */

$("#slist a").click(function(e){
   e.preventDefault();
   $(this).next('p').toggle(200);
});


/* Portfolio filter */

/* Isotype */

// cache container
var $container = $('#portfolio');
// initialize isotope
$container.isotope();

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

/* Pretty Photo for Gallery*/

jQuery(".prettyphoto").prettyPhoto({
overlay_gallery: false, social_tools: false
});