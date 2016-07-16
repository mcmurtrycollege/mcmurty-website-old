// oweek.js
$(document).ready(function() {

	//// var declarations

	// element properties
	var headingHeight = $('#ufo-banner').outerHeight();
	// colors
	var colorDarkPurple = '#443850';
	var colorPurple = '#8964A1';
	// positions
	var earthPos = $("#animate-earth > svg").offset();

	// snap
	var s = Snap("#animate-canvas");
	var earth = Snap("#animate-earth");
	var ufo = s.select("g[id='animate-ufo']");
		ufo.transform("s0.0,0.0");
		ufo.select("path[id='animate-ufo-beam']").attr({
			fillOpacity: 0
		});

	// ufo path + points
	// var ufoPath = s.path("M0 50 C 100 100 200 50 300 80 250 120 400 60 " + earthPos.left + " " + earthPos.top);
	var l1 = earthPos.left / 8;
	var l2 = earthPos.left / 4;
	var l3 = earthPos.left * 3 / 8;
	var l4 = earthPos.left / 2;
	var l5 = earthPos.left * 7 / 8;
	var r1 = l1 + l5;
	var r2 = l2 + l5;
	var r3 = l3 + l5;
	var r4 = l4 + l5;
	var r5 = l5 + l5;
	var e1 = earthPos.top - 130;
	var ufoPath1 = s.path("M 0 75 Q 0 60 " + l1 + " 40 " + l2 + " 60 " + l3 + " 100 " + l4 + " 180 " + l5 + " " + e1);
	var ufoPath2 = s.path("M " + l5 + " " + e1 + " C " + l5 + " " + e1 + " " + r5 + " 70 " + r5 * 1.5 + " 300");
	ufoPath1.attr({
		id: "ufoPath1",
		fillOpacity: 0
	});
	ufoPath2.attr({
		id: "ufoPath2",
		fillOpacity: 0
	})
	
	//// functions
	// ufo path animation
	function animateUfoPath(path) {
		Snap.animate(0, path.getTotalLength(), function (pos) {
			nextPathPt1 = path.getPointAtLength(pos);
			var len = path.getTotalLength();
			var deg = 0.8 * (360 % len / pos) - 45;

			ufo.transform("t" + parseInt(nextPathPt1.x) + "," + parseInt(nextPathPt1.y) + "s0.8,0.8 r" + deg);
		}, 4000, mina.easeinout, function(){animateUfoAttack()});
	}
	function animateUfoPath2(path) {
		ufo.select("path[id='animate-ufo-beam']").attr({
			fillOpacity: 0
		});
		Snap.animate(0, path.getTotalLength(), function (pos) {
			nextPathPt1 = path.getPointAtLength(pos);
			var len = path.getTotalLength();
			var deg = - 0.3 * (pos % len + 1);

			ufo.transform("t" + parseInt(nextPathPt1.x) + "," + parseInt(nextPathPt1.y) + "s0.8,0.8 r" + deg);
		}, 4000, mina.easeinout, function(){animateUfoPath(ufoPath1)});
	}
	function animateUfoAttack() {
		Snap.animate(0, 100, function(value) {
			ufo.select("path[id='animate-ufo-beam']").attr({
				fillOpacity: value % 25 == 0 ? 20 : 100
			});
		}, 4000, mina.easeinout, function(){animateUfoPath2(ufoPath2)});
	}

	animateUfoPath(ufoPath1);

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
			animateNavColorPosition('relative', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'white', colorPurple, '400', '400');
			$('#placeholder').css({'display':'none'});

			// dropdown menu
			animateDropDown('rgba(0, 0, 0, 0.8)');
		}
	}
	
	// on resize
	$(window).resize(function() {
		// update element positions
		earthPos = $("#animate-earth > svg").offset();
		ufoPath1.animate({d: "M 0 75 Q 0 60 " + l1 + " 40 " + l2 + " 60 " + l3 + " 100 " + l4 + " 180 " + l5 + " " + e1}, 100, mina.linear);
		ufoPath2.animate({d: "M " + l5 + " " + e1 + " C " + l5 + " " + e1 + " " + r5 + " 70 " + r5 * 1.5 + " 300"}, 100, mina.linear);
	});

	// on scroll calls
	$(window).scroll(function() {
		// navbar animation
		animateNavBar($(window));
	});

	// on load calls
	$('.nav-dropdown .nav-link').click(function(e) {
	    e.preventDefault();
	});

	animateNavBar($(window));

});