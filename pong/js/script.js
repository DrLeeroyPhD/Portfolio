var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 5;

var showingWinScreen = true;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 10;

function calculateMousePos(evt){
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return{
    x:mouseX,
    y:mouseY
  };
}

function handleMouseClick(evt){
  if(showingWinScreen){
    player1Score = 0;
    player2Score = 0;
    showingWinScreen = false;
  }
}

window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  
  var framesPerSecond = 30;
  setInterval(callBoth, 1000/framesPerSecond);
}

function callBoth(){
  moveEverything();
  drawEverything();
  
  canvas.addEventListener('mousedown', handleMouseClick);
  
  canvas.addEventListener('mousemove',
    function(evt){
      var mousePos = calculateMousePos(evt);
      paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
  });
}

function ballReset(){
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE){
    showingWinScreen = true;
  }
}

function computerMovement(){
  var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
  if(paddle2YCenter < ballY-35){
    paddle2Y += 6;
  } else if(paddle2YCenter > ballY + 35){
    paddle2Y -= 6;
  }
}

function moveEverything(){
  if(showingWinScreen){
    return;
  }
  computerMovement();
  
  // Move Ball
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  
  // If Ball touches edge of the screen, bounce
  if(ballX >= canvas.width){
    if(ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT){
      ballSpeedX = -ballSpeedX;
      
      var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
      ballSpeedY =  deltaY * 0.35;
    } else{
      // If touches left side, not on paddle, reset
          player1Score++; // must be before ball reset
          ballReset();
    }
  }
  if(ballX <= 0){
    // If ball touches paddle, bounce
    if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT){
      ballSpeedX = -ballSpeedX;
      var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
      ballSpeedY =  deltaY * 0.35;
    } else{
      // If touches left side, not on paddle, reset
          player2Score++; // must be before ball reset
          ballReset();
    }
  }
  if(ballY >= canvas.height){
    ballSpeedY = -ballSpeedY;
  }
  if(ballY <= 0){
    ballSpeedY = -ballSpeedY;
  }
}

function drawNet(){
  for(var i=0; i < canvas.height; i+=40){
    colorRect(canvas.width / 2-1, i, 2, 20, 'white');
  }
}

function drawEverything(){
  // Background Black
  colorRect(0,0,canvas.width, canvas.height, 'black');
  
  if(showingWinScreen){
    canvasContext.fillStyle = 'white';
    if(player1Score >= WINNING_SCORE){
      canvasContext.fillText('You Won!', 360, 200);
    } else if(player2Score >= WINNING_SCORE){
      canvasContext.fillText('Computer Won', 350, 200);
    }
    
    
    canvasContext.fillText('Click to Play', 350, 500);
    return;
  }
  
  // Ball
  colorCircle(ballX, ballY, 8, 'white');
  
  // Left Paddle
  colorRect(0, paddle1Y, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
  // Right Paddle
  colorRect(canvas.width - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
  
  drawNet();
  
  // Player 1 Score
  canvasContext.fillText(player1Score, 100,100);
  // Player 2 Score
  canvasContext.fillText(player2Score, canvas.width - 100,100);
}

function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function colorCircle(centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}