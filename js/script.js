/* Navigation Scrolling Function */
$("nav ul a").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 120
    }, 600);
});

/* Social Icon Rollover function */
$("#contactLeft img").hover(function() {
    var achName = $(this).attr("name");
    $(this).attr("src", "img/soc/" + achName + "_hover.png");
			}, function() {
    var achName = $(this).attr("name");
    $(this).attr("src", "img/soc/" + achName + ".png");
});