// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: .
// Author: Unbranded.
// Version 1.0 - Initial Release
// Website: http://www.unbranded.co 
// Copyright: (C) 2015 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";

    //Vieport height calculation
      $('.full-height').height($(window).height());
      $('.full-width').width($(window).width());
      var vW = $(window).width();

      var svgW = 0;


    $(window).load(function(){

        setTimeout(function() {

            var menuH = $('.main-menu a').outerHeight();
                $('.header-content').height(menuH);
                $('.logo').height(menuH);
                $('.header-social-icons').height(menuH);
                $(".single-project-home").css('margin-top', menuH);  

            var secH = $('.section-header').outerHeight();
                $('.section-header-overlay').height(secH);

            var special_secH = $('.section-header-special').outerHeight();
                $('.section-header-overlay-special').height(special_secH);

             svgW = $('svg.slant-top').width();
                $('svg.slant-top, svg.slant-bottom').css({left: -(svgW - vW)});

            var abtH = $('.about-image').outerHeight();
                $('.about-image-overlay').height(abtH);  

            var serH = $('.services-content-image').outerHeight();
                $('.services-content-name').height(serH); 


                if(vW > 480){
                    var testH = $('.testimonial-image').outerHeight();
                  $('.testimonial-text').height(testH);
                } 


            var miniPortH = $('.mini-portfolio-item img').outerHeight();
                $('.mini-portfolio-item-overlay').height(miniPortH);


                if(vW < 481){
                    $('.team-single-item').each(function () {
                      var imgMarkup = $(this).find('.team-image-wrap').html();
                      $(this).prepend('<div class="col-xs-12">'+ imgMarkup +'</div>');
                      $(this).find('.team-image-wrap').addClass('hidden');
                    });
                }
                else
                {
                  var teamImgH = $('.team-image').outerHeight();
                $('.team-text').height(teamImgH);
                }


            var portfolioH = $('.portfolio-item').outerHeight();
                $('.portfolio-item-mask').height(portfolioH-20); 

            var blogH = $('.blog-visual img').height();
                $('.blog-item-overlay').height(blogH-100);   

            var blogCapH = $('.trigger-wrap').outerHeight();
                $('.trigger-wrap a.read-more').height(blogCapH);
                $('.trigger-wrap a.read-more ').css('bottom',-blogCapH);
                $('.blog-item-overlay').css('bottom',blogCapH);

            var pos = $('.contact-content-item-icon div:first-child').position();
                $('.contact-content-item-icon div:last-child').css({left: pos.left});
   
        },700);


        //Directs inner-page menu links to correspond main page section

            var locationUrl = $(location).attr('href');
            var targetLocation = locationUrl.split('#');
            var targetId = '#'+targetLocation[1];
                $('.main-header li > a[href='+targetId+']').trigger('click');


        // Sub-menu position 

            var sub_menuW = $(".sub-menu").width();
                $(".sub-menu-list-left").css('right', sub_menuW);
                $(".sub-menu-list-right").css('left', sub_menuW);

            var sub_menu_childW = $(".sub-menu.child").width();
                $(".sub-menu-child-list-left").css('right', sub_menu_childW);
                $(".sub-menu-child-list-right").css('left', sub_menu_childW);


         
        //Mobile-Nav 

            $('.has-sub-menu i ').on('click', function(){
                  var this_menu_item = $(this);
                  $('.has-sub-menu span').toggleClass('rotate');

                  if(!this_menu_item.data('sub-menu-open'))
                  {
                    $('.mobile-nav-wrap li.has-sub-menu a').data('sub-menu-open', false);
                    $('.mobile-nav-wrap li.has-sub-menu a').removeClass('sub-menu-open'); 
                    this_menu_item.closest('li').children('.mobile-sub-menu').first().stop().slideDown(500); 
                    this_menu_item.addClass('sub-menu-open');
                    this_menu_item.data('sub-menu-open', true);
                    
                    return false;
                  }
                  else
                  {
                    this_menu_item.closest('li').children('.mobile-sub-menu').first().stop().slideUp(500);
                    this_menu_item.removeClass('sub-menu-open');
                    this_menu_item.data('sub-menu-open', false);
                    return true;
                  }  
            });

            $('.sub-menu-open a').on('click',function(){
              return true;
            });

 

            setTimeout(function() { 

            // Highlight Main menu item on scroll

                var page_stack = $.makeArray();
                var stack_top = 0;

                $('.main-menu.main-home-menu .main-menu-item:first-child > a').addClass('active-nav');      

                $('.nav-highlight').waypoint(function (direction) {
          
                    if (direction === 'down') 
                        {  
                           $('.main-menu-item > a').removeClass('active-nav');
                           $('.main-menu-item a[href=#'+ $(this).attr('id') +']').addClass('active-nav');
                           stack_top = stack_top+1; 
                           page_stack[stack_top] = $(this).attr('id');           
                        } 
                    else 
                        {
                          stack_top = stack_top-1;
                          $('.main-menu-item > a').removeClass('active-nav');
                          $('.main-menu-item a[href=#'+page_stack[stack_top]+']').addClass('active-nav');   
                        }

                },{ offset: 300 });


            // Highlight Mobile menu item on scroll

               var mobile_page_stack = $.makeArray();
                  var mobile_stack_top = 0;

                $('.main-home-mobile-menu .mobile-menu-item:first-child > a').addClass('active-nav-mobile');      

                $('.nav-highlight').waypoint(function (direction) {
            
                    if (direction === 'down') 
                        {
                           $('.mobile-menu-item > a').removeClass('active-nav-mobile');
                           $('.mobile-menu-item a[href=#'+ $(this).attr('id') +']').addClass('active-nav-mobile');
                           mobile_stack_top = mobile_stack_top+1; 
                           mobile_page_stack[mobile_stack_top] = $(this).attr('id');           
                        } 
                    else 
                        {
                          mobile_stack_top = mobile_stack_top-1;
                          $('.mobile-menu-item > a').removeClass('active-nav-mobile');
                          $('.mobile-menu-item a[href=#'+mobile_page_stack[mobile_stack_top]+']').addClass('active-nav-mobile');   
                        }

                },{ offset: 600 }); 

            },700);   
 


        setTimeout(function() { 

        // Owl Carousel section

            $(".mini-portfolio1").owlCarousel({

                loop:true,
                dots: false,
                nav:false,
                margin: 0,
                autoHeight: true,
                items: 4,
                autoplay: true,
                smartSpeed: 450,
                responsive:{
                  0:{
                    items:1
                  },

                  415:{
                    items:2
                  },

                  678:{
                    items:3
                  },

                  1153:{
                    items:4
                  },

                  1601:{
                    items:5
                  }

                }
          
            });


            $(".mini-portfolio2").owlCarousel({

                loop:true,
                dots: false,
                nav:false,
                rtl: true,
                margin: 0,
                items: 4,
                autoplay: true,
                smartSpeed: 450,
                responsive:{
                  0:{
                    items:1
                  },

                  415:{
                    items:2
                  },

                  678:{
                    items:3
                  },

                  1153:{
                    items:4
                  },

                  1601:{
                    items:5
                  }

                }
          
            });

             
            


            $(".team-slider").owlCarousel({

                smartSpeed:450,
                dotData:true,
                nav:false,
                autoHeight: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                callbacks: true,
                items: 1,
                info: getInfo
            
            });

        // Insert info into table
            function getInfo(i){
              var owlInfo = i,prop,value,name;

              for(prop in owlInfo){
                if(owlInfo.hasOwnProperty(prop)){
                  value = owlInfo[prop];
                  name = prop;
                  if(prop == 'allItems')

                    // var controlW = value;
                    $('.team-slider .owl-dots .owl-dot').css('width', 100/value + '%');
                    
                  if(prop == 'currentPosition')
                    value = value+1;
 
                  $('.'+name).text(value);
                  
                }
              }
            }

        },500);     

          
      // Go to first team slider item

          setTimeout(function(){ 
              $(".team-slider").trigger('goTo.owl',[0]); 
          },600);

          
          $('.team-slider .owl-controls .owl-dots').imagesLoaded(function(){
                var teamflag = 0;
                var teamControlH = 0;
                function teamControlHeight(){

                  if (teamflag<5){
                    teamflag++;

                    teamControlH = $('.team-slider .owl-controls .owl-dots').outerHeight();
                    $('.team-slider-control').height(teamControlH);  
                    var docWidth = $('body').innerWidth();                  
                    var teamControlW = $('.team-slider .owl-controls .owl-dots').width();
                    var dif = 0;

                    if(teamflag>4)
                    {  
                      if(teamControlW < docWidth)
                      {
                        dif = (docWidth-teamControlW);                   
                      }
                      
                        $('.team-slider.owl-theme .owl-controls .owl-dots').css({bottom: -(teamControlH + 50)});
                        $('.team-slider .owl-controls .owl-dots').css('left', (dif/2));
                    }   

                setTimeout(function(){
                    teamControlHeight();
                },500);

              }

            }
              teamControlHeight();
          });
          

      // Move to Team Slider top on control item click

          setTimeout(function(){ 
              $('.team-slider.owl-carousel .owl-controls .owl-dots .owl-dot').on('click touchstart', function() {
                  var ScrollOffset = 80;
                  $("html, body").animate({
                      scrollTop: $('.team-slider').offset().top-ScrollOffset + "px"
                  }, {
                      duration: 500,
                      easing: "linear"
                  });
                  return false;
              });
          },700);


    });



	  $(document).ready(function() { 


        //Featured Side Panel View
            $('#toggle-menu').on('click', function(event) {
                event.preventDefault();
                $('.cd-panel').toggleClass('is-visible');
                $(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');
            });

            //close the lateral panel
            $('.cd-panel').on('click', function(event) {
                if ($(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close')) {
                    $('.cd-panel').removeClass('is-visible');
                    $('#toggle-menu').toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');
                    event.preventDefault();
                }
            });

        //Side Panel Sub Menu Trigger

            $('.main-menu li a.sub-menu-trigger').on('mouseenter', function(){
                $(this).next('.sub-menu-item').stop().slideDown(500);
            });
            $('.main-menu li').on('mouseleave', function(){
                $('.sub-menu-item').stop().slideUp(500);
            });


        // Progress Circle Initialization

            var count = false;
            
              $('.progress-circle-wrap').waypoint(function (direction){

                  if (direction === 'down') {

                      if(count === false)

                      {

                          $('.progress-circle').each(function(){

                              var percent = $(this).data('percentage');
                              percent = parseFloat(percent/100);
                              // alert(percent)

                                $(this).circleProgress({
                                    value: percent,
                                    size: 150,
                                    startAngle: -Math.PI / 4 * 2,
                                    animation: {
                                      duration: 3500
                                    },
                                    fill: {
                                        color: '#FF1D4D'
                                    },
                                    emptyFill: '#efefef',
                                    thickness: 10
                                }).on('circle-animation-progress', function(event, progress, percent) {
                                        $(this).find('strong').html(parseInt(percent * 100, 10) + '%');
                                      });

                          });
                        
                          count = true;
                      }                      
                  }

              }, { offset: 650 });

                 

        // Main header position adjustment and transitions on scroll

            $('#about').waypoint(function (direction) {
          
                if (direction === 'down') 
                {
                    $('.main-header.bottom').addClass('header-fix'); 
                    $('.main-header.bottom').removeClass('header-bottom');
                    $('.logo img').css('display','inline-block');
                    $('.header-social-icons span').css('display','inline-block');            
                } 
                else 
                {  
                    $('.main-header.bottom').removeClass('header-fix');
                    $('.main-header.bottom').addClass('header-bottom');
                    $('.logo img').css('display','none');
                    $('.header-social-icons span').css('display','none');   
                }
            },{ offset:100 });    
        


        //To-top position adjustment on scroll

            $('#master-wrap').waypoint(function (direction) {

                  
                  if (direction === 'down') 
                  
                  $(".to-top").animate({bottom:'40px', opacity: '1'});

                  else 
                    
                    $(".to-top").animate({bottom:'-40px', opacity: '0'});
                  
                 
            },{ offset: -300 }); 
      

        // Cursor fadeIn/fadeOut
          
            $('.control').on('hover', function(){
            
                $(this).find($('.owl-controls')).fadeIn(300);

            }, function(){ 

              $(this).find($('.owl-controls')).fadeOut(300);

            });

            var timer;
            var fadeInBuffer = false;
              $('.control').mousemove(function () {
                  if (!fadeInBuffer) {
                      if (timer) {
                          clearTimeout(timer);
                          timer = 0;
                      }
                      $('.control .owl-controls').fadeIn();
                      $('.control').css({
                          cursor: ''
                      });
                  } else {
                      fadeInBuffer = false;
                  }


                  timer = setTimeout(function () {
                      $('.control .owl-controls').fadeOut();
                      $('.control').css({
                          cursor: 'none'
                      });
                      fadeInBuffer = true;
                  }, 5000);
              });


        // Open pop-up window

            $('.open-popup-window').on('click', function(){
                var link_url = $(this).attr('href');
                window.open(link_url, 'newwindow', 'width=650, height=500, top=200, left=150'); 
                return false;
            });



        // Lightbox Initialization

            $('a.text-box').featherlight({
                targetAttr: 'href'
            });

            $('.video').featherlight({iframeMaxWidth: '100%', iframeWidth: 500,iframeHeight: 300});

            $('.portfolio-video').featherlight({iframeMaxWidth: '100%', iframeWidth: 500,iframeHeight: 300});

            $('.gallery').featherlightGallery({
                previousIcon: "<i class='icon ion-ios-arrow-thin-left'></i>",     /* Code that is used as previous icon */
                nextIcon: "<i class='icon ion-ios-arrow-thin-right'></i>",        /* Code that is used as next icon */
                closeIcon: "<i class='icon ion-android-close'></i>",        /* Code that is used as close icon */ 
                openSpeed:    300,
                closeSpeed:   300
            });

            $('.portfolio-gallery').featherlightGallery({
                previousIcon: "<i class='icon ion-ios-arrow-thin-left'></i>",     /* Code that is used as previous icon */
                nextIcon: "<i class='icon ion-ios-arrow-thin-right'></i>",        /* Code that is used as next icon */
                closeIcon: "<i class='icon ion-android-close'></i>",        /* Code that is used as close icon */ 
                openSpeed:    300,
                closeSpeed:   300
            });

            
        // Remove place holder on focus

            $('input,textarea').focus(function(){
                $(this).data('placeholder',$(this).attr('placeholder'));
                $(this).attr('placeholder','');
            });

        // Add place holder on blur

            $('input,textarea').blur(function(){
                  $(this).attr('placeholder',$(this).data('placeholder'));
            });


        //Contact From Trigger

            $('.contact-form-trigger').on('click',function(){
              $('.contact-form-wrap').fadeIn(500);
            });

            $('.contact-form-close-btn').on('click',function(){
              $('.contact-form-wrap').fadeOut(500);
            });


        // Contact Form Ajax Section

            $('#contactform').submit(function(){

                  $('.md-content').hide();
                  $('.launch_modal').trigger("click");

                  //alert(1);
                  $.ajax({
                    type: $("#contactform").attr('method'),
                    url: $("#contactform").attr('action'),
                    data: $("#contactform").serialize(),
                    success: function(data) {
                      if(data == 'success')
                      {
                          
                          $('#contactform').each(function(){ 
                            this.reset();
                          });

                          $('#contactform input#name').attr('placeholder',$('#contactform input#name').data('placeholder'));
                          $('#contactform input#name').removeClass('error-msg');

                           $('#contactform input#email').attr('placeholder',$('#contactform input#email').data('placeholder'));
                          $('#contactform input#email').removeClass('error-msg');

                           $('#contactform textarea#message').attr('placeholder',$('#contactform textarea#message').data('placeholder'));
                          $('#contactform textarea#message').removeClass('error-msg');
                          
                          $('.md-content').show();

                          $('.md-close').on('click',function(){

                            $('.contact-form-wrap').fadeOut(1000);

                          });

                      }
                      else
                      {
                        $('.md-content').show();
                        $('.md-content h3').html('Something went wrong!');
                        $('.md-content p').html('Please try again.');
                      }
                    }
                  });
                  return false;
            });

          


        // Owl Carousel section countinues  

            $(".progress-circle-slider").owlCarousel({

                items:4,
                autoHeight: true,
                smartSpeed: 450,
                dots: true,
                mouseDrag: false,
                responsive:{
                    0:{
                      items:1
                    },

                    376:{
                      items:2
                    },

                    601:{
                      items:3
                    },

                    961:{
                      items:4
                    }
                }
            });


            $(".testimonial-slider").owlCarousel({

                loop: true,
                autoHeight: true,
                autoplay: true,
                autoplayTimeout: 3000,
                dots: true,
                nav:false,
                items: 1,
                smartSpeed: 450

            });


            $(".blog-slider").owlCarousel({

                items:3,
                margin: 30,
                smartSpeed: 450,
                dots: true,
                mouseDrag: false,
                responsive:{
                    0:{
                      items:1
                    },

                    601:{
                      items:2
                    },

                    961:{
                      items:3
                    }
                }

            });

      });

})();
