$(document).ready(function()
{
    $("#main input").on("input",function(){
        
        $("div",this.parentNode).css("display", $(this).val().length === 0 ? "none" : "block");
    })
 })    
   