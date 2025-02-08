/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	
// > testimonial function by = slick.min.js ========================== //

	function testimonial_v_slider(){
		jQuery('.slick-testimonials-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			vertical: true,
			asNavFor: '.slick-testimonials-thumbnails',
			responsive: [
				{
				breakpoint: 480,
				settings: {vertical: false,}
				}
			]
		});
		
		jQuery('.slick-testimonials-thumbnails').slick({
			slidesToShow:3,
			slidesToScroll:1,
			centerMode: true,
			asNavFor: '.slick-testimonials-content',
			vertical: true,
			focusOnSelect: true,
			responsive: [
				{
				breakpoint: 1200,
				settings: {slidesToShow:3}
				},
				{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow:3
				}
				}
			]
		});
	}

	// > testimonial function by = slick.min.js ========================== //

	function testimonial_2_slider(){
		jQuery('.slick-testimonials-2').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			vertical: false,
			autoplay:true,
			asNavFor: '.slick-testimonials-2-thumb',
			responsive: [
				{
					breakpoint: 768,
					settings: {slidesToShow:1}
				},
				{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
				},

			]
		});
		
		jQuery('.slick-testimonials-2-thumb').slick({
			slidesToShow:3,
			slidesToScroll:1,
			centerMode: true,
			asNavFor: '.slick-testimonials-2',
			vertical: false,
			focusOnSelect: true,
			autoplay:true,
			responsive: [
				{
				breakpoint: 1200,
				settings: {slidesToShow:3}
				},
				{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow:3
				}
				}
			]
		});
	}

	// > testimonial function by = slick.min.js ========================== //

	function testimonial_3_slider(){
		jQuery('.slick-testimonials-3').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			vertical: false,
			autoplay:true,
			asNavFor: '.slick-testimonials-3-thumb',
			responsive: [
				{
					breakpoint: 1025,
					settings: {slidesToShow:2}
				},
				{
					breakpoint: 768,
					settings: {slidesToShow:1}
				},
				{
					breakpoint: 480,
					settings: {slidesToShow:1}
				},

			]
		});
		
		jQuery('.slick-testimonials-3-thumb').slick({
			slidesToShow:3,
			slidesToScroll:1,
			centerMode: true,
			asNavFor: '.slick-testimonials-3',
			vertical: false,
			focusOnSelect: true,
			autoplay:false,
			responsive: [
				{
				breakpoint: 1200,
				settings: {slidesToShow:3}
				},
				{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow:3
				}
				}
			]
		});
	}	
	 

//--------Home 1 Slider------------//
	function slider_home1(){
		var swiper = new Swiper(".twm-slider", {
			slidesPerView: 1,
			speed: 3000,
			grabCursor: true,
			parallax: true,
			loop:true,
			autoplay: true,
			autoplay: {delay: 5000,},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
		});
	}

