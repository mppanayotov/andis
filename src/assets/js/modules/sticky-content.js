 // Sticky header
import { $window, $document, $body } from '../utils/globals.js';

let winST = $window.scrollTop();

const stuckContent = ( winST ) => {
	if ( !$('.js-container').length ) {
		return;
	}
	
	let $container = $('.js-container')
	let $content = $container.find('.js-content')

	let bottomCondition = winST > $container.offset().top + $container.outerHeight() - $content.outerHeight()

	$container.toggleClass('is-bottom', bottomCondition)
}

$window.on('load scroll resize', function () {
	winST = $window.scrollTop();
	
	stuckContent( winST )
});
