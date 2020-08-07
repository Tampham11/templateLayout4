$(document).ready(function() {
	$('.menu-button i').click(function(event) {
		/* Act on the event */
		$('.primary-menu').toggleClass('open-menu');
		return false;
	});
});