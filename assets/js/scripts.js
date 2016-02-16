// script.js
$(document).ready(function() {

	// var declarations
	var headingHeight = $('#heading').outerHeight();

	//// functions
	// nav bar animation
	function animateNavBar(w) {
		// check height
		if (w.scrollTop() > headingHeight) {
			// make position fixed
			$('nav').css({'position':'fixed', 'background-color':'white'});
			$('nav a').css({'color':'#443850', 'font-weight':'600'});
			$('nav a').hover(
				function() {
					$(this).css({'background-color': '#E2DCEB'});
				}, function() {
					$(this).css({'background-color': 'transparent'});
				}
			);
			$('#placeholder').css({'display':'block'});
			// change color
		} else {
			$('nav').css({'position':'relative', 'background-color':'rgba(0, 0, 0, 0.6)'});
			$('nav a').css({'color':'white', 'font-weight':'400'});
			$('nav a').hover(
				function() {
					$(this).css({'background-color': 'rgba(0, 0, 0, 0.5)'});
				}, function() {
					$(this).css({'background-color': 'transparent'});
				}
			);
			$('#placeholder').css({'display':'none'});
		}
	}

	//// event listeners
	
	// on scroll animations
	animateNavBar($(window));

	$(window).scroll(function() {
		// navbar animation
		animateNavBar($(window));
	});

});