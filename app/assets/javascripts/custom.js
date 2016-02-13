
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

//This function will truncate the text for an tag that has the truncate class
//Set limit variable to length to truncate at
$(function(){
    $('.truncate').each(function(){
        var tagForTruncate = $(this).text();
        var limit = 100;

        if (tagForTruncate.length > limit){
            $(this).text(tagForTruncate.substring(0, (limit + 1)) + ". . .");
        } else {
            $(this).text(tagForTruncate);            
        } 
    });
});



