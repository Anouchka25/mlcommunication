        
        setTimeout(function(){
            $('.more-projects-item img').each(function(){
                var projectImgH = $(this).outerHeight();
                $('.more-projects-item .overlay').css({height: projectImgH});
            })
        },500);

		$(".single-project-slider").owlCarousel({
            animateOut: 'fadeOut',
      		animateIn: 'fadeIn',
            dots: true,
            nav: true,
            autoplay: true,
            navText : [
                "<i class='icon ion-ios-arrow-thin-left'></i>",
                "<i class='icon ion-ios-arrow-thin-right'></i>"
            ],
            items: 1,
            loop:true
        });

