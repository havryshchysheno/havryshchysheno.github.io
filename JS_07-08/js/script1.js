$(document).ready(function() {
	
	$('.tab-link').click(function () {
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		$('.tab').not($(this).attr('href')).hide();
		$($(this).attr('href')).fadeIn(1000);
		return false;
	})

	$('.input-data').hover(
		function () {
		log = $(this).next();
		console.log(log);
		$(this).next().fadeIn();
		},
		function () {
			$(this).next().fadeOut();
		} 
	)

	$('.help-btn').click (function () {
		$('.form-tooltip').fadeIn();
		setTimeout(function () {
			$('.form-tooltip').fadeOut();
		}, 5000)
		return false;
	})
});