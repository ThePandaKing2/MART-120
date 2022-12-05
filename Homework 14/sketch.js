// Character position variable
var charX = 50;
var charY = 550;

// Key Variables
var w = 87;
var a = 65;
var s = 83;
var d = 68;

// Mouse Variable
var mouseXShape;
var mouseYShape;

//Enemy Shapes
var shapeEx = [];
var shapeEy = [];
var shapeXspeed = [];
var shapeYspeed = [];
var enemySize = [];

// Enemy shape 1
var shape1X = 200;
var shape1Y = 200;
var shapeXSpeed;
var shapeYSpeed;

// Enemy shape 2
var shape2X = 400;
var shape2Y = 400;

//var listOfColors = ['#aabf12','#33ab12','#165512','#fe3fa2','#a345cd'];

var counter = 0

//Random Number
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 20;
}
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
//Enemy Spawn
  
    for (var i = 0; i < 5; i++) {
        shapeXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
        shapeYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
        shapeEx[i] = getRandomNumber(800);
        shapeEy[i] = getRandomNumber(600);
        enemySize[i] = getRandomNumber(50);
      
    }

}
//Enemy Spawn/Boundries
function createEnemy(){
  
      for (var i = 0; i < shapeEx.length; i++) {
       square(shapeEx[i], shapeEy[i], enemySize[i]);
        shapeXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
        shapeYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);

        fill(counter += .05, 100, 100);
        if (counter >= 360){
          counter = 0;
        }
        
        shapeEx[i] += shapeXspeed[i];
        shapeEy[i] += shapeYspeed[i];

        if (shapeEx[i] > width) {
            shapeEx[i] = 0;
        }
        if (shapeEx[i] < 0) {
            shapeEx[i] = width;
        }
        if (shapeEy[i] > height) {
            shapeEy[i] = 0;
        }
        if (shapeEy[i] < 0) {
            shapeEy[i] = height;
        }
    }
}

   // Controls
function characterMovement(){
    if(keyIsDown(w))
    {
        charY -= 5;   
    }
    if(keyIsDown(s))
    {
        charY += 5;   
    }
    if(keyIsDown(a))
    {
        charX -= 5;   
    }
    if(keyIsDown(d))
    {
        charX += 5;   
    }
    }

//Mouse Enemy 
function mouseClicked(){
  mouseXShape = mouseX;
  mouseYShape = mouseY;
}

//Outline/Border
function createOutline(){
  // Top Line
  rect(0,0,width,5);
  // Left Line
  rect(0,0,5,height);
  // Bottom Line
  rect(0,height-5,width, 5 );
  // Right Line Exit
  rect(width-5,0,50);
  rect(width-5,125,height);

}

//Character/Sprite
function createCharacter(){
    // Sprite
  fill('firebrick');
  circle(charX,charY,30);
}

//exit
function exit(){
  //Exit
  fill(0);
  textSize(20);
  text("EXIT", width-50,height-550);
}


//Exit Message
function exitMessage(){
   
  // Exit Message
      if(charX > width && charY > height-550 && charY < height-465)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Congratulations! You Did It!!", width/2-150, height/2-50);
    
    }
}

//Mouse Enemy
function mouseEnemy(){
    
  //Enemy 3 (Mouse Enemy)
  fill('blue')
  square(mouseXShape, mouseYShape, 40);
}

function draw() {
  
  fill(0);
  stroke(0);
  background('beige');
  characterMovement();
  createOutline();
  createCharacter();
  exit();
  exitMessage();
  mouseEnemy();
  createEnemy();
  
  
}