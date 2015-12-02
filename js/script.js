var navi = document.getElementsByTagName("a");

navi.mousedown = function(){
    var startY = window.pageYOffset;
    console.log(startY);    
//    var jump = "#" + this.getAttribute("name");
//    document.getElementsByTagName("html body").scrollTop = jump;
}

//$("nav ul a").click(function(){
//    var jump = "#" + $(this).attr("name");
//    $('html, body').animate({
//        scrollTop: $(jump).offset().top
//    }, 500);
//});



// http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

//function smoothScroll(eID) {
//    var stopY = elmYPosition(eID);
//    var distance = stopY > startY ? stopY - startY : startY - stopY;
//    if (distance < 100) {
//        scrollTo(0, stopY); return;
//    }
//    var speed = Math.round(distance / 100);
//    if (speed >= 20) speed = 20;
//    var step = Math.round(distance / 25);
//    var leapY = stopY > startY ? startY + step : startY - step;
//    var timer = 0;
//    if (stopY > startY) {
//        for ( var i=startY; i<stopY; i+=step ) {
//            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//        } return;
//    }
//    for ( var i=startY; i>stopY; i-=step ) {
//        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//    }
//}


//Setting top CSS settings according to a:active w/ transition

//Function
//Get starting Y position and where target position is
// endPos - startPos = distance