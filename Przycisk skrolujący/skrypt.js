$(document).ready(function(){
    $(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $("#myBtn").fadeIn();
    } else {
        $("#myBtn").fadeOut();
    }  
    });
       
$("#myBtn").click(function(){
    $("html").animate({scrollTop: '0'}, 500);   
});
	
    
});
