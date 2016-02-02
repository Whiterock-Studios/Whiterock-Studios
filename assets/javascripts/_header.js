jQuery(document).ready(function($) {
	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 300) {
	        $("header").addClass('header-scroll');
	    } else {
	       $("header").removeClass('header-scroll');
	    }
	});

	// grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init();
});