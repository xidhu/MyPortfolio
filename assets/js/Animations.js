$(document).ready(function () {
    $('body').fadeOut(0, function () {
            
    });
    $('body').fadeIn(800, function () {
            
    });

    $('.btn').click(function (e) { 
        e.preventDefault();
        $('.btn').animate({width:'25vw'});
        $('.btn').animate({width:'20vw'});
    });
});