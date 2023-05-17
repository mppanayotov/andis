import { $window, $document } from '../utils/globals.js';
import Swiper from 'swiper/js/swiper';
import 'magnific-popup';

function initSliders() {
	const MOBILE_WIDTH = 767;

	if ( $('.js-slider').length ) {
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
	}

	if ( $('.js-slider-grid').length ) {
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
	}

	if ( $('.js-slider-media').length ) {
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
	}

	if ( $('.js-slider-single-image').length ) {
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
				allowTouchMove: true,
				slidesPerView: 'auto',
				speed: 1000,
				breakpoints: {
					768: {
						allowTouchMove: false
					}
				}
			});

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
					slidesPerView: 1,
					direction: 'horizontal',
					speed: 1000,
					allowTouchMove: false,
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
							direction: 'vertical'
						}
					}
				});
			}

			$('.js-slider-thumbs a').on('click', function(e) {
				e.preventDefault();
			});

			initSlider();
		});
	}

	if ( $('.js-slider-gallery').length ) {
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
				allowTouchMove: true,
				slidesPerView: 'auto',
				speed: 1000,
				breakpoints: {
					768: {
						allowTouchMove: false
					}
				}
			});

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
	}
}

function initPopup() {
	$('.js-popup-trigger').magnificPopup({
		type: 'ajax',
		preloader: false,
		removalDelay: 300,
		mainClass: 'popup',
		closeBtnInside: true
	});
}

/*
 * Animate Transition
 */
function animateTransition() {
	$('.transition-overlay')
		.addClass('is-loading')
}

/*
 * Load Ajax
 */
function loadAjax( url ) {
	$.ajax({
		method  : 'GET',
		type    : 'HTML',
		url     : url,
		async   : false,
		success : function(response) {
			setTimeout(function() {
				var $response = $(response).find('.wrapper-inner');

				$('.wrapper-inner').addClass('wrapper-old')

				$response
					.insertAfter( '.header' )
				
				history.replaceState( url.split('.')[0], null, url);

				$('html, body').animate({
					scrollTop: 0
				}, 0)

				initSliders()
				initPopup()

				setTimeout(function() {
					$('.wrapper-old').remove()
				}, 500);
			}, 850);

			setTimeout(function() {
				$('.transition-overlay')
					.addClass('is-loaded')
			}, 1000);

			setTimeout(function() {
				$('.transition-overlay')
					.addClass('is-hidden')
			}, 2100);

			setTimeout(function() {
				$('.transition-overlay')
					.removeClass('is-hidden is-loaded is-loading')
			}, 2200);
		}
	})
}

/*
 * Ajax Redirect
 */
function ajaxRedirect() {
	$document.on('click', '.js-link', function(e){
		e.preventDefault();

		var $this = $(this)
		var url   = $this.attr('href')

		var href = document.location.href;
		var page = href.substr(href.lastIndexOf('/') + 1);

		if ( url === page ) {
			return;
		}

		animateTransition()

		history.pushState( url.split('.')[0], null, url);
		loadAjax( url )
	})
}

ajaxRedirect()

$window.on('popstate', function(e){
	var character = e.originalEvent.state;

	animateTransition()

	if ( character === null ) {
		character = 'home'

		loadAjax( character )
	}

	if (character !== null) {
		character += '.html'

		loadAjax( character )
	} 
})