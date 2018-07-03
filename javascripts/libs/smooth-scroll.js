/* =============================================================

    Smooth Scroll 1.1
    Animated scroll to anchor links.

    Script by Charlie Evans.
    http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links

    Rebounded by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */

(function($) {
    jQuery(document).ready(function($) {

         var menu_H = $(".main-header").outerHeight();
            $(".menu-wrap").css('height', menu_H);
            
        $(".main-header .scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            if ($(this.hash).hasClass('no-sland')){
                $('html,body').animate({scrollTop:$(this.hash).offset().top-335}, 1000, 'easeInSine');// Animate the scroll to this link's href value
            }
            else{
                $('html,body').animate({scrollTop:$(this.hash).offset().top-70}, 1000, 'easeInSine');// Animate the scroll to this link's href value
            }
        });

        $(".slide-menu .scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            if ($(this.hash).hasClass('no-sland')){
                $('html,body').animate({scrollTop:$(this.hash).offset().top-265}, 1000, 'easeInSine');// Animate the scroll to this link's href value
            }
            else{
            $('html,body').animate({scrollTop:$(this.hash).offset().top-70}, 1000, 'easeInSine');// Animate the scroll to this link's href value
            }
        }); 

        $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
                $('html,body').animate({scrollTop:$(this.hash).offset().top-menu_H}, 1000, 'easeInSine');// Animate the scroll to this link's href value

        });  


    });
})(jQuery);
