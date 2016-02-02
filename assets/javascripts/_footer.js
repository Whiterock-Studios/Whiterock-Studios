document.addEventListener("DOMContentLoaded", function()
{
	function helloFormHeight()
	{
		var formHeight = document.querySelector("form .left").clientHeight;
		document.querySelector(".hello-form-button").style.width = formHeight + "px";
	}

	helloFormHeight();


	window.onresize = function() {
		helloFormHeight();
	}
});