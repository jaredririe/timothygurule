// Preloader js
$(window).on('load', function () {
	$('.preloader').addClass('d-none');
});

(function($) {
	'use strict';

	$('.slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
	});

})(jQuery);
