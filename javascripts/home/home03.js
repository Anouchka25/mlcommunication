// Template Name: Dexter.
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co
// Copyright: (C) 2015
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

  $(document).ready(function() { 

    // Home03 Slider with Video Background Initialization

        var owl = $(".home03-slider");

        $(".home03-slider").owlCarousel({   
            loop:true,
            dots: false,
            nav: true,
            navText : [
                "<i class='icon ion-ios-arrow-left'></i>",
                "<i class='icon ion-ios-arrow-right'></i>"
            ],
            center:true,
            items: 1,
            callbacks:true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 2000,
        }); 


        owl.on('onChangeState',function(e){

            $this = $(".home03 .owl-item .video-bg.player");

            $this.each(function(){ 
                $(this).YTPPause();
                $(this).attr('data-status','pause');
            });

        });
                
              
        owl.on('onTransitionEnd',function(e){

            $this = $(".home03 .owl-item.active.center .video-bg.player");
  
             $this.each(function(){
                $(this).YTPPlay();
                $(this).attr('data-status','play');     
            });
                       
        });

        owl.on('onTransitionStart',function(e){

            $this = $(".home03 .owl-item .video-bg.player");
  
             $this.each(function(){
                $(this).YTPPause();
                $(this).attr('data-status','play');    
            });
                       
        });

               
    //Home03 Video Intialization

        // Playes video on non-mobile and non-tablet devices
        if( !device.tablet() && !device.mobile() ) {

            $(".home03-slider .video-bg.player").each(function(){
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

    });
        