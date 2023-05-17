import { $window, $document, $body } from '../utils/globals.js';

const animateHero = ( winST ) => {
	if ( !$('.hero-animate').length ) {
		return;
	}

	setTimeout(function() {
		$('.hero-animate').addClass('is-animated')
	}, 500);
}

$window.on('load', function () {
	animateHero()
});
