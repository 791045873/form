$(document).ready(function(){
	/*创建id为main的div*/
	$("#head").append('<div id="main"></div>');
	/*在id为main的div下创建五个div,class分别为line1,2,3,4,5*/
	$("#main").append('<div class="line1"></div>');
	$("#main").append('<div class="line2"></div>');
	$("#main").append('<div class="line3"></div>');
	$("#main").append('<div class="line4"></div>');
	$("#main").append('<div class="line5"></div>');
	/*在class为line1的div下创建三个div*/
	$(".line1").append('<div class="cancle"><p>Cancle</p></div>');
	$(".line1").append('<div class="new-acount"><p>New Acount</p></div>');
	$(".line1").append('<div class="sign-up"><p>Sign Up</p></div>');
	/*在class为line3的div下创建2个div*/
	$(".line3").append('<div class="first-name"></div>');
	$(".line3").append('<div class="second-name"></div>');
	/*在class为first-name的div里创建input标签，并创建class为first-name-text的div*/
	$(".first-name").append('<input type="text" name="" id="input-1" placeholder="First name"/>'); 
	$(".first-name").append('<div class="first-name-text" style="display:none;"><p>First name</p></div>')
	/*在class为second-name的div里创建input标签，并创建class为second-name-text的div*/
	$(".second-name").append('<input type="text" name="" id="input-2" placeholder="Second name"/>'); 
	$(".second-name").append('<div class="second-name-text" style="display:none;"><p>Second name</p></div>')
	/*在class为line4的div里创建input标签，并创建class为email-text的div*/
	$(".line4").append('<input type="text" name="email" id="input-3" placeholder="Email"/>'); 
	$(".line4").append('<div class="email-text" style="display:none;"><p>Email</p></div>')
	/*在class为line5的div里创建input标签，并创建class为address-text的div*/
	$(".line5").append('<input type="text" name="" id="input-4" placeholder="Address"/>'); 
	$(".line5").append('<div class="address-text" style="display:none;"><p>Address</p></div>')
    /*创建完成*/
    
    $("#main input").on("input",function(){
        $("div",this.parentNode).css("display", $(this).val().length === 0 ? "none" : "block");
    });
})