

$('.add').on('click', add);
$('.remove').on('click', remove);

function add() {
 var newIngredient = parseInt($('#totalIngredients').val()) + 1;
 var new_input = "<input type='text' id='new" + newIngredient + "'>";

 $('#new_Ingredient').append(new_input);

 $('#totalIngredients').val(newIngredient);
}

function remove() {
 var lastIngredient = $('#totalIngredients').val();

 if (lastIngredient > 1) {
   $('#new' + lastIngredient).remove();
   $('#totalIngredients').val(lastIngredient - 1);
 } 
};