/**
 * Instagram App Prototype.
 */
$(document).ready(function() {

  // On tap of an instagram, open or close the comments.
  $('.instagram').click(function() {
    $(this).next().toggleClass('open');
  });

  // On tap of tab bar item, update the nav bar.
  $('footer .btn').click(function() {
    var tab = $(this).attr('title');
    $('header').removeClass().addClass(tab);
    $('footer').removeClass().addClass(tab);
  })

});
