//just some simple coe that includes ball speed,
var canvas;
var canvasContext;
var ballX = 75;
var ballY = 75;
var ballSpeedX = 8;
var ballSpeedY = 8;
var lives = 5;
var showingEndScreen = false;
var gameWon = false;
var win = "Congratulations You Win!";
var lose = "Game Over";
var paddleX = 400;

const Paddle_Width = 100;
const Paddle_Thickness = 8;
const Paddle_Distance =60;
const Block_W = 80;
const Block_H = 20;
const Block_Col = 10;
const Block_Row = 14;
const Block_Gap = 2;

var brickGrid = new Array(Block_Col * Block_Row);
var bricksLeft = 0;

var mouseX = 0;
var mouseY = 0;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseClick);

    canvas.addEventListener('mousemove', updateMousePos);    

    brickReset();
    ballReset();
}
    
function updateMousePos(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;

    paddleX = mouseX - Paddle_Width/2;

    //hack to test ball in any position
    /*
    ballX = mouseX;
    ballY = mouseY;
    ballSpeedX = 4;
    ballSpeedY = -4;
    */
}

function brickReset(){
    bricksLeft = 0;
    for(var i=0; i< 3 * Block_Col; i++){ // adds an empty space at the top of the screen
        brickGrid[i] = false
    }
    for(var i=3 * Block_Col; i<Block_Col * Block_Row; i++){ // adds the rest of the bricks to the array
        brickGrid[i] = true;
       bricksLeft++;
    } // end of for each brick loop

} // end of brickReset func

function updateAll() {
    moveAll();
    drawAll();
}

function ballReset(){
        ballX = canvas.width/2;
        ballY = canvas.height/2;      
}

function moveAll(){
    ballMove();
    ballBrickHandling();
    ballPaddleHandling();
}

function ballMove(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;
        // right side of screen
    if(ballX > canvas.width && ballSpeedX > 0.0){ 
        ballSpeedX *= -1;
    }
    // left side of screen
    if(ballX < 0 && ballSpeedX < 0.0){ 
        ballSpeedX *= -1;
    }
// bottom of screen
    if(ballY > canvas.height){ 
        lives --;
        ballReset();                
    }
    // top of screen
    if(ballY < 0 && ballSpeedY < 0.0){ 
        ballSpeedY *= -1;
    }
}
function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX,topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext. arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorText(showWords, textX, textY, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.font = "30px Arial";
    canvasContext.fillText(showWords, textX, textY);
}

function isBrickAtColRow(col, row) {
    if(col >= 0 && col < Block_Col && row >= 0 && row < Block_Row){
        var brickIndexUnderCoord = rowColToArrayIndex(col, row);
        return brickGrid[brickIndexUnderCoord]
    } else{
        return false;
    }
}

function ballBrickHandling(){
    var ballBrickCol = Math.floor(ballX / Block_W);
    var ballBrickRow = Math.floor(ballY / Block_H);
    var brickIndexUnderball = rowColToArrayIndex(ballBrickCol, ballBrickRow);
    
    if(ballBrickCol >= 0 && ballBrickCol < Block_Col && ballBrickRow >= 0 && ballBrickRow < Block_Row){
        if(isBrickAtColRow(ballBrickCol, ballBrickRow)){
            brickGrid[brickIndexUnderball] = false;
            bricksLeft--;
            //console.log(bricksLeft);            

            var prevBallX = ballX - ballSpeedX;
            var prevBallY = ballY - ballSpeedY;
            var prevBrickCol = Math.floor(prevBallX / Block_W);
            var prevBrickRow = Math.floor(prevBallY / Block_H);

            var bothTestsFailed = true;

            if(prevBrickCol != ballBrickCol){                
                if(isBrickAtColRow(prevBrickCol, ballBrickRow) == false){ //checking if there is a brick on the side of the brick that was hit
                    ballSpeedX *= -1;
                    bothTestsFailed = false;
                }                
            }
            if(prevBrickRow != ballBrickRow){
                
                if(isBrickAtColRow(prevBrickRow, ballBrickCol) == false){ //checking if there is a brick on the top or bottom of the brick that was hit
                    ballSpeedY *= -1;
                    bothTestsFailed = false;
                }                
            }
            
            if(bothTestsFailed){ // prevents ball from going right through the edge of a brick when other bricks are around it
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }

        } // end of if birck is there remove it and change ball direction        
    } // end of checking for valid col and row
} // end of ballBrickHandling func

function ballPaddleHandling(){
    var paddleTopEdgeY = canvas.height-Paddle_Distance;
    var paddleBottomEdgeY = paddleTopEdgeY + Paddle_Thickness;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleX + Paddle_Width;

    if(ballY > paddleTopEdgeY && // ball below the top of the paddle
        ballY < paddleBottomEdgeY && // ball above bottom of the paddle
        ballX > paddleLeftEdgeX && // ball right of the left side of the paddle 
        ballX < paddleRightEdgeX){ // ball left of the right side of the paddle

            ballSpeedY *= -1;
            
            var centerOfPaddleX = paddleX + Paddle_Width/2;
            var ballDistFromPaddleCenterX = ballX - centerOfPaddleX;

            ballSpeedX = ballDistFromPaddleCenterX * 0.35; // increase this number for more ball speed off the paddle

            if(bricksLeft == 0){
                gameWon = true;
            } 
    }
} 
// end of ballPaddleHandling

function drawAll(){  

    if (lives == 0) {
        gameEnd(lose);
    }else if (gameWon == true){
        gameEnd(win);
    } else {
        colorRect(0,0, canvas.width, canvas.height, 'black');
        colorCircle(ballX, ballY, 10, 'red');
        colorRect(paddleX, canvas.height-Paddle_Distance, Paddle_Width, Paddle_Thickness, 'grey' );
        drawBricks();
        colorText("lives: "+lives, 50, 50, 'grey');
    }    
}

function gameEnd(winLose){   
    showingEndScreen = true;     
    colorRect(0,0, canvas.width, canvas.height, 'black');   
    colorText(winLose, canvas.width/3+25, canvas.height/2, 'white');
    colorText("click to continue", canvas.width/3, canvas.height - 75, 'white');
    ballSpeedX =0;
    ballSpeedY = 0;
    ballY = 400;    
}

function handleMouseClick(evt){
    if(showingEndScreen == true){
        lives = 5;
        ballSpeedX = 8;
        ballSpeedY = 8;
        gameWon = false;
        ballReset();
        brickReset();
        showingEndScreen == false;
    }
}

function rowColToArrayIndex(col, row){
    return col + Block_Col * row;
}

function drawBricks(){

    for (let eachRow = 0; eachRow < Block_Row; eachRow++) {
        for(var eachCol=0; eachCol<Block_Col; eachCol++){

            var arryIndex = rowColToArrayIndex(eachCol, eachRow);

            if(brickGrid[arryIndex] == true){
                colorRect(Block_W*eachCol, Block_H*eachRow, Block_W-Block_Gap, Block_H-Block_Gap, 'crimson');
            } 
        }      
    } 
} 
// end of drawBricks func



