(function ($) {
    
    // properties
    var container = '<div class="scrollinception-container" />',
        scrollbutton = '<a href="#" class="scrollinception-button"><span class="scrollinception-icon">⇵</span></a>';
    
    $.fn.scrollinception = function() {
        
        $(this).wrap(container);
        $('.scrollinception-container').append(scrollbutton);
    
        $('.scrollinception-button').on('click', function(event) {
          event.preventDefault();
          var $btn = $(this);
          $(this).hide();
          $(window).on('scroll', function() {
              $btn.show();
              $(this).unbind('scroll');
          });
        });
        
        return this; // method chaining
    };
    
}(jQuery));
