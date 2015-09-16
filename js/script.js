var nav = document.getElementsByTagName("a");
for(var i = 0; i < nav.length; i++){
    console.log(nav[i]);
}

//$("nav ul a").click(function(){
//    var jump = "#" + $(this).attr("name");
//    $('html, body').animate({
//        scrollTop: $(jump).offset().top
//    }, 500);
//});