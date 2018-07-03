/*global $:false */
/*global window: false */

	(function(){
	  "use strict";

        setTimeout(function(){

        	var vW = $(window).width();

        	if(vW > 1024){
                //Applies ".main-menu a" height to "inner-page-header.standard-blog-post" margin-top    
        			var mainHeader_H = $(".main-menu a").outerHeight();
            		$(".inner-page-header.standard-blog-post").css('margin-top', mainHeader_H );    
            }
            else
            {
            	$(".inner-page-header.standard-blog-post").css('margin-top', 0 );
            }  
       

        },500);
	  

        
	})();	