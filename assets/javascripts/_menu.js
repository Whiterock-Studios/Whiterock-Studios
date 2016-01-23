jQuery(document).ready(function($) {
	$menuItemCounter = 0;
	$('#main-menu-inner a').each(function() {
		$menuItemCounter++;
		$(this).addClass('main-menu-item_' + $menuItemCounter);
	});

	$menuState = 0;
	
	$('#burger').on('click',function() {
		$(this).toggleClass('cooked');
		$('#main-menu-inner').fadeToggle("300");

		$loopCounter = 1;

		$slideInInterval = setInterval(itemSlideIn, 100);
			
		function itemSlideIn() {
			if ( $loopCounter <= $menuItemCounter ){
				if ( $menuState == 0 ) {
					$('.main-menu-item_' + $loopCounter).addClass("slide-in");
				} else {
					$('.main-menu-item_' + $loopCounter).removeClass("slide-in")
				}
				$loopCounter++;
			} else {
				clearInterval($slideInInterval);
				if ( $menuState == 0 ){
					$('.main-menu-item_' + $loopCounter).addClass("slide-in");
					$menuState = 1;
				} else {
					$('.main-menu-item_' + $loopCounter).removeClass("slide-in")
					$menuState = 0;
				}
			}
		}
	});
});
