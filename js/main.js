"use strict";

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $(".scrollUp");

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass("scrollUp-visible") : $back_to_top.removeClass("scrollUp-visible scrollUp-fade-out");
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass("scrollUp-fade-out");
		}
	});

	//smooth scroll to top
	$back_to_top.on("click", function(event){
		event.preventDefault();
		$("body,html").animate({
			scrollTop: 0 ,
		}, scroll_top_duration
		);
	});

});


$(".responsive-photo").on("mouseover", function() {
	$(".tint").css("height", $(this).height());
});



// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();



$(".responsive-photo").on("click", function() {
	$(this).addClass("selected");
	$(".fullpage-overlay").css("visibility", "visible");
	$(".close-overlay").css("visibility", "visible");
	$(this).animate({
		"width": winWidth,
	});
});

$(".close-overlay").on("click", function() {
	$(".responsive-photo").removeClass("selected");
	$(".responsive-photo").animate({
		"width": "100%",
		"height": "100%",
	});
	$(".fullpage-overlay").css("visibility", "hidden");
	$(this).css("visibility", "hidden");
});


// function resizeDiv() {
// 	$(".three-column-photo-layout").css({
// 		"width": winWidth,
// 		"height": winHeight,
// 	});
// }


// // set initial div height / width
// $('div').css({
//     'width': winWidth,
// 'height': winHeight,
// });

// // make sure div stays full width/height on resize
// $(window).resize(function(){
//     $('div').css({
//     'width': winWidth,
//     'height': winHeight,
// });
// });

// $(".responsive-photo").on("click", function() {
// 	$(".fullpage-overlay").html("<img src='" + $(this).prop("href") + "' width='" + $(this).attr("data-width") + "' height='" + $(this).attr("data-height") + "'>");
// 	$(".fullpage-overlay").fadeIn();
// });