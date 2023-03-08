(function($){
	$('.btn-menu').on('click', function(e) {
		e.preventDefault();
		$('.btn-icon').toggleClass('hidden');
		$('html').toggleClass('modal-open');
		if( $('html').hasClass('modal-open') ) {
			$('body').append('<div class="modal"></div>');
			$('.modal').append($(e.target).parent().parent().find('.menu').clone());
		} else {
			$('.modal').remove();
		}
	});
})(jQuery);
