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