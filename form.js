$(document).ready(function()
{
    // $("#input-1").on("input",function(){
    // 	if($("#input-1").val().length==0)
    //       	{$(".first-name-text").css({"top":"0px","color":"black"})}
    //      else
    //         {$(".first-name-text").css({"top":"-20px","color":"blue"})}
    //   })
    // $("#input-2").on("input",function(){
    // 	if($("#input-2").val().length==0)
    //       	{$(".second-name-text").css({"top":"0px","color":"black"})}
    //      else
    //         {$(".second-name-text").css({"top":"-20px","color":"blue"})}
    //   })
    // $("#input-3").on("input",function(){
    // 	if($("#input-3").val().length==0)
    //       	{$(".email-text").css({"top":"40px","color":"black"})}
    //      else
    //         {$(".email-text").css({"top":"20px","color":"blue"})}
    //   })
    // $("#input-4").on("input",function(){
    // 	if($("#input-4").val().length==0)
    //       	{$(".address-text").css({"top":"40px","color":"black"})}
    //      else
    //         {$(".address-text").css({"top":"20px","color":"blue"})}
    //   })
    // var aInput = {};
    // aInput[] = $("#main input");
    for (var i = 0; i < 2; i++) {
        $($("#main input")[i]).on("input", function(){
            var oDiv = $($("#main input")[i]).next("div");
            if($($("#main input")[i]).val().length == 0){      /*这句出问题了，但是$($("#main input")[i]).val().length == 0在chrome的控制台里是没问题的*/
                oDiv.css({"top":"0px", "color":"black"});
                }
            else{
                oDiv.css({"top":"-20px", "color":"blue"});
                }
        })
    }
    

    for (var i = 2; i < 4; i++) {
        $($("#main input")[i]).on("input", function(){
            var oDiv = $($("#main input")[i]).next("div");
            if($($("#main input")[i]).val().length == 0){
                oDiv.css({"top":"a0px", "color":"black"});
                }
            else{
                oDiv.css({"top":"20px", "color":"blue"});
                }
        })
    }
    


 })    
   