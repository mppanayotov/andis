 // Sticky content
import { $window, $document } from '../utils/globals.js';
import AOS from 'aos';

const $wrapper = $('.wrapper');
let winHeight;
let winVh;
let aosOffset;

const animateLoad = ()=> {
	$('.widget-load').addClass('is-hidden')
}

function calcElevation(amount) {
	const winWidth = $window.width();
	const winVw = winWidth/100;
	return amount * winVw
}

function initAos() {
	const $container = $('.section, .hero, [class^="hero-"], .footer');
	const $items = $(
		'h2, h3, h4, h5, h6, .hero h1, [class^="hero-"]:not(.hero-product) h1, .hero__content .list-dash, .hero__content p, .hero__accordions, .hero__form, .hero__footer, .section h1, .section__note p, .section__feature p, .section__main p, .article p, .article__footer, .article__actions, .cart__actions, .cart__footer, .footer__logo, .footer ul, .footer__copyright p, .footer address, .spotlight__actions, .swiper-container-initialized:not(.js-slider-gallery):not(.js-slider-thumbs)'
		);

	const $imageWrappers = $('.js-image-wrapper');
	const $images = $('img');

	$container.each(function() {
		const $container = $(this);
		const $containerItems = $container.find($items);
		const $containerImageWrappers = $container.find($imageWrappers);
		let delay = 0;
		
		if ($container.hasClass('footer')) {
			$container.attr({
				'data-aos': 'fade-in'
			});

			$container.css({
				'opacity': 1
			});
		}

		$containerItems.each(function() {
			if (! $(this).closest('.cart').length) {
				if (! $(this).hasClass('swiper-container-initialized')){
					$(this).attr({
						'data-aos-delay': delay,
						'data-aos': 'fade-up',
						'data-aos-easing': 'ease-out'
					});
				} else {
					$(this).attr({
						'data-aos-delay': delay,
						'data-aos': 'fade-left',
						'data-aos-easing': 'ease-in'
					});

					$container.find('h2').attr({
						'data-aos-delay': 500
					});
				}
			}

			delay += 30;
		});

		$containerImageWrappers.each(function() {
			const $wrapperImages = $(this).find($images);

			$wrapperImages.attr({
				'data-aos': 'zoom-out'
			});

			$wrapperImages.css({
				'opacity': 1
			});
		});

		$window.on('scroll resize', function() {
			if ($container.hasClass('aos-animate')) {
				$containerItems.addClass('aos-animate');
			}
		});

		setTimeout(function() {
			if ($container.hasClass('aos-animate')) {
				$containerItems.addClass('aos-animate');
			}
		}, 200);
	});

	setTimeout(function() {
		AOS.init({
			anchorPlacement: 'top-bottom',
			duration: 1000,
			once: true
		});
	}, 100);
}

function initImageFx() {
	const $container = $('.article .article__image, .photos');
	const $items = $('img');

	$container.each(function() {
		const $container = $(this);
		const $containerItems = $container.find($items);
		let step = 0;

		$container.closest('.section, .hero, [class^="hero-"]').addClass('scrollme');

		$containerItems.each(function() {
			const $clonedItem = $(this).clone(); 
			let elevation = 0;

			if (step > 0) {
				elevation = parseInt(14 - step);

				if ($container.hasClass('photos--hero')) {
					elevation = parseInt(7 - step);
				}
			}

			$(this).parent().append($clonedItem);
			$clonedItem.wrap(
				'<div class="image-wrapper js-image-wrapper"><div class="image-crop animateme" data-when="span" data-from="1" data-to="0" data-translatey="' + calcElevation(elevation) + '" style="transform: translateY(' + calcElevation(elevation) + 'px);"></></>'
			);

			$(this).remove();
			step += 1;
		});
	});
}

function initImageFxAlt() {
	const $container = $('.article .article__parallax-container');
	const $items = $('.article__parallax');

	$container.each(function() {
		const $container = $(this);
		const $containerItems = $container.find($items);

		$container.addClass('scrollme');

		$containerItems.each(function() {
			const elevation = parseInt($(this).height() / 2);

			$(this).addClass('animateme');

			$(this).css({
				transform: 'translateY(' + -elevation + 'px'
			});

			$(this).attr({
				'data-when': 'span',
				'data-from': '1',
				'data-to': '0',
				'data-translatey': -elevation
			});
		});
	});
}

$document.ready(function() {
	initImageFx();
	initImageFxAlt();
	setTimeout(function() {
		require('../../vendor/jquery.scrollme.min.js');
	}, 1000);
});

$window.on('load', function () {
	animateLoad();
	initAos();
});
