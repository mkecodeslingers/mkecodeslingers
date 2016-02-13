
//Back to top button
var offset = 40;
var duration = 300;

$(window).scroll(function() {
    if($(this).scrollTop() > offset) {
        $(".up").fadeIn(duration);
    } else {
        $(".up").fadeOut(duration);
    }

    $(".up").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, duration).finish();
    });
});

$(function(){
       $('.cardClass').each(function(){
           var myTag = $(this).text();
           var limit = 100;
   
           if (myTag.length > limit){
       
               $(this).text(myTag.substring(0, (limit + 1)) + "...");
           }else{
               $(this).text(myTag);            
               } 
       });
   });



