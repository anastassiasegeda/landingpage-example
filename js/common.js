$(document).ready(function() {


	$("#goServices").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#services").offset().top
    	}, "slow");
    	return false;
	});
	$("#goPricing").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#pricing").offset().top
    	}, "slow");
    	return false;
	});
	$("#goTeam").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#team").offset().top
    	}, "slow");
    	return false;
	});
	$("#goClients").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#clients").offset().top
    	}, "slow");
    	return false;
	});
	$("#goContact").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#contact").offset().top
    	}, "slow");
    	return false;
	});
	$(".goup").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".scrolldown").click(function() {
		$("html, body").animate({
			scrollTop: $("#services").offset().top
		}, "slow");
		return false;
	});


//navbar menu icon animation

$('.navbar-toggle').click(function(){
	$(this).toggleClass('open');
});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



});
