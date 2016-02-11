document.addEventListener( "DOMContentLoaded" , function ()
{

	var circleTop = (document.getElementById( "circle-1" ).offsetTop) + 500 ,
		windowScroll = window.pageYOffset || document.documentElement.scrollTop ,
		circleCounter = 1 ,
		x = 0;

	function circleLoad ()
	{
		document.getElementById( "circle-" + circleCounter ).classList.add( "circle-load" );

		if ( circleCounter > 3 ) {
			clearInterval( circleInterval );
		}
		circleCounter ++;
	}

	document.onscroll = function ()
	{

		windowScroll = window.pageYOffset || document.documentElement.scrollTop;


		if ( circleTop <= windowScroll && x == 0 ) {

			x = 1;

			circleLoad();

			circleInterval = setInterval( circleLoad , 800 );
		}
	}

} );

