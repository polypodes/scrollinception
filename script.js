$('[data-safescroll]').wrap('<div class="safescroll-container" />');
$('.safescroll-container').append('<a href="#" class="safescroll-button"><span class="safescroll-icon">⇵</span></a>');

$('.safescroll-button').on('touchstart click', function(event) {
  event.preventDefault();
  $(this).hide();
});