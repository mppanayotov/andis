/**
 * Filters
 */
import { $window, $document, $body } from '../utils/globals.js';

const $filters = $('.js-filters');
const MOBILE_WIDTH = 767;
 
function closeFilters() {
	$filters.removeClass('is-active');
	$filters.find('.js-accordion.is-active .js-accordion-expand').stop().slideUp(500);
	$filters.find('.js-accordion').removeClass('is-active');
}

$('.js-filters-trigger').on('click', function(e) {
	if ($window.width() <= MOBILE_WIDTH) {
		e.preventDefault();
		$filters.addClass('is-active');
	}
});

$('.js-filters-close').on('click', function(e) {
	if ($window.width() <= MOBILE_WIDTH) {
		e.preventDefault();
		closeFilters();
	}
});

$window.on('resize', function() {
	if ($window.width() > MOBILE_WIDTH) {
		closeFilters();
	}
});
