/**
 * Banners
 */

const $banner = $('.js-banner');

$banner.each(function() {
	const $banner = $(this);
	const $bannerClose = $banner.find('.js-banner-close');

	$bannerClose.on('click', function() {
		event.preventDefault();

		$banner.addClass('hidden');
	});
});
