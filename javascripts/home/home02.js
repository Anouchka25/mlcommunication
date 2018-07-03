// Template Name: Dexter.
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co
// Copyright: (C) 2015
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

    $(document).ready(function() { 

        //Home02 Slider Initialization
            $(".home02-slider").owlCarousel({    
                loop:true,
                nav: true,
                navText : [
                    "<i class='icon ion-arrow-left-b'></i>",
                    "<i class='icon ion-arrow-right-b'></i>"
                ],
                dots: false,
                items: 1,
                autoplay: true,
                smartSpeed:1000,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });      
    });
        