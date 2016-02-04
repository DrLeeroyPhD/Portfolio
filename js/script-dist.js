$("nav ul a").click(function(){var t="#"+$(this).attr("name");$("html, body").animate({scrollTop:$(t).offset().top-200},600)});
