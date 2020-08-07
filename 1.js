$(document).ready(function() {
	var docao = $(window).height();
	$('.banner').css({'height': docao});
	$(window).resize(function(event) {
		var docao = $(window).height();
		$('.banner').css({'height': docao})
	});
	$(window).scroll(function(event){
		vitrihientai = $('html').scrollTop();
		console.log(vitrihientai);
		if(vitrihientai > 300){
			$('.navbar-custom').addClass('hien-background');
			$('.scroll-top').addClass('hien-scroll-top');
			$('.menu-button i').addClass('doi-mau');
			$('#logo-1').attr('src','images/canvasone-dark.png');
		}
		else if(vitrihientai <= 300){
			$('.navbar-custom').removeClass('hien-background');
			$('.scroll-top').removeClass('hien-scroll-top');
			$('.menu-button i').removeClass('doi-mau');
			$('#logo-1').attr('src','images/canvasone-light.png');
		}
	});

	$('.wrapper-home-content button.btn.btn-primary').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDwelcome').offset().top}, 1000, "easeInOutExpo");
		return false;
	});

	$('.lienhe-become').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDcontact').offset().top},1000, "easeInOutExpo")
	});

	$('.n1').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:0}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n2').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDwelcome').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n3').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDservices').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n4').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDportfolio').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n5').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDprice').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n6').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDteam').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n7').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDclient').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n8').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDblog').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.n9').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:$('#IDsubcribe').offset().top}, 1000, "easeInOutExpo");
		return false;
	});
	$('.scroll-top').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:0}, 500);
		return false;
	});
});