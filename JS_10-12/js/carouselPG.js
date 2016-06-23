(function($) {
	var defaults = { 
		arrow:'.carousel-arrow',
		carousel: '.carousel-list',
		pixelsOffset: 605,
		animationSpeed: 500,
		visibleSlides: 2
	};
	var options;

	$.fn.carousel = function(params) {
		options = $.extend({}, defaults, options, params);

		var $leftArrow = $(options.arrow+'-left');
		var $rightArrow = $(options.arrow+'-right');
		var $elementList = $(options.carousel);

		var elementCount = $elementList.find('li').length
		var pixelsOffset = options.pixelsOffset;
		var currentLeftValue = 0;
		var minimumOffset = -((elementCount-options.visibleSlides)*pixelsOffset);
		var maximumOffset = 0;

		$leftArrow.on('click', function () {
			if (currentLeftValue != maximumOffset){
				console.log(options.carousel);
				currentLeftValue += pixelsOffset;
				$elementList.animate({ left: currentLeftValue + "px"}, options.animationSpeed)
			}
		});

		$rightArrow.on('click', function() {
			if (currentLeftValue != minimumOffset){
				currentLeftValue -= pixelsOffset;
				$elementList.animate({ left: currentLeftValue + "px"}, options.animationSpeed)
			}
		});

		return this;
	}
	

})(jQuery);