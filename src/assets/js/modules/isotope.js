/**
 * Isotope
 */

import { $window, $document, $body } from '../utils/globals.js';

const $isotope = $('.js-isotope');
const MOBILE_WIDTH = 767;

$document.ready(function() {
	$isotope.isotope({
		itemSelector: '.js-isotope-item',
		percentPosition: false,
		layoutMode: 'fitRows',
		fitRows: {
		}
	});

	$('.js-isotope-filters').on('click', 'a', function(e) {
		const filterValue = $(this).attr('data-filter');

		e.preventDefault();
		$(this).parent().siblings().removeClass('is-active');
		$(this).parent().addClass('is-active');
		$isotope.isotope({ filter: filterValue });
		$isotope.isotope('layout');
	});

	$window.on('load', function() {
		const activeFilter = $('.js-isotope-filters li.is-active a').attr('data-filter');

		if ($window.width() > MOBILE_WIDTH) {
			$isotope.isotope({ filter: activeFilter });
			$isotope.isotope('layout');
		} else {
			$isotope.isotope('destroy');
		}
	});

	$window.on('scroll resize', function() {
		if ($window.width() > MOBILE_WIDTH) {
			$isotope.isotope('layout');
		} else {
			$isotope.isotope('destroy');
		}
	});
});
