/**
 * Spinner
 */
import { $window, $document, $body } from '../utils/globals.js';

const $spinner = $('.js-spinner');

if ($spinner.length > 0) {
	function countdown() {
		let duration = 8;

		const durationInterval = setInterval(function(){
			duration -= 1;

			if (duration == 0) {
				clearInterval(durationInterval);
				$spinner.removeClass('is-spinning');
			}
		}, 1000);
	}

	function updateSpinner() {
		if (! $spinner.hasClass('is-spinning')) {
			$spinner.addClass('is-spinning');
			countdown();
		}
	}

	$window.on('load', function() {
		setTimeout(function() {
			$window.on('scroll', function() {
				updateSpinner();
			});
		}, 1000);
	})
}
