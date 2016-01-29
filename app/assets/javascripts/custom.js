//$(document).ready(function() {
//
//    //Change style of navbar on different pages
//    if ($("div").hasClass("about")) {
//        $('.navbar-inverse').css('background-color', 'rgba(0,0,0,.4)');
//        $('body').css('padding-top', '0px');
//        $('.navbar-inverse .navbar-nav li a').css('color', '#eee');
//    }
//
//    if ($("div").hasClass("resources")) {
//        $('.navbar-inverse').css('background-color', '#5BC0DE');
//        $('.navbar-inverse .navbar-nav li a').css('color', '#eee');
//        $('.intro').css('background-color', '#5BC0DE');
//        $('.btn-info').css('background-color', '#5BC0DE');
//        $('.card').css('color', '#5BC0DE');
//    }
//
//    if ($("div").hasClass("topics")) {
//        $('.navbar-inverse').css('background-color', '#00cc44');
//        $('.navbar-inverse .navbar-nav li a').css('color', '#eee');
//        $('.intro').css('background-color', '#00cc44');
//        $('.btn-info').css('background-color', '#00cc44');
//        $('.card').css('color', '#00cc44');
//    }
//
//});

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




