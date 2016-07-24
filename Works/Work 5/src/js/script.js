
		//Preloader
$(window).on('load', function () {
	var $preloader = $('.page-preloader'),
	$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

$(function () {

		// Mobile menu
$( '#mobile-menu' ).multilevelpushmenu({
	fullCollapse: true,
	collapsed: true
});

$( '#show-menu' ).click(function(){
	$( '#mobile-menu' ).multilevelpushmenu( 'expand' );
});

$('#subMenu-button').click(function(e) {
	e.preventDefault();
});

$('.content').click(function () {
	$('#mobile-menu').multilevelpushmenu( 'collapse' );
}) 


	//Range slider
$("#range").ionRangeSlider({
	hide_min_max: false,
	keyboard: true,
	min: 20,
	max: 200,
	from: 60,
	to: 160,
	type: 'double',
	step: 10,
	prefix: "$",
	grid: false
});


	//Custom checkbox
$('.filter_checkbox-label').mousedown(
	function () {
		changeCheck($(this));
	});

function changeCheck (el) {
	input = el.find('input');
	if (!input.hasClass('active')) {
		input.parent().css('background-position', '0 0');
		input.attr('checked','checked');
		input.addClass('active')
	} else {
		input.parent().css('background-position', '-20px 0');
		input.removeAttr('checked');
		input.removeClass('active')
	}
} 
	
})