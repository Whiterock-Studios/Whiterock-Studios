document.addEventListener("DOMContentLoaded", function ()
{
	window.onscroll = function()
	{
		if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
		{
	        document.querySelector("header").classList.add("header-scroll");
	    }
	    else
	    {
	        document.querySelector("header").classList.remove("header-scroll");
	    }
	}

	// grab an element
	var myElement = document.querySelector("header"),
	// construct an instance of Headroom, passing the element
	headroom  = new Headroom(myElement);
	// initialise
	headroom.init();
});
