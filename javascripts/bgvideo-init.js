
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(document).ready(function() { 

   		if( !device.tablet() && !device.mobile() ) {

			/* plays the BG video if non-mobile device is detected*/ 
			$(".home-video-bg.player").mb_YTPlayer();
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.home-video-bg.player').addClass('hide');
			$('.home09').addClass('video-poster-image');
			
		}

});


})();
//  JSHint wrapper $(function ($)  : ends







	

