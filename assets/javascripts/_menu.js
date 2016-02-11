document.addEventListener( "DOMContentLoaded" , function ()
{
	var burger = document.getElementById( "burger" ) ,
		menuLinks = document.querySelectorAll( "#main-menu-inner a" ) ,
		menuInner = document.getElementById( "main-menu-inner" ) ,
		burgerOpen = 0;

	burger.onclick = function ()
	{
		console.log( "onclick burger fu" );
		if ( burgerOpen == 0 ) {
			burger.classList.add( "cooked" );
			menuInner.style.display = "block";
			TweenMax.staggerTo( menuLinks , 0.2 , {opacity: 1 , x: 0 , ease: Elastic.easeInOut} , 0.1 );
			burgerOpen = 1;
		}
		else {
			burger.classList.remove( "cooked" );
			menuInner.style.display = "none";
			TweenMax.staggerTo( menuLinks , 0.2 , {opacity: 0 , x: - 300 , ease: Elastic.easeInOut} , 0.1 );
			burgerOpen = 0;
		}
	};
} );