//--------Home 2 Slider------------//
	function slider_home2(){
		var swiper = new Swiper(".twm-slider2", {
			slidesPerView: 1,
			speed: 3000,
			grabCursor: true,
			parallax: true,
			effect: 'fade',
			speed: 2000,
			loop:true,
			autoplay: false,
			autoplay: {delay: 4000,},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}	
//--------Home 3 Slider------------//
function slider_home3(){
	var swiper = new Swiper(".twm-slider3", {
		slidesPerView: 1,
		speed: 1000,
		grabCursor: true,
		parallax: true,
		effect: 'fade',
		loop:true,
		autoplay: true,
		autoplay: {delay: 10000,},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: false,
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
	
	function bg_image_moving(){
		jQuery( function() {			  
		jQuery('.bg-image-moving').bgscroll({scrollSpeed:30 , direction:'v' });
		jQuery('.bg-image-moving2').bgscroll({scrollSpeed:20 , direction:'h'});
		});
	}

	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  
     
 	function lightbox_popup(){
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery : true,	
            thumb_attr: 'data-lcl-thumb', 
            
            skin: 'minimal',
            radius: 0,
            padding	: 0,
            border_w: 0,
        });
	}			

	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			jQuery('.modal').on('show.bs.modal', reposition);
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}
	
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}
		
	function sticky_sidebar(){		
		$('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}

	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}	
	function placeholderSupport(){
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
	}	
	function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});
	
	}
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	

	function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
 	}	

	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		nav:false,
		dots: true,				
		margin:5,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:4
			}
		}
	});
	}
	function home_client_carousel_2(){
		jQuery('.home-client-carousel2').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:6
				}
			}
		});
	}

	function home_client_carousel_3(){
		jQuery('.home-client-carousel3').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:6
				}
			}
		});
	}	
	
	function services_gallery_carousel(){
		jQuery('.services-gallery-one').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:15,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				767:{
					items:2,
				},
				1000:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}

		function services_gallery_carousel4(){
			jQuery('.services-gallery-four').owlCarousel({
				loop:true,
				nav:true,
				dots: false,				
				margin:15,
				autoplay:true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive:{
					0:{
						items:1,
					},
					480:{
						items:1,
					},			
					767:{
						items:2,
					},
					1000:{
						items:2,
					},
					1200:{
						items:3
					}
				}
			});
		}

	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	

	function booking_form(){
		jQuery("div.booking-tab-menu>div.list-group>a").click(function(e) {
			e.preventDefault();
			jQuery(this).siblings('a.active').removeClass("active");
			jQuery(this).addClass("active");
			var index = $(this).index();
			jQuery("div.booking-tab>div.booking-tab-content").removeClass("active");
			jQuery("div.booking-tab>div.booking-tab-content").eq(index).addClass("active");
		});
	}

	function project_carousel(){
		jQuery('.project-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:70,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				640:{
					items:1
				},						
				991:{
					items:2
				}
			}
		});
	}

	function project_carousel_2(){
		jQuery('.project-carousel-2').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:70,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				767:{
					items:2
				},						
				1024:{
					items:3
				},
				1365:{
					items:4
				}
			}
		});
	}

	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-wrap');
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
				});

			$container.imagesLoaded().progress( function() {
				$container.isotope('layout');
			});

			jQuery('.masonry-filter li').on('click',function() {                           
				var selector = jQuery(this).find("a").attr('data-filter');
				jQuery('.masonry-filter li').removeClass('active');
				jQuery(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	}
			
	function page_loader() {
		$('.loading-area').fadeOut(1000);
	}

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
	

	jQuery(document).ready(function() {
	    testimonial_v_slider(),
	    testimonial_2_slider(),
	    testimonial_3_slider(),
		slider_home1(),
		slider_home2(),
		slider_home3(),		
		bg_image_moving(), 		
		site_search(),	
		video_responsive(),      
		lightbox_popup(),
		magnific_video(),
		popup_vertical_center();
		sticky_header(),		
		sticky_sidebar(),
		scroll_top(),
		input_type_file_form(),
		placeholderSupport(),
		mobile_nav(),
		mobile_side_drawer(),
		home_client_carousel(),
	    home_client_carousel_2(),
	    home_client_carousel_3(),
		services_gallery_carousel(),
		services_gallery_carousel4(),
		counter_section(),
		booking_form(),
	     project_carousel();
	     project_carousel_2();      
				
	}); 	

jQuery(window).on('load', function () {
	masonryBox(),
	page_loader();
});

jQuery(window).on('scroll', function () {
	color_fill_header();
});
	

 jQuery(document).on('submit', 'form.cons-contact-form', function(e) {
  e.preventDefault();

  emailjs.init("XKFeCMgzmV_OEqdej");

  const templateParams = {
      user_name: $(this).find('input[name="name"]').val(),
      user_email: $(this).find('input[name="email"]').val(),
	  user_phone: $(this).find('input[name="phone"]').val(),
      subject: $(this).find('input[name="subject"]').val(),
      message: $(this).find('textarea[name="message"]').val(),
  };

  $('#contact-btn').html("Please Wait...").attr('disabled', 'disabled');

  emailjs.send("service_9f7p31m", "template_4j3iq7p", templateParams)
      .then(
          function() {
              $("#contact-msg").html(
                  '<div class="alert alert-success text-center"><strong><i class="fa fa-check-square fa-lg"></i>  Success! </strong>Your Enquiry has been Received, We will get back to you soon!!!</div>'
              );
              $("form.cons-contact-form")[0].reset();
          },
          function(error) {
              $("#contact-msg").html(
                  '<div class="alert alert-danger text-center"><strong><i class="fa fa-remove fa-lg"></i>  Failed! </strong>Error in sending your Enquiry! Please try again later.</div>'
              );
          }
      )
      .finally(function() {
          $('#contact-btn').html("<span>Submit Now</span><em></em>").attr("disabled", false);
      });
});

})(window.jQuery);