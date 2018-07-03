/*global $:false */
/*global window: false */

$(function(){
  "use strict";



		if( !device.tablet() && !device.mobile() ) {
			

			/* plays the BG Vimeo or Youtube video if non-mobile device is detected */ 
			$.okvideo({ source: '112539263', //set your video source here
			                    volume: 0, 
			                    loop: true,
			                    adproof: true,
			                    annotations: false,
		                 });
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.home05').addClass('video-poster-image');
			
		}
	});


// $(function ($)  : ends


//  JSHint wrapper $(function ($)  : ends


