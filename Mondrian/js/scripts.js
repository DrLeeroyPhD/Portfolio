/*** VARS ***/
var paintColor = "white";
var color = document.querySelectorAll('.color');
var box = document.querySelectorAll('.box');
var button = document.getElementById('reset');
var viewer = document.getElementById('viewer');


/*** COLOR DOTS ***/
// Fills in Color Dots with ID Name
for (i=0; i < color.length; i++){
  var fill = color[i].id;
  color[i].style.backgroundColor = fill;
  
  // Allows Dots to be Selected
  color[i].onclick = function(){changeValue(this);};
}

// Assigns Paint a color value
function changeValue(x){
  paintColor = x.id;
  updateViewer(paintColor);
}


/*** COLOR VIEWER ***/
function updateViewer(paintColor){
  viewer.style.backgroundColor = paintColor;
}

/*** MONDRIAN ***/

// Fills in Color Dots with ID Name
for (j=0; j < box.length; j++){
  
  // Allows Dots to be Selected
  box[j].onclick = function(){paint(this);};
}

// Assigns Paint a color value
function paint(x){
  x.style.backgroundColor = paintColor;
}


/*** RESET ***/
button.onclick = function(){
  for (k = 0; k < box.length; k++){
    box[k].style.backgroundColor = "white";
  }
}