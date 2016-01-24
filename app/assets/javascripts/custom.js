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
        $('.intro').css('background-color', '#5BC0DE');
        $('.btn-info').css('background-color', '#5BC0DE');
        $('.card').css('color', '#5BC0DE');
    }

    if ($( "div" ).hasClass( "topics" ))
    {
        $('.navbar-inverse').css('background-color', '#00cc44');
        $('.navbar-inverse .navbar-nav li a').css('color', '#eee');
        $('.intro').css('background-color', '#00cc44');
        $('.btn-info').css('background-color', '#00cc44');
        $('.card').css('color', '#00cc44');
    }

});
