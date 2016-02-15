// script.js
$(document).ready(function() {

	var bannerHeight = $('.banner').outerHeight();

	// on scroll animations
	$(window).scroll(function() {
		// navbar animation
		animateNavBar($(window));
	}

	// functions
	function animateNavBar(w) {
		// check height
		if (w.scrollTop() > bannerHeight) {
			// make position fixed

			// change color
		}
	}


	// event listeners





})