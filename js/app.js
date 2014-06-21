$(function(){
$("h1").show(1500);
$('#instructions').fadeIn(2500);
});


function addItem () {
  var text=$('#item').val();
  $('#food-list').append('<li><input type="checkbox" class="completed"/>'+text+'<button class="delete">Delete</button></li>');
  $('#item').val('');
  event.preventDefault();
 }


function deleteItem () {
$(this).parent().remove();
}

//function strikeItem() {
  //if ($('.completed').hasClass(':checked')) {
    //$(this).toggleClass();
  //}
// }


function strikeItem () {
$(this).parent().parent().parent().toggleClass('done');
}


//function strikeItem() {
  //if ( $(this).parent().css('textDecoration') != 'line-through') {
    //$(this).parent().css('textDecoration', 'line-through');
// } else {
  // $(this).parent().css('textDecoration', 'line-through');
// }
// }

//if checkbox is checked, add strikethrough
//if checkbox is unchecked, remove strikethrough which would be none not remove most likely.
// if ($(this).parent().hasClass(':checked'))

 //function to strikethrough and unstrike checkbox
 //function strikeItem() {
  //if ( $(this).parent().css('textDecoration') != 'line-through') {
    //$(this).parent().css('textDecoration', 'line-through');
  //} else {
    //$(this).parent().css('textDecoration', 'line-through').remove('textDecoration','line-through');
  //unstrike syntax 
 //}
//}

//This function adds items, deletes item with delete button, strikes through items but doesn't strike off
  $(function(){
  $( 'form' ).on( 'submit', addItem); 
  //$('.delete').on('click', deleteItem);
  //$('.completed').on('click', strikeItem);
  $(document).on('click', '.delete', deleteItem);
  $(document).on('click', '.completed', strikeItem);
});


// onready
$(function() {
  // make sure jquery is running ok
  $( '#item' ).css({ background: '#25d09f' });
   $( '<em>(required)</em>' ).insertBefore( 'label' );
});

// ** CODE COMMENTS SECTION **
 // append to page
  //$( 'body' ).append( '' );
  //$( 'label' ).append( '<em>(required)</em>' );
  //$('h1').fadeIn(3000);

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



 