'use strict';

(function($){
	$(document).ready(function() {
		// Code

		$(document).ready(function(){
			$('.work__slider').slick({
				accessibility: true,
				arrows: true,
				dots: true,
				appendDots: $('.work__slider-dots'),
				appendArrows: $('.work__slider-arrows'),
				speed: 500,
				infinite: false,
			});
		  });

		  

	});
})(jQuery);
