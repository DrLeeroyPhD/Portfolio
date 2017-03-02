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
        
        // MONDRIAN
        else if(disp === "mondrian"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/mondrian1.png'></li><li><img src='img/mondrian2.png'></li><li><img src='img/mondrian3.png'></li></ul></div><p>Inspired by Jennifer Dewalt's <a href='https://jenniferdewalt.com/' target='_blank'>180 Websites in 180 Days</a>, I set out on an adventure to explore Javascript and Web Development in a way I hadn't before. The Mondrian is the first project I'd decided to take on, paving the way for a beautiful future of ... random little projects.</p><a href='http://www.sweetwebsitebro.com/Mondrian/' target='_blank'><button>Check it Out!</button></a>")
        }
      
      
        // BASIC
        else if(disp === "basic"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/basic1.png'></li><li><img src='img/basic2.png'></li><li><img src='img/basic3.png'></li></ul></div><p>My wife is an expert in Star Wars' Galactic basic, I, however, can't write a lick of it. Find yourself in a similar predicament, but want to write something sweet in the language of love? Then this translator is for you, it takes plain English and translates it into the Galactic Basic language. You'll sweep your significant other off of their feet!</p><a href='http://www.sweetwebsitebro.com/Basic/' target='_blank'><button>Check it Out!</button></a>")
        }
      
      
        // RANDOM
        else if(disp === "random"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/random1.png'></li><li><img src='img/random2.png'></li><li><img src='img/random3.png'></li></ul></div><p>The fastest way to learn code is to dive deep and make something with it, right? I'd spent plenty of time watching videos and taking quizzes, but had never truly built anything with Javascript. This project was inspired by the desire to actually make something out of Javascript - and without the help of jQuery!</p><a href='http://www.sweetwebsitebro.com/random' target='_blank'><button>Check it Out!</button></a>")
        }
      
        //MATERIAL FLOW
        else if(disp === "material"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/material1.png'></li><li><img src='img/material2.png'></li><li><img src='img/material3.png'></li></ul></div><p>This was my first experience working with a group of people on a singular site where I was pushed to learn and learn fast, which was a healthy experience for me. This opportunity allowed me to learn more about databases, calling in information, and using React in an ASP.NET environment.</p><a href='http://www.materialflow.com/' target='_blank'><button>Check it Out!</button></a>")
        }
      
        // Pong
        else if(disp === "pong"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/pong1.png'></li><li><img src='img/pong2.png'></li><li><img src='img/pong3.png'></li></ul></div><p>Lets be honest, the HTML5 Canvas can be complex. In attempt to demystify it as well as to further challenge myself in Javascript, I figured, why not recreate one of the most iconic Atari games to exist? This project truly humbled me in my programming abilities and taught me so much more than I ever expected.</p><a href='http://www.sweetwebsitebro.com/pong' target='_blank'><button>Check it Out!</button></a>")
        }
      
      // SweetWebsiteBro
        else if(disp === "sweet"){
            $('.inner-content').html("<div id='carousel'><ul><li><img src='img/sweet1.png'></li><li><img src='img/sweet2.png'></li><li><img src='img/sweet3.png'></li></ul></div><p>The website that you're currently visiting. I wanted to push myself when making my portfolio, I didn't want to use any plugins, I wanted to how to build everything myself. I did eventually use jQuery so that a few features would be available to me, but in the end, I hand-coded the modal, the scrolling action with the navigation, and the carousel inside of the modal windows.</p><a href='http://www.sweetwebsitebro.com/' target='_blank'><button>Check it Out!</button></a>")
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