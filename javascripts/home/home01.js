// Template Name: DEXTER.
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co
// Copyright: (C) 2015
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

  $(document).ready(function() { 

        //BG SLIDESHOW WITH ZOOM EFFECT
        $.mbBgndGallery.buildGallery({
            containment:".home01",
            timer:1000,
            effTimer:6000,
            controls:false, //updated in v1.1
            grayScale:false,
            shuffle:true,
            preserveWidth:false,
            preserveTop: true,
            effect:"zoom",
            activateKeyboard: false,

             images:[
             "http://placehold.it/1920X950",
             "http://placehold.it/1920X950",
             "http://placehold.it/1920X950"
             ],

            onStart:function(){},
            onPause:function(){},
            onPlay:function(opt){},
            onChange:function(opt,idx){},
            onNext:function(opt){},
            onPrev:function(opt){}
        });


        //TWITTER INIT (Updated with compatibility on Twitter's new API):
        //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
        $(function ($) {
            $('.twitter').tweet({
                modpath: './twitter/',
                count: 4,
                loading_text: 'loading twitter update...',
                username:'unbrandedco',
                join_text: "auto",
                template: "{text}<br/>{time}",  
                /* etc... */
            });
        });


        // Tweet Slider Initialization
        setTimeout(function() { 

            $(".tweet_list").owlCarousel({   
                loop:true,
                nav: false,
                dots: false,
                autoHeight: true,
                items: 1,
                smartSpeed:1000,
            });

        },500);     
 
    });
        