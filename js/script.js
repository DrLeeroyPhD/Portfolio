/* Navigation Scrolling Function */
$("nav ul a").click(function(){
    var jump = "#" + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(jump).offset().top - 200
    }, 600);
});


// Get the modal
var modal = $('#myModal')[0];

// Get the button that opens the modal
var btn = $('.mdl');

// Get the <span> element that closes the modal
var span = $('.close')[0];

// Enable use of function on all items in .mdl array
for (i=0; i< btn.length; i++) {
    var btn_tmp = $('.mdl')[i];
    
    btn_tmp.onclick = function() {
        var disp = this.getAttribute("id");
        console.log(disp);
        
        // Image Carousel
        
        // CHURCH
        if(disp === "church"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/home_small.png'></li><li><img src='img/about_small.png'></li><li><img src='img/calendar_small.png'></li></ul></div><p>The first Wordpress website I made. It's been a long work in progress, but it got me to start learning to work within a CMS, with PHP, theming, and what it means to work with a database.</p><a href='http://www.cg7portland.org/' target='_blank'><button>Check it Out!</button></a>")
        } 
        
        // SIDEKICKS
        else if(disp === "sidekicks"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/Sidekicks1.png'></li><li><img src='img/Sidekicks2.png'></li><li><img src='img/Sidekicks3.png'></li></ul></div><p>This project was my first time working with a Wordpress bare bones framework to build the website that I intended. This project also challenged me to work in a music player and Calendar as well as making the User Interface for the band members who would be signing in nice and easy to use.</p><a href='http://www.singalongsidekicks.com/' target='_blank'><button>Check it Out!</button></a>")
        }
        
        // RANDOM
        else if(disp === "random"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/random1.png'></li><li><img src='img/random2.png'></li><li><img src='img/random3.png'></li></ul></div><p>The fastest way to learn code is to dive deep and make something with it, right? I'd spent plenty of time watching videos and taking quizzes, but had never truly built anything with Javascript. This project was inspired by the desire to actually make something out of Javascript - and without the help of jQuery!</p><a href='http://www.sweetwebsitebro.com/random' target='_blank'><button>Check it Out!</button></a>")
        }
        
        // ELSE
        else{
            $('inner-content').html('<h2>Hello World</h2>')
        }
        
        modal.style.display = "block";
    }
}

// When the user clicks on x, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Escape key closes modal
$(document).keydown(function(e) {
     if (e.keyCode == 27) {
        modal.style.display = "none";
    }
});

// Carousel Timing & Movement

var t = setInterval(function(){
    
    // Grabs width of images in the carousel and assigns that width to the scrolling animation
    
    var imgWidth = $("#carousel ul li img").width();
    
    $("#carousel ul").animate({marginLeft:-imgWidth},1000,function(){
        $(this).find("li:last").after($(this).find("li:first"));
        $(this).css({marginLeft:0});
    })
},5000);