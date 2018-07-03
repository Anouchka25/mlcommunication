// Template Name: Dexter.
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co
// Copyright: (C) 2015
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

  $(document).ready(function() { 

        if( !device.tablet() && !device.mobile() ) {

      // Background Video initialization

            $(".home09 .video-bg.player").each(function(){
                $(this).mb_YTPlayer();
            });
                        
        } else {
            
        // Shows video thumbnail image on mobile and tablet devices
            $('.video-bg.player').each(function(){
                var videoSec  = $(this);
                var videoSec_vLink = videoSec.data('property');
                var youtube_video_id = videoSec_vLink.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

                    if (youtube_video_id.length == 11) {
                        videoSec.css('background', 'url(http://img.youtube.com/vi/'+youtube_video_id+'/hqdefault.jpg)')
                    }
            });         
        } 

         var owl = $(".home09-slider");

      // Counter Initialization After Home09 Slider Initialization  

         owl.on('onInitAfter',function(e){
             $('.timer').countTo({
                speed: 6000
            });
          });

        $(".home09-slider").owlCarousel({    
            loop: false,
            nav: true,
            dots: false,
            smartSpeed: 2000,
            navText : [
              "<i class='icon ion-arrow-left-c'></i>",
              "<i class='icon ion-arrow-right-c'></i>"
            ],
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayTimeout: 5000,
            callbacks: true,
            items: 1           
        }); 

    // Counter initialization on each owl item change  

        owl.on('onChangeState',function(e){

            $('.timer').countTo({
                speed: 6000
            });

        });


  });    