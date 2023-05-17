 // Gallery js
import { $window, $document } from '../utils/globals.js';

const TABLET_WIDTH = 1199;

function initCursur() {
	let $container = $('.js-gallery');
	let $cursor    = $('.gallery-cursor');
	let yPos;
	let xPos;
	let isMouseIn = false;

	$document.mousemove(function(e) {
		if ($window.width() > TABLET_WIDTH) {
			if (! isMouseIn) {
				return
			}

			yPos = parseInt(e.clientY);
			xPos = parseInt(e.clientX);

			$cursor.css({
				top  : yPos,
				left : xPos
			});
		}
	});

	$document.on('mouseenter', '.js-gallery', function() {
		if ($window.width() > TABLET_WIDTH) {
			isMouseIn = true;
			$cursor.addClass( 'show' );
		}
	}).on('mouseleave', '.js-gallery', function() {
		if ($window.width() > TABLET_WIDTH) {
			isMouseIn = false;
			$cursor.removeClass( 'show' );
		}
	});

	$document.on('mouseenter', '.popup-alt .widget__inner', function() {
		if ($window.width() > TABLET_WIDTH) {
			isMouseIn = true;
			$cursor.addClass( 'show close' );
		}
	}).on('mouseleave', '.popup-alt .widget__inner', function() {
		if ($window.width() > TABLET_WIDTH) {
			isMouseIn = false;
			$cursor.removeClass( 'show close' );
		}
	});
}

initCursur();

function updateImage(e) {
	let $image = $('.widget-gallery .widget__item.is-active .widget__image');
	let imageHeight = $image.find('img').height();
	let yPos = e.clientY;
	let VERTICAL_PADDING = 100;

	if (imageHeight + (VERTICAL_PADDING * 2) <= $window.height()) {
		$('.widget-gallery .widget__image img').css('transform', 'translate(-50%, -50%)');
	} else {
		yPos = -parseInt((yPos / $window.height() - .5) * (imageHeight - $window.height() + (VERTICAL_PADDING * 2)));
		$('.widget-gallery .widget__image img').css('transform', 'translate(-50%, -50%) translateY(' + yPos + 'px)');
	}
}

$document.on('mousemove', '.widget-gallery .widget__item.is-active .widget__image', function(e) {
	if ($window.width() > TABLET_WIDTH) {
		updateImage(e);
	}
}).on('click', '.popup-alt .widget__inner', function(e){
	if ($window.width() > TABLET_WIDTH) {
		e.preventDefault();
		$('#popup-gallery').removeClass('is-visible');
		$('.js-header').add($('.js-content')).removeClass('is-covert');
		$('.gallery-cursor').removeClass('close');
	}
});

$('.js-popup').on('click', function(e){
	let $initialImage = $(this).parent().find('img')[0];
	let initialWidth = $initialImage.width;
	let $targetImageContainer = $( $(this).attr('href') ).find($('.widget-gallery .widget__item .widget__image'));
	let targetWidth = $targetImageContainer.width();
	let adaptation = parseFloat(initialWidth / targetWidth);

	e.preventDefault();

	if ($window.width() > TABLET_WIDTH) {
		updateImage(e);
		$targetImageContainer.css('transform', 'scale(' + adaptation + ')');
		$( $(this).attr('href') ).toggleClass('is-visible');
		$('.js-header').add($('.js-content')).addClass('is-covert');
		$('.gallery-cursor').addClass('close');
		setTimeout(function() {
			$targetImageContainer.css('transform', 'scale(1)');
		}, 100);
	}
});

$window.on('resize', function() {
	if ($window.width() <= TABLET_WIDTH) {
		$('.js-header').add($('.js-content')).removeClass('is-covert');
		$('.gallery-cursor').removeClass('close');
	}
});

$('.js-popup-mobile').on('click', function(e){
	e.preventDefault();

	if ($window.width() <= TABLET_WIDTH) {
		$( $(this).attr('data-target') ).addClass('is-visible');
	}
});

$('.js-popup-close').on('click', function(e){
	e.preventDefault();

	if ($window.width() <= TABLET_WIDTH) {
		$(this).closest('.js-popup-container').removeClass('is-visible');
	}
});

$('.widget-gallery .widget__aside a').on('click', function(e) {
	e.preventDefault();
	var index = $(this).closest('li').index() + 1;

	$('.widget-gallery .widget__item').removeClass('is-active');
	$(this).closest('li').siblings().removeClass('is-active');
	$(this).closest('li')
		.add($('.widget-gallery .swiper-slide:nth-child(' + index + ') .widget__item'))
			.addClass('is-active');
	$('.widget-gallery .widget__item img').removeAttr('style');
});
