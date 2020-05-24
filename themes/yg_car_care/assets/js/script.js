(function ($, Drupal) {

  'use strict';

Drupal.behaviors.awesome = {
    attach: function(context, settings) {
  new WOW().init();

  jQuery(document).ready(function( $ ) {

  var bannertitle = function() {
         var h3 = $('.slider-inner h1');
         var text = h3.text().split(' ');
           $.each(text,function(i,val) {
             if( i % 3) {
               if(i == 2){
                 text[i] = '<span>' + text[i] + '</span>';
               }
             }
         });
       h3.html(text.join(' '));
     };

     // Document on load.
     $(function(){
       bannertitle();
     });

}); 
    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: false,
      center: true,
      autoplayHoverPause: true,
      responsive: {
        0:{
            items:1,
            center:false,
            singleItem:true,
            itemsScaleUp:true,
        },
        600:{
            items:2,
             center:false,
            singleItem:false,
            itemsScaleUp:false,
        },
        1000:{
            items:3
        }    
      }
    });
    $('.partners').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      transitionStyle: 'fade',
      responsive: {
        0:{
            items:1
        },
        400:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }    
      }
    });

    $('.testimonial-carousel').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }    
      }
    });


    $('.other-project-items').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }    
      }
    });

    jQuery(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $("#menu").addClass("sticky");
      } else {
          $("#menu").removeClass("sticky");
      }
    });


    //Scroll to Top
    function headerStyle() {
      if($('body').length){
        var windowpos = $(window).scrollTop();
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
          scrollLink.addClass('open');
        } else {
          scrollLink.removeClass('open');
        }
      }
    }
    headerStyle();
    // Scroll to Target
    if($('.scroll-to-target').length){
      $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
         // animate
         $('html, body').animate({
           scrollTop: $(target).offset().top
         }, 2000);
    
      });
    }
    $(document).click(function(e) {
      if (!$(e.target).is('.panel-body')) {
        $('.collapse').collapse('hide');      
      }
    });
    $(window).on('scroll', function() {
      headerStyle();
    });

// video
    $('.popup-youtube').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,
       fixedContentPos: false
     });

 
 }
  };


})(jQuery, Drupal);