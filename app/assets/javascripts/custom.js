$(document).ready(function() {

    if ($( "div" ).hasClass( "about" ))
    {
        $('.navbar-inverse').css('background-color', 'rgba(0,0,0,.4)');
        $('body').css('padding-top', '0px');
        $('.navbar-inverse .navbar-nav li a').css('color', '#eee');
    }

    if ($( "div" ).hasClass( "resources" ))
    {
        $('.navbar-inverse').css('background-color', '#5BC0DE');
        $('.navbar-inverse .navbar-nav li a').css('color', '#eee');
    }

});
