jQuery(document).ready(function($) {

var $circleTop = $('.circle-1').offset().top,
	$windowScroll = $(window).scrollTop(),
	$circleCounter = 1,
	$x = 0;

	$(window).scroll(function() {
		$windowScroll = $(window).scrollTop();


		if ( $circleTop <= $windowScroll ){
			if ($x == 0){
				$x = 1;
				function circleLoad() {
					$('.circle-' + $circleCounter).addClass('circle-load');

					if ( $circleCounter > 3 ) {
						clearInterval($circleInterval);
					}
					$circleCounter++;
				};

				$circleInterval = setInterval(circleLoad, 800);
			} 
		} // end if scroll is past intial
	}); // end of window scroll
}); // end of document ready


