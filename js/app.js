// onready
$(function() {
  // make sure jquery is running ok
  $( '#item' ).css({ background: '#25d09f' });
  
  // append to page
  $( 'body' ).append( '' );
  //$( 'label' ).append( '<em>(required)</em>' );
  $( '<em>(required)</em>' ).insertBefore( 'label' );
  
  // read the value
  $( 'form' ).on( 'submit', function( event ) {
    event.preventDefault();
    var text = $( '#item' ).val();
    $( '<p>' ).text( text ).appendTo( 'body' );
    $('#item').val('');
  });
  
}); 