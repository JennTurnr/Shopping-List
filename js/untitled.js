$(function() {
  // make sure jquery is running ok
  $( '#item' ).css({ background: '#25d09f' });
  
  // append to page
  $( 'body' ).append( '' );
  //$( 'label' ).append( '<em>(required)</em>' );
  $( '<em>(required)</em>' ).insertBefore( 'label' );

});

$('form').on('submit', function(event){
  event.preventDefault();
  var text = $('#item').val();
  $('<li>').text(text).appendTo('#food-list');
  $('#item').val('');
  

  
.mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
});


$(document).keydown(function(event){
  var cool_key = 88; // The keycode for x is 88
    if (event.which == cool_key) {
      //playSwagger();
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').show(); 
}


$('.ryu').mouseenter(function() {
  $('.ryu-still').hide();
  $('.ryu-cool').hide();
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
})