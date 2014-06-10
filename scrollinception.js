$.scrollinception = function() {
    var container = '<div class="scrollinception-container" />',
        scrollbutton = '<a href="#" class="scrollinception-button"><span class="scrollinception-icon">⇵</span></a>';

    $('[data-scrollinception]').wrap(container);
    $('.scrollinception-container').append(scrollbutton);

    $('.scrollinception-button').on('touchstart click', function(event) {
      event.preventDefault();
      $(this).hide();
    });
};



