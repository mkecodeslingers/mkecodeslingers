
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

// Truncate to specific character
var myTag = $('#truncate').text();
if (myTag.length > 15) {
  var truncated = myTag.trim().substring(0, 100) + "…";
  $('#truncate').text(truncated);
}



