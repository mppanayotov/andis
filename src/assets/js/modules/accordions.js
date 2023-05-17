/**
 * Accordions
 */
import { $window, $document, $body } from '../utils/globals.js';

const $accordion = $('.js-accordion');
let $accordionTrigger = $('.js-accordion-trigger');
const $accordionExpand = $('.js-accordion-expand');
const MOBILE_WIDTH = 767;

if ($('.js-accordion').hasClass('js-accordion-static')) {
	if ($window.width() <= MOBILE_WIDTH) {
		$document.on('click', '.js-accordion-trigger', function(e) {
			const $this = $(this);

			e.preventDefault();

			$this.siblings('.js-accordion-expand').stop().slideToggle(500);
			$this.closest('.js-accordion').toggleClass('is-active');
		});

		$window.on('load', function() {
			$accordionExpand.show();
			$accordionExpand.stop().slideUp(0);
		});
	}
} else if ($('.js-accordion').hasClass('js-accordion-alt')) {
	$document.on('click', '.js-accordion-trigger', function(e) {
		const $this = $(this);

		e.preventDefault();

		$this.closest('.js-accordion').siblings('.js-accordion.is-active').find('.js-accordion-expand').stop().slideUp(500);
		$this.closest('.js-accordion').siblings('.js-accordion.is-active').removeClass('is-active');

		if(! $this.closest('.js-accordion').hasClass('is-active')) {
			$this.siblings('.js-accordion-expand').stop().slideDown(500);
			$this.closest('.js-accordion').addClass('is-active');
		} else {
			$this.siblings('.js-accordion-expand').stop().slideUp(500);
			$this.closest('.js-accordion').removeClass('is-active');
		}
	});

	$window.on('load', function() {
		$accordionExpand.show();
		$accordionExpand.stop().slideUp(0);
	});
} else {
	$document.on('click', '.js-accordion-trigger', function(e) {
		const $this = $(this);

		e.preventDefault();

		$this.siblings('.js-accordion-expand').stop().slideToggle(500);
		$this.closest('.js-accordion').toggleClass('is-active');
	});

	$window.on('load', function() {
		$accordionExpand.show();
		$accordionExpand.stop().slideUp(0);
	});
}
