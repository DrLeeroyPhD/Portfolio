/* Navigation Scrolling Function */
$("nav ul a").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 200
    }, 600);
});


/* LIGHTBOX */
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');

$overlay.append($image);

$('body').append($overlay);
$overlay.fadeOut();

$('#gallery a').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('href');
    $image.attr('src', imageLocation);
    $overlay.fadeIn(400);
});

$overlay.click(function(){
    $overlay.fadeOut(400);
});