jQuery(document).ready(function($) {
	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 300) {
	        $("header").addClass('header-scroll');
	    } else {
	       $("header").removeClass('header-scroll');
	    }
	    // if($(window).scrollTop() > 800 && $(window).scrollTop() < 1200) {
	    // 	$('header').addClass('redbg');
	    // 	$('header').removeClass('bluebg');
	    // } else if($(window).scrollTop() > 1200 && $(window).scrollTop() < 1600) {
	    // 	$('header').addClass('bluebg');
	    // 	$('header').removeClass('redbg');
	    // }
	});

	// $('#burger').hover(function() {
	// 	$('main').addClass('blur');
	// }, function() {
	// 	$('main').removeClass('blur');
	// });

	// grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init();
});