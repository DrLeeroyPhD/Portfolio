function getRandomColor(){for(var o="0123456789ABCDEF".split(""),t="#",n=0;6>n;n++)t+=o[Math.floor(16*Math.random())];document.body.style.backgroundColor=t}var button=document.getElementById("next");getRandomColor();var xmlhttp=new XMLHttpRequest,url="json/questions.json";xmlhttp.onreadystatechange=function(){if(4==xmlhttp.readyState&&200==xmlhttp.status){var o=JSON.parse(xmlhttp.responseText);button.onmousedown=function(){var t=Math.floor(Math.random()*o.general.length),n=o.general[t];document.getElementById("display").innerHTML=n,getRandomColor()}}},xmlhttp.open("GET",url,!0),xmlhttp.send();