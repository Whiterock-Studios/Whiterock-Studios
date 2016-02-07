// Layzr.js 1.4.2 - A small, fast, modern, and dependency-free library for lazy loading.
// Copyright (c) 2015 Michael Cavalea - http://callmecavs.github.io/layzr.js/
// License: MIT
 
!function(t,i){"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?module.exports=i():t.Layzr=i()}(this,function(){"use strict";function t(t){this._lastScroll=0,this._ticking=!1,t=t||{},this._optionsContainer=document.querySelector(t.container)||window,this._optionsSelector=t.selector||"[data-layzr]",this._optionsAttr=t.attr||"data-layzr",this._optionsAttrRetina=t.retinaAttr||"data-layzr-retina",this._optionsAttrBg=t.bgAttr||"data-layzr-bg",this._optionsAttrHidden=t.hiddenAttr||"data-layzr-hidden",this._optionsThreshold=t.threshold||0,this._optionsCallback=t.callback||null,this._retina=window.devicePixelRatio>1,this._srcAttr=this._retina?this._optionsAttrRetina:this._optionsAttr,this._nodes=document.querySelectorAll(this._optionsSelector),this._handlerBind=this._requestScroll.bind(this),this._create()}return t.prototype._requestScroll=function(){this._lastScroll=this._optionsContainer===window?window.pageYOffset:this._optionsContainer.scrollTop+this._getOffset(this._optionsContainer),this._requestTick()},t.prototype._requestTick=function(){this._ticking||(requestAnimationFrame(this.update.bind(this)),this._ticking=!0)},t.prototype._getOffset=function(t){return t.getBoundingClientRect().top+window.pageYOffset},t.prototype._getContainerHeight=function(){return this._optionsContainer.innerHeight||this._optionsContainer.offsetHeight},t.prototype._create=function(){this._handlerBind(),this._optionsContainer.addEventListener("scroll",this._handlerBind,!1),this._optionsContainer.addEventListener("resize",this._handlerBind,!1)},t.prototype._destroy=function(){this._optionsContainer.removeEventListener("scroll",this._handlerBind,!1),this._optionsContainer.removeEventListener("resize",this._handlerBind,!1)},t.prototype._inViewport=function(t){var i=this._lastScroll,e=i+this._getContainerHeight(),o=this._getOffset(t),n=o+this._getContainerHeight(),s=this._optionsThreshold/100*window.innerHeight;return n>=i-s&&e+s>=o&&!t.hasAttribute(this._optionsAttrHidden)},t.prototype._reveal=function(t){var i=t.getAttribute(this._srcAttr)||t.getAttribute(this._optionsAttr);t.hasAttribute(this._optionsAttrBg)?t.style.backgroundImage="url("+i+")":t.setAttribute("src",i),"function"==typeof this._optionsCallback&&this._optionsCallback.call(t),t.removeAttribute(this._optionsAttr),t.removeAttribute(this._optionsAttrRetina),t.removeAttribute(this._optionsAttrBg),t.removeAttribute(this._optionsAttrHidden)},t.prototype.updateSelector=function(){this._nodes=document.querySelectorAll(this._optionsSelector)},t.prototype.update=function(){for(var t=this._nodes.length,i=0;t>i;i++){var e=this._nodes[i];e.hasAttribute(this._optionsAttr)&&this._inViewport(e)&&this._reveal(e)}this._ticking=!1},t});

var layzr = new Layzr();
!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:100,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);
// $(document).ready(function() {
// var movementStrength = 10;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $(".bg-move").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 25;
//           var newvalueY = height * pageY * -1 - 50;
//           $('.bg-move').css("background-position", newvalueX+"px "+newvalueY+"px");
// });


// // set the background size
// $pageIntroHeight = $('.bg-move').outerHeight(),
// $pageIntroWidth = $('.bg-move').outerWidth(),

// $bgHeight = ($pageIntroHeight / 100) * movementStrength,
// $bgWidth = ($pageIntroWidth / 100) * movementStrength,

// $newBgHeight = $bgHeight + $pageIntroHeight,
// $newBgWidth = $bgWidth + $pageIntroWidth;


// if ( $newBgHeight > $newBgWidth ) {
// 	$('.bg-move').css('background-size', $newBgHeight + 'px auto');
// } else {
// 	$('.bg-move').css('background-size', 'auto ' + $newBgWidth + "px");
// }


// console.log("bgHeight is " + $newBgHeight);
// console.log("bgWidth is " + $newBgWidth);
// });

//////////////////////////////// .bgmove is in body.scss
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

			circleInterval = setInterval( circleLoad , 800 );
		}
	}

} );


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

//jQuery(document).ready(function($) {
//	$menuItemCounter = 0;
//	$('#main-menu-inner a').each(function() {
//		$menuItemCounter++;
//		$(this).addClass('main-menu-item_' + $menuItemCounter);
//	});
//
//	$menuState = 0;
//
//	$('#burger').on('click',function() {
//		$(this).toggleClass('cooked');
//		$('#main-menu-inner').fadeToggle("300");
//
//		$loopCounter = 1;
//
//		$slideInInterval = setInterval(itemSlideIn, 100);
//
//		function itemSlideIn() {
//			if ( $loopCounter <= $menuItemCounter ){
//				if ( $menuState == 0 ) {
//					$('.main-menu-item_' + $loopCounter).addClass("slide-in");
//				} else {
//					$('.main-menu-item_' + $loopCounter).removeClass("slide-in")
//				}
//				$loopCounter++;
//			} else {
//				clearInterval($slideInInterval);
//				if ( $menuState == 0 ){
//					$('.main-menu-item_' + $loopCounter).addClass("slide-in");
//					$menuState = 1;
//				} else {
//					$('.main-menu-item_' + $loopCounter).removeClass("slide-in")
//					$menuState = 0;
//				}
//			}
//		}
//	});
//});
