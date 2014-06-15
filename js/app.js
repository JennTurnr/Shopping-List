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
    $( '<li>' ).text( text ).appendTo( '#food-list' );
    $('#item').val('');

    // Strikethrough items once checked 
   

    // Hover delete x button over list 



    
  }); 
}); 