$(document).ready(function() {
	$('#aboutlink').click(function() {
		scrolltoabout();
	});
	$('#learnmore').click(function() {
		scrolltoabout();
	});
	$('#worklink').click(function() {
		scrolltowork();
	});
	$('#contactlink').click(function() {
		scrolltocontact();
	});

	function scrolltoabout() {
	    $('html, body').animate({
	        scrollTop: $("#intro").offset().top -10 
	    }, 500);
	}
	function scrolltowork() {
		$('html, body').animate({
	        scrollTop: $("#workleft").offset().top -10 
	    }, 500);
	}
	function scrolltocontact() {
		$('html, body').animate({
	        scrollTop: $(".contact").offset().top -10 
	    }, 700);
	}

	// if (mobile) {
	// 	if (window.DeviceMotionEvent==undefined) {
	// 		var gyro = 0;
	// 	}
	// 	else {
	// 		alert("we got a gyro");
	// 	}
	// }
});

$(window).scroll(function () {
	stripscroll(strip);
});

function stripscroll() {
	var wScroll = $(window).scrollTop();
	$('.strip').css('background-position', 'center -'+ wScroll +'px')
}