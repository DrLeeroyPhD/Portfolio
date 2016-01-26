/* Navigation Scrolling Function */
$("nav ul a").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 200
    }, 600);
});


/* Div Height Resizing base on Window Width */
//var height = $(window).width();
//height = height * 900 / 1680;
//
//if(height > 840) {
//    height = 1680 - height + 450;
//    840 - height;
//}
//
//$("#aboutFill").height(height);