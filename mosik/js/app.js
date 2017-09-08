$(document).ready(function() {

  $('.scroll_link').click(function() {
    _this = $(this);
    $('html, body').animate({
        scrollTop: $(_this.attr('data-href')).offset().top
    },800);
  });

});
