//Check off specific todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//Delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


//Creating new todos
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>")
    } else {
        
    }
});


//Click icon to add new todo
$(".fa-pencil-alt").click(function() {
    $("input[type='text']").fadeToggle()
});

