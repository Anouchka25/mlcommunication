// Template Name: Dexter.
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co
// Copyright: (C) 2015
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

  $(document).ready(function() { 


        var sliderWrapH = $('.home05-slider-wrap').height();
            $('.home05-text-wrap').height(sliderWrapH);

        var owl = $(".home05-slider");

     // Progressbar Initialization After Home05 Slider Initialization   

        owl.on('onInitAfter',function(e){
          $('#progressbar svg').remove();
            setTimeout(function(){
                var circle = new ProgressBar.Circle('#progressbar', {
                    color: 'rgba(255,29,77,0.8)',
                    strokeWidth: 3,
                    duration: 5000
                });
                circle.animate(1.0);
            },50);
        });

    // Home05 Slider Initialization

        $(".home05-slider").owlCarousel({    
            loop: false,
            nav: false,
            dots: true,
            items: 1,
            mouseDrag: false,
            autoplay: true,
            callbacks:true,
            autoplayTimeout: 5000,
            smartSpeed:1000,
            autoplayHoverPause: true,
            autoplaySpeed: 3000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        }); 

    // Progressbar initialization on each owl item change    

         owl.on('onChangeState',function(e){
            $('#progressbar svg').remove();
            setTimeout(function(){
                var circle = new ProgressBar.Circle('#progressbar', {
                    color: 'rgba(255,29,77,0.8)',
                    strokeWidth: 3,
                    duration: 5500
                });
                circle.animate(1.0);
            },50);
            
        });   

    });
        