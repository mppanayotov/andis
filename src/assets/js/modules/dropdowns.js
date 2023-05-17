/**
 * Dropdowns
 */
import { $window, $document, $body } from '../utils/globals.js';

const $header = $('.js-header');
const $mobileMenuTrigger = $('.js-mobile-menu-trigger');
const $dropdown = $('.js-dropdown');
const $dropdownTrigger = $('.js-dropdown-trigger');
const $dropdownClose = $('.js-dropdown-close');
const $dropdownExpand = $('.js-dropdown-expand');
const $stickyContainer = $('.js-sticky-header-container');
const MOBILE_WIDTH = 767;

$dropdownTrigger.on('click', function(e) {
	const $dropdownTrigger = $(this);

	$header.removeClass('has-open-search');

	if ($dropdownTrigger.closest($dropdown).hasClass('js-dropdown-search')) {
		e.preventDefault(); 

		if ($window.width() > MOBILE_WIDTH) {
			if (! $dropdownTrigger.closest($dropdown).hasClass('is-active')) {
				$dropdownTrigger.closest($dropdown).siblings($dropdown).removeClass('is-active');
				$dropdownTrigger.closest($dropdown).addClass('is-active');
				$header.addClass('has-open-search');
			} else {
				$dropdownTrigger.closest($dropdown).removeClass('is-active');
			}
		} else {
			if (! $dropdownTrigger.closest($dropdown).hasClass('is-active')) {
				$dropdownTrigger.siblings($dropdownExpand).stop().slideDown(500);
				$dropdownTrigger.closest($dropdown).addClass('is-active');
				$mobileMenuTrigger.addClass('is-active');
				$body.addClass('has-open-menu');
			} else {
				$dropdownTrigger.closest($dropdown).removeClass('is-active');
				$dropdownTrigger.siblings($dropdownExpand).stop().slideUp(500);
				$mobileMenuTrigger.removeClass('is-active');
				$body.removeClass('has-open-menu');
			}
		}
	} else if ($dropdownTrigger.closest($dropdown).hasClass('js-dropdown-cart')) {
		e.preventDefault(); 

		if (! $dropdownTrigger.closest($dropdown).hasClass('is-active')) {
			$dropdownTrigger.closest($dropdown).siblings($dropdown).removeClass('is-active');
			$dropdownTrigger.closest($dropdown).addClass('is-active');
			$mobileMenuTrigger.addClass('is-active');
			$body.addClass('has-open-menu');
		} else {
			$dropdownTrigger.closest($dropdown).removeClass('is-active');
			$mobileMenuTrigger.removeClass('is-active');
			$body.removeClass('has-open-menu');
		}
	} else if ($window.width() <= MOBILE_WIDTH) {
		if ($dropdownTrigger.closest($dropdown).hasClass('js-dropdown-alt')) {
			e.preventDefault();

			if (! $dropdownTrigger.closest($dropdown).hasClass('is-active')) {
				$dropdownTrigger.closest($dropdown).siblings().removeClass('is-active');
				$dropdownTrigger.closest($dropdown).addClass('is-active');
			} else {
				$dropdownTrigger.closest($dropdown).removeClass('is-active');
				$dropdownTrigger.closest($dropdown).find($dropdown).removeClass('is-active');
				$dropdownTrigger.closest($dropdown).find('.js-dropdown-expand').slideUp(500);
			}
		} else {
			e.preventDefault();
			$dropdownTrigger.closest($dropdown).siblings($dropdown).removeClass('is-active');
			$dropdownTrigger.closest($dropdown).siblings().find('.js-dropdown-expand').stop().slideUp(500);
			$dropdownTrigger.siblings($dropdownExpand).stop().slideToggle(500);
			$dropdownTrigger.closest($dropdown).toggleClass('is-active');
		}
	}
});

if ($header.hasClass('header--black')) {
	$('.js-dropdown-color-change').on('mouseenter', function() {
		if ($window.width() > MOBILE_WIDTH) {
			$header.removeClass('header--black');
		}
	});

	$('.js-dropdown-color-change').on('mouseleave', function() {
		if ($window.width() > MOBILE_WIDTH) {
			$header.addClass('header--black');
		}
	});
}

$dropdownClose.on('click', function(e) {
	const $dropdownClose = $(this);

	e.preventDefault(); 
	$header.removeClass('has-open-search');

	if ($dropdownTrigger.closest($dropdown).hasClass('js-dropdown-search')) {
		if ($window.width() > MOBILE_WIDTH) {
			$dropdownTrigger.closest($dropdown).removeClass('is-active');
		} else {
			$dropdownTrigger.closest($dropdown).removeClass('is-active');
			$dropdownTrigger.siblings($dropdownExpand).stop().slideUp(500);
			$mobileMenuTrigger.removeClass('is-active');
			$body.removeClass('has-open-menu');
		}
	} else if ($dropdownTrigger.closest($dropdown).hasClass('js-dropdown-cart')) {
		$dropdownTrigger.closest($dropdown).removeClass('is-active');
		$mobileMenuTrigger.removeClass('is-active');
		$body.removeClass('has-open-menu');
	}
});
