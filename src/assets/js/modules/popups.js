import 'magnific-popup';

/**
 * Popups
 */

$('.js-popup-trigger').magnificPopup({
	type: 'ajax',
	preloader: false,
	removalDelay: 300,
	mainClass: 'popup',
	closeBtnInside: true,
	fixedContentPos: true
});
