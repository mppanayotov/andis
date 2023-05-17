/**
 * Search controls
 */
 
$('.js-search-trigger').on('keyup', function() {
	$('.js-search-container').toggleClass('is-populated', $(this).val().length > 0);
});
