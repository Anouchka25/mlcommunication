
/*global $:false */
/*global window: false */

(function(){
  "use strict";

	  $(window).load(function(){
		  if( !device.tablet() && !device.mobile() ) {

		    new WOW({ offset: 500 }).init();
		        
		  }
	});

})();	  