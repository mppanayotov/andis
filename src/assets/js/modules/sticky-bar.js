 // Sticky header
import { $window, $document, $body } from '../utils/globals.js';

let winST = $window.scrollTop();
let $bar = $('.widget-bar')
const $stickyHeaderContainer = $('.js-sticky-header-container');

const stuckBar = ( winST ) => {
	if ( !$('.js-container').length ) {
		return; 
	}
	
	let $container = $('.js-container')
	let bottomCondition = winST + $window.outerHeight() - $container.outerHeight() > $container.offset().top + $container.outerHeight();
	let pushCondition = $stickyHeaderContainer.hasClass('is-fixed') && ! $stickyHeaderContainer.hasClass('is-hidden');

	$bar.toggleClass('is-visible', bottomCondition)
	$bar.toggleClass('is-pushed', pushCondition)

	if ($bar.hasClass('is-pushed')) {
		$bar.css({
			'transform': 'translateY(' + $('.js-sticky-header').outerHeight() + 'px) translateY(calc(-0.6vw - 2px))' 
		});
	} else {
		$bar.css({
			'transform': 'translateY(0)'
		});
	}
}

$window.on('load scroll resize', function () {
	winST = $window.scrollTop();
	stuckBar( winST )
});
