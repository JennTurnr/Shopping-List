function addItem () {
  var text=$('#item').val();
  $('#food-list').append('<li><input type="checkbox"/>'+text+'<button class="delete">Delete</button></li>');
  $('#item').val('');
  event.preventDefault();
 }


function deleteItem () {
$(this).parent().remove();
}
 //function to strikethrough
 function strikeItem(){
  if ( $(this).parent().css('textDecoration') == 'line-through') {
    $(this).parent().css('textDecoration', 'none');
  } else {
  $(this).parent().css('textDecoration', 'line-through');
 }
}

  $(function(){
  $( 'form' ).on( 'submit', addItem); 
  $('.delete').on('click', deleteItem);
  $('.completed').on('click', strikeItem);
  // $(document).on('click', '.completed', deleteItem);
 //  $(document).on('click', '.completed', strikeItem);
});

// onready
$(function() {
  // make sure jquery is running ok
  $( '#item' ).css({ background: '#25d09f' });
  
  // append to page
  $( 'body' ).append( '' );
  //$( 'label' ).append( '<em>(required)</em>' );
  $( '<em>(required)</em>' ).insertBefore( 'label' );

  //$('h1').fadeIn(3000);

});

//$('form').on('submit', function(event){
 // event.preventDefault();
  // var text = $('#item').val();
  //$('<li>').text(text).appendTo('#food-list');
  //$('#item').val('');
  
  //read the value
 // $(function(){
  //$( 'form' ).on( 'submit', addItem); 
  // $('.delete').on('click', deleteItem);
  // $('.completed').on('click', strikeItem);
// });

    //var text = $( '#item' ).val();
    //$( '<li>' ).text( text ).appendTo( '#food-list' );
    //$('#item').val('');

    // Strikethrough items once checked 



    // Hover delete x button over list 



    // Rearrange list items with drag and drop



 