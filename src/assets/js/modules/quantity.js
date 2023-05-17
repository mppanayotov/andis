/**
 * Quantity functions
 */

$('.js-quantity-increase').on('click', function(e) {
	let value = parseInt($('.js-quantity input').val());
	value += 1;

	e.preventDefault();
	$('.js-quantity input').val(value );
});

$('.js-quantity-decrease').on('click', function(e) {
	let value = parseInt($('.js-quantity input').val());
	value -= 1;

	e.preventDefault();
	if ($('.js-quantity input').val() > 1) {
		$('.js-quantity input').val(value);
	}
});
