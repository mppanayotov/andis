 // Sticky content
import { $window, $document, $body } from '../utils/globals.js';

const $stickyContainer = $('.js-sticky-header-container');
const $stickyHeader = $('.js-sticky-header');
const $wrapper = $('.js-wrapper');

let stickyOffset;
let stickyContainerHeight;
let stickyHeaderHeight;
let lastScrollPos;

$window.on('load scroll resize', function () {
	const currentScrollPos = $document.scrollTop();
	
	stickyContainerHeight = parseInt($stickyContainer.outerHeight());
	stickyHeaderHeight = parseInt($stickyHeader.outerHeight());
	stickyOffset = parseInt($wrapper.offset().top);

	function hasOpenMobileMenu() {
		return $body.hasClass('has-open-menu');
	}

	if ($stickyContainer.hasClass('is-fixed')) {
		if (currentScrollPos < lastScrollPos) {
	    $stickyContainer.removeClass('is-hidden');
	  } else if (! hasOpenMobileMenu()) {
	    $stickyContainer.addClass('is-hidden');
	  } 
	}
	
	if (currentScrollPos >= stickyContainerHeight - stickyHeaderHeight + stickyOffset) {
		$stickyContainer.addClass('is-fixed');
	} else {
		$stickyContainer.removeClass('is-fixed');
	}

  lastScrollPos = currentScrollPos;
});
