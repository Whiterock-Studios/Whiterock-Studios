document.addEventListener( "DOMContentLoaded" , function ()
{

	console.log( "DOM Loaded" );
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

		console.log( "WindowScroll = " + windowScroll + " Circle Scroll = " + circleTop
		)
		;
		if ( circleTop <= windowScroll && x == 0 ) {

			x = 1;

			circleLoad();

			circleInterval = setInterval( circleLoad , 1000 );
		}
	}

} );

