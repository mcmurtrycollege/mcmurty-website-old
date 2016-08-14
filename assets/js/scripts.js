// script.js
$(document).ready(function() {

	// var declarations
	var headingHeight = $('.heading').outerHeight();
	var colorDarkPurple = '#443850';
	var colorPurple = '#8964A1';
	$('.nav-dropdown .nav-link').click(function(e) {
	    e.preventDefault();
	});

	//// functions

	// miscellaneous

	// committees logic
	$('.committee-quick-link').click(function(e){
		e.preventDefault();
		$('.committee-quick-link').css({'color':'white'});
		$(this).css({'color':colorDarkPurple});

		var text = $(this).text().toLowerCase();

		$(".selected").removeClass("selected");
		$("#" + text).addClass("selected");
	});

	// associates logic
	$('.menu-link').click(function(e){
		e.preventDefault();
		$('.menu-link').css({'color':'white'});
		$(this).css({'color':colorDarkPurple});

		var text = $(this).text();
		var fellows = {"Masters":"masters", "Head Resident Fellows":"hrf", "2nd Floor RAs":"2ra", "3rd Floor RAs":"3ra", "College Coordinator":"cc"};

		$(".selected").removeClass("selected");
		$(".fellow-" + fellows[text]).addClass("selected");
	});

	// nav bar helpers
	function animateNavColorPosition(position, bgColor, accentColor, fontColor, fontAccent, fontWeight, fontOldWeight) {

		$('nav').css({'position': position, 'background-color': bgColor});
			$('.nav-link').css({'color':fontColor, 'font-weight':fontWeight});
			$('.nav-single').hover(
				function() {
					$(this).css({'background-color': accentColor});
					$(this).css({'color':fontAccent, 'font-weight':fontWeight});
				}, function() {
					$(this).css({'background-color': 'transparent'});
					$(this).css({'color':fontColor, 'font-weight':fontOldWeight});
				}
			);
			$('.nav-dropdown').hover(
				function() {
					$(this).css({'background-color': accentColor});
					$('.nav-link', this).css({'color':fontAccent, 'font-weight':fontWeight});
				}, function() {
					$(this).css({'background-color': 'transparent'});
					$('.nav-link', this).css({'color':fontColor, 'font-weight':fontOldWeight});
				}
			);
	}

	function animateDropDown(bgColor) {

		var menu = '.nav-submenu';

		$('.nav-dropdown').hover(
			function() {
				$(menu, this).show();
				$(menu, this).css({'background-color': bgColor});
			}, function() {
				$(menu, this).hide();
			}
		);
	}

	// nav bar animation
	function animateNavBar(w) {
		// check height
		if (w.scrollTop() > headingHeight) {
			// make position fixed + change color
			animateNavColorPosition('fixed', 'white', '#4C4b63', colorDarkPurple, 'white', '600', '600');
			$('#placeholder').css({'display':'block'});

			// dropdown menu
			animateDropDown('#4C4b63');
		} else {
			// make position fixed + change color
			animateNavColorPosition('relative', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.5)', 'white', colorPurple, '400', '400');
			$('#placeholder').css({'display':'none'});

			// dropdown menu
			animateDropDown('rgba(0, 0, 0, 0.8)');
		}
	}
	
	// on resize
	// on scroll calls
	$(window).scroll(function() {
		// navbar animation
		animateNavBar($(window));
	});

	// on load calls
	animateNavBar($(window));

});