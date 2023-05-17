/*
 * Mobile menu
 */
import { $window, $document, $body } from '../utils/globals.js';

const $header = $('.js-header');
const $mobileMenu = $('.js-mobile-menu');
const $mobileMenuTrigger = $('.js-mobile-menu-trigger');
const $dropdown = $('.js-dropdown');
const $dropdownExpand = $('.js-dropdown-expand');
const $stickyContainer = $('.js-sticky-header-container');
const MOBILE_WIDTH = 767;
let cachedScrollPos;

function hasOpenMobileMenu() {
	return $body.hasClass('has-open-menu');
}

function openMobileMenu() {
	$mobileMenuTrigger.addClass('is-active');
	$mobileMenu.addClass('is-active');
	$header.addClass('has-open-menu');
	$body.addClass('has-open-menu');
}

function closeMobileMenu() {
	$mobileMenuTrigger.removeClass('is-active');
	$mobileMenu.removeClass('is-active');
	$header.removeClass('has-open-menu');
	$body.removeClass('has-open-menu');
	$dropdown.add($dropdown.siblings()).add($dropdownExpand).show();

	if ($window.width() > MOBILE_WIDTH) {
		$dropdownExpand.stop().slideDown(0);
	} else {
		$dropdownExpand.each(function() {
			if ($(this).closest($dropdown).hasClass('js-dropdown-search')) {
				$(this).stop().slideUp(500);
			} else if (! $(this).closest($dropdown).hasClass('js-dropdown-cart')) {
				$(this).stop().slideUp(0);
			}
		});
	}

	$dropdown.removeClass('is-active');
}

$mobileMenuTrigger.on('click', function(e) {
	e.preventDefault();

	if (! hasOpenMobileMenu()) {
		openMobileMenu();
	} else {
		closeMobileMenu();
	}
});
