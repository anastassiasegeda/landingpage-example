$(document).ready(function() {



$(".slider .slide").animated("fadeIn");




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




$(".services h2, .services .title p").animated("fadeIn");
$(".pricing h2, .pricing .title p").animated("fadeIn");
$(".team h2, .team .title p").animated("fadeIn");
$(".clients h2, .clients .title p").animated("fadeIn");
$(".contact h2, .contact .title p").animated("fadeIn");

$(".services .service-card").animated("bounceInLeft");
$(".pricing .packages").animated("bounceInLeft");
$(".team .person-card").animated("bounceInLeft");
$(".contact .contact-form-1, .contact .contact-form-2").animated("bounceInLeft");

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
