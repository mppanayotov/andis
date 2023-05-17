/**
 * Sliders
 */
import { $window, $document, $body } from '../utils/globals.js';
import Swiper from 'swiper/js/swiper';

const MOBILE_WIDTH = 767;
const TABLET_WIDTH = 1199;

$('.js-slider').each(function() {
	const $slider = $(this);

	function updateSpacing() {
		let spacingDesktop = 0.0267 * $window.width();
		let spacingMobile = 0.0533 * $window.width();

		if ($window.width() > MOBILE_WIDTH) {
			return spacingDesktop;
		} else {
			return spacingMobile;
		}
	}

	function initSlider() {
		new Swiper($slider, {
			preloadImages: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			slidesPerView: 1,
			spaceBetween: updateSpacing(),
			speed: 1000,
			pagination: {
				el: $slider.closest('.js-slider-container').find('.js-slider-bullets'),
				type: 'bullets',
				clickable: true
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: updateSpacing()
				}
			}
		});
	}

	initSlider();

	$window.on('resize', function() {
		$slider[0].swiper && $slider[0].swiper.destroy();
		initSlider();
	});
});

$('.js-slider-grid').each(function() {
	const $slider = $(this);

	function updateSpacing() {
		let spacingDesktop = 0.0333 * $window.width();
		let spacingMobile = 0.0533 * $window.width();

		if ($window.width() > MOBILE_WIDTH) {
			return spacingDesktop;
		} else {
			return spacingMobile;
		}
	}

	function initSlider() {
		new Swiper($slider, {
			preloadImages: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			slidesPerView: 1,
			spaceBetween: updateSpacing(),
			speed: 1000,
			pagination: {
				el: $slider.closest('.js-slider-container').find('.js-slider-bullets'),
				type: 'bullets',
				clickable: true
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: updateSpacing()
				}
			}
		});
	}

	if ($window.width() <= MOBILE_WIDTH) {
		initSlider();
	}

	$window.on('resize', function() {
		$slider[0].swiper && $slider[0].swiper.destroy();

		if ($window.width() <= MOBILE_WIDTH) {
			initSlider();
		}
	});
});

$('.js-slider-media').each(function() {
	const $slider = $(this);

	function updateSpacing() {
		let spacingDesktop = 0.0333 * $window.width();
		let spacingMobile = 0.0533 * $window.width();

		if ($window.width() > MOBILE_WIDTH) {
			return spacingDesktop;
		} else {
			return spacingMobile;
		}
	}

	function initSlider() {
		new Swiper($slider, {
			preloadImages: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false,
			slidesPerView: 1,
			spaceBetween: updateSpacing(),
			speed: 1000,
			pagination: {
				el: $slider.closest('.js-slider-container').find('.js-slider-bullets'),
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: $slider.closest('.js-slider-container').find('.js-slider-button-next'),
				prevEl: $slider.closest('.js-slider-container').find('.js-slider-button-prev')
			},
		});
	}

	initSlider();

	$window.on('resize', function() {
		$slider[0].swiper && $slider[0].swiper.destroy();
		initSlider();
	});
});

$('.js-slider-single-image').each(function() {
	const $slider = $(this);

	function updateSpacing() {
		let spacingDesktop = 0.0533 * $window.width();
		let spacingMobile = .04 * $window.width();

		if ($window.width() > MOBILE_WIDTH) {
			return spacingDesktop;
		} else {
			return spacingMobile;
		}
	}

	function initSlider() {
		new Swiper($slider, {
			preloadImages: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			spaceBetween: updateSpacing(),
			loop: false,
			slidesPerView: 'auto',
			speed: 1000
		});
	}

	initSlider();

	$window.on('resize', function() {
		$slider[0].swiper && $slider[0].swiper.destroy();
		initSlider();
	});
});

$('.js-slider-images').each(function() {
	const $slider = $(this);

	new Swiper($slider, {
		preloadImages: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		loop: false,
		slidesPerView: 'auto',
		speed: 1000,
		pagination: {
			el: $slider.closest('.js-slider-container').find('.js-slider-bullets'),
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			768: {
				slidesPerView: 5
			}
		}
	});
});

$('.js-slider-gallery').each(function() {
	const $slider = $(this);

	const sliderThumbs = new Swiper($('.js-slider-thumbs'), {
		preloadImages: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		observeSlideChildren: true,
		loop: false,
		allowTouchMove: false,
		slidesPerView: 'auto',
		speed: 1000
	});

	function initSlider() {
		new Swiper($slider, {
			preloadImages: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			spaceBetween: 0,
			loop: false,
			slidesPerView: 1,
			direction: 'horizontal',
			speed: 1000,
			allowTouchMove: true,
			pagination: {
				el: $slider.closest('.js-slider-container').find('.js-slider-bullets'),
				type: 'bullets',
				clickable: true
			},
			thumbs: {
				swiper: sliderThumbs,
				multipleActiveThumbs: false
			},
			breakpoints: {
				768: {
					direction: 'vertical',
					allowTouchMove: false
				}
			}
		});
	}

	$('.js-slider-thumbs a').on('click', function(e) {
		e.preventDefault();
	});

	initSlider();
});

$('.js-slider-gallery-popup').each(function() {
	const $slider = $(this);

	function initSlider() {
		new Swiper($slider, {
			preloadImages: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			spaceBetween: 0,
			loop: false,
			slidesPerView: 1,
			direction: 'horizontal',
			speed: 1000,
			allowTouchMove: true,
			navigation: {
				nextEl: $slider.closest('.js-slider-container').find('.js-slider-button-next'),
				prevEl: $slider.closest('.js-slider-container').find('.js-slider-button-prev')
			}
		});
	}

	$window.on('load resize', function() {
		if ($window.width() <= TABLET_WIDTH) {
			if (! $slider.hasClass('swiper-container-initialized')) {
				initSlider();
			}
		} else {
			$slider[0].swiper && $slider[0].swiper.destroy();
		}
	});
});
