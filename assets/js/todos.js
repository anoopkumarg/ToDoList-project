// check of specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
// delete todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
       $(this).remove();
	});
	event.stopPropagation();
});
// add todos from input

$("input").keypress(function(event){
      if(event.which === 13){
      	var newTodo=( $(this).val());
      	$(this).val("");
      	if(newTodo===""){
          console.log(newTodo);
      	}
      	else{
      		  $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newTodo + "</li>")
      	}


      }
});
// toggle form
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});