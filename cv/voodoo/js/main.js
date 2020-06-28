


//========================================================================
	function gridSetup(gridIdeal) {

		var grid = $('#grid');
		if( !grid.length )
			return

		var gridW = grid.width();

		//Could be Math.floor for round down
		var gridFit = Math.ceil( gridW / gridIdeal );
		var gridRemainder = gridW - ( gridIdeal * gridFit );
		var gridDistribute = Math.floor( gridRemainder / gridFit );
		var gridNew = gridIdeal + gridDistribute;
		var frame = gridNew-30;
		//new css
		var gridCSS = "\
		<style id='dynamic-style'>\
			#grid article{width:"+gridNew+"px; height:"+gridNew+"px;}\
			#grid article .vm span{width:"+frame+"px;}\
		<style>";

		//Write new grid CSS to header.
		$('style#dynamic-style').replaceWith(gridCSS);

		//Gap fill!
		howMany = $('#grid article').length;
		rowCount = gridFit;
		remainder = rowCount - (howMany % rowCount);
		$('#grid .filler').width(gridNew*remainder).height(gridNew);

		if(remainder == rowCount){
			$('#grid .filler').hide();
		}else{
			$('#grid .filler').show();
		}

	};
	var gridSize = 320;



$( document ).ready(function() {


	/* Home Slider
	=============================================  */
	function activateHomeSlider(){

		// Show slider
		$('#homeCarousel').coolSlider({

			type: 'scroll',			// 'fade' or 'scroll'
			swipe: 'scroll',			// false, 'fade' or 'scroll'
			slides: '.slide',		// css selector
			timer: 5000,			// milliseconds (time before changing slides when autoplay is on)
			speed: 1000,				// milliseconds (speed of transition between slides)
			showFirst: 1,			// number or 'random'

			loop: true,				// true or false
			autoplay: true,			// true or false
			keyboard: false,		// true or false
			fixHeight: false,		// true or false (for better results, load the "imagesLoaded" plugin)

			// Class Names
			selectedSlideClass: 'selected',
			previousSlideClass: 'previous',
			controlsDisabledClass: 'disabled',
			controlsPausedClass: 'paused',
			controlsSelectedClass: 'selected',

			// Controls Selectors
			prev:		'#homeCarousel #prev',
			next:		'#homeCarousel #next',
			play:		'#controls .play',
			pause:		'#controls .pause',
			links:		'#pagination li',
			linksNumber:'.number',
			current:	'#controls .current',
			total:		'#controls .total',
			visualTimer:'#timer .progress',

			// Callbacks
			init: function(){},
			slidestart: function(){},
			slideend: function(){},
			touchstart: function(){},
			touchmove: function(){},
			touchend: function(){},
			swipesuccess: function(){},
			swipefail: function(){}

		});
	}



	// Home Intro
	// =============================================

	// Set vars
	var cookieCheck	= readCookie( 'voodoo' );
	var Home		= $('#home');
	var HomeNav		= $('#home nav');
	var HomeFader	= $('#home #fader');
	var HomeIntro	= $('#homeIntro');
	var HomeCtrls	= $('#prev, #next, #pagination');
	//	$('.windowFrame').addClass( 'on' );


	// ----- First Time -----
	// if( !cookieCheck ) {
	//
	// 	HomeIntro.show();
	//
	// 	// Hide "fader", create cookie
	// 	createCookie( 'voodoo', 'intro', 7 );
	// 	HomeFader.hide();
	//
	// 	// Get images
	// 	var IntroSlides = HomeIntro.children( '#p1, #p2, #p3, #homeCarousel .slide:first' );
	// 	var IntroImages = $();
	// 	IntroSlides.each(function(){
	// 		var image = $(this).css( 'background-image' ).match( /url\((['"])?(.*?)\1\)/ );
	// 		IntroImages = IntroImages.add( $('<img>').attr( 'src', image.pop() ) );
	// 	});
	//
	// 	// Hide slides
	// 	IntroSlides.hide();
	//
	// 	// Flags
	// 	var loaded1and2 = false;
	// 	var loaded3 = false;
	// 	var loadedSlider = false;
	//
	// 	// Callbacks
	// 	function afterLoading1And2() {
	//
	// 		// Run this only once
	// 		if( loaded1and2 )
	// 			return;
	// 		loaded1and2 = true;
	// 		console.log( 'loaded 1 and 2' );
	//
	// 		// Show slides
	// 		IntroSlides.show();
	//
	// 		// Fade out loader gif
	// 		$('#p0 img').fadeOut( 1000, function(){
	//
	// 			// Fade out loader slide
	// 			$('#p0').fadeOut( 1000, function(){
	//
	// 				// Fade out slide 1
	// 				$('#p1').delay( 1000 ).fadeOut( 1000, function(){
	//
	// 					// Trigger next callback
	// 					IntroImages.eq( 2 ).imagesLoaded().always( afterLoading3 );
	// 					setTimeout( afterLoading3, 5000 );
	// 				});
	//
	// 			});
	// 		});
	// 	}
	//
	// 	function afterLoading3() {
	//
	// 		// Run this only once
	// 		if( loaded3 )
	// 			return;
	// 		loaded3 = true;
	// 		console.log( 'loaded 3' );
	//
	// 		// Fade out slide 2
	// 		$('#p2').delay( 1000 ).fadeOut( 1000 ).queue(function(){
	// 			$(this).dequeue();
	//
	// 			// Trigger next callback
	// 			IntroImages.eq( 3 ).imagesLoaded().always( afterLoadingSlider );
	// 			setTimeout( afterLoadingSlider, 5000 );
	// 		});
	// 	}
	//
	// 	function afterLoadingSlider() {
	//
	// 		// Run this only once
	// 		if( loadedSlider )
	// 			return;
	// 		loadedSlider = true;
	// 		console.log( 'loaded slider' );
	//
	// 		// Fade out slide 3 and init carousel
	// 		setTimeout( function(){
	//
	// 			activateHomeSlider();
	// 			HomeIntro.fadeOut( 1000 ).queue(function(){
	// 				$(this).dequeue();
	// 					$('.windowFrame').addClass( 'on' );
	// 				// Show nav, slider controls, and enable page scrolling
	// 				HomeNav.delay( 1000 ).animate({ opacity:1 }, 1000, function(){
	// 					Home.css( 'overflow', 'auto' );
	// 				});
	// 				HomeCtrls.delay( 1300 ).animate({ opacity:1 }, 1000);
	// 			});
	//
	// 		}, 1000 );
	//
	// 	}
	//
	// 	// Trigger first callback
	// 	IntroImages.slice( 0, 2 ).imagesLoaded().always( afterLoading1And2 );
	// 	setTimeout( afterLoading1And2, 5000 );
	//
	//
	// }
	// // ----- Default -----
	// else{
	//
	// 	Home.css( 'overflow', 'auto' );
	// 	HomeFader.show();
	// 	HomeIntro.hide();
	// 	HomeNav.delay( 1500 ).animate({ opacity:1 }, 1000, function(){
	// 		$('.windowFrame').addClass( 'on' );
	// 		HomeCtrls.animate({ opacity:1 }, 1000 );
	// 	});
	// 	activateHomeSlider();
	//
	// }

	Home.css( 'overflow', 'auto' );
	HomeFader.show();
	HomeIntro.hide();
	HomeNav.delay( 1500 ).animate({ opacity:1 }, 1000, function(){
		$('.windowFrame').addClass( 'on' );
		HomeCtrls.animate({ opacity:1 }, 1000 );
	});
	activateHomeSlider();


	/* check for ie11
	=============================================*/
	if(navigator.userAgent.match(/Trident.*rv:11\./)) {
		$('body').addClass('ie11');
	}

	/* Fade in-out functions
	=============================================*/
	$('#fader').delay(300).fadeOut(1000,function(){
		if( $('body').attr('id') == "content" ){
			$('.windowFrame').addClass( 'on' );
		}
	});
	$('#content nav').delay(1500).animate({
		opacity:1
	}, 1000);

	$('.fadeLink').click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('#fader').fadeIn(1000, newpage);
	});

	function newpage() {
		window.location = newLocation;
	}




	$('#brandSlides').coolSlider({

		type: 'fade',			// 'fade' or 'scroll'
		swipe: 'false',			// false, 'fade' or 'scroll'
		slides: '.slide',		// css selector
		timer: 2500,			// milliseconds (time before changing slides when autoplay is on)
		speed: 800,				// milliseconds (speed of transition between slides)
		showFirst: 1,			// number or 'random'

		loop: true,				// true or false
		autoplay: true,			// true or false
		keyboard: false,		// true or false
		fixHeight: false		// true or false (for better results, load the "imagesLoaded" plugin)

	});





	<!--
	// Email obfuscator script 2.1 by Tim Williams, University of Arizona
	// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
	// This code is freeware provided these four comment lines remain intact
	// A wizard to generate this code is at http://www.jottings.com/obfuscator/
	{ coded = "7lOp@MppkppHiDKq7MD.HpI.KS"
	  key = "ZetCgoM2US8PwNzAFdc6jfKilRyDqxYp5EsmWQL30TvkHuJO971BVhXb4GarnI"
	  shift=coded.length
	  link=""
	  for (i=0; i<coded.length; i++) {
		if (key.indexOf(coded.charAt(i))==-1) {
		  ltr = coded.charAt(i)
		  link += (ltr)
		}
		else {
		  ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
		  link += (key.charAt(ltr))
		}
	  }
		$('.mainEmail').html("<a href='mailto:"+link+"' target='_blank'>@</a>");
		$('.mainEmail2').html("<a href='mailto:"+link+"' class='button' target='_blank'>email</a>");
		$('.mainEmail3').html("<a href='mailto:"+link+"' target='_blank'>email</a>");
	}
	//-->



	//===========add style tag for post load styles
	$('head').append('<style id="dynamic-style"></style>');

	//===========initialize grid
	gridSetup(gridSize);


	//================ Sub nav
	$('#navProjectsButton').click(function(){

		$('#navProjects').fadeIn();
		return false;
	});
	$('#navProjects .close').click(function(){
		$('#navProjects').fadeOut();
		return false;
	});

	//================
	$('#homeCarousel .slide a').hover(

		function(){ $(this).closest('.slide').children('.bg').toggleClass('hide');}

	);

	/*================ Lightbox*/
	//$('a.lightBox').nivoLightbox();


	/*================ Stickyness*/
	if( typeof $.fn.sticky == 'function' ) {
		$("nav > div").sticky({ topSpacing:0 });
	}

	//nav
	$('#menuToggle').click(function(){
		$('nav').fadeToggle();
		$(this).blur();
		return false;
	});


	quickFormTotal = 5;
	quickFormCount = 0;
	quickFormProgress = 0;


	$('#quickForm .req').keyup(function(){

		quickFormCount = 0;

		$('#quickForm .req').each(function() {
			if ( $(this).val() ){
				quickFormCount++;
			}
        });

		quickFormProgress = (quickFormCount*20)+'%';
		$('#formProgress div').width(quickFormProgress);

		if( quickFormCount >= quickFormTotal ){
			$('#quickForm .button').removeAttr('disabled');
		}
		else{
			$('#quickForm .button').attr( "disabled", "disabled" );
		}

		if ( $(this).val() ){
			$(this).addClass('good');
		}
		else{
			$(this).removeClass('good');
		}


	});




});




$( window ).resize(function() {

	//===========initialize grid
	gridSetup(gridSize);

});
