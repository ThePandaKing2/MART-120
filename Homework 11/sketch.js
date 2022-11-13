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

// Enemy shape 1
var shape1X = 200;
var shape1Y = 200;
var shapeXSpeed;
var shapeYSpeed;

// Enemy shape 2
var shape2X = 400;
var shape2Y = 400;


function setup() {
  createCanvas(800, 600);
  shape1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 8);
  shape1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 5);
  
  shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 5);
  shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 2);  
  
}

function mouseClicked()
{
  mouseXShape = mouseX;
  mouseYShape = mouseY;
}

function draw() {
  background('beige');
  stroke(0);
  fill(0);
  // Top Line
  rect(0,0,width,5);
  // Left Line
  rect(0,0,5,height);
  // Bottom Line
  rect(0,height-5,width, 5 );
  // Right Line Exit
  rect(width-5,0,50);
  rect(width-5,125,height);
  
  //Exit
  textSize(20);
  text("EXIT", width-50,height-550);
  
  // Sprite
  fill('firebrick');
  circle(charX,charY,30);
  
  // Controls
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
  
  // Enemy 1
  fill('darkblue');
  square(shape1X,shape1Y,30);
  shape1X += shape1XSpeed;
  shape1Y += shape1YSpeed;

  // Enemy Movement
    if(shape1X > width)
    {
        shape1X = 0;
    }
    if(shape1X < 0)
    {
        shape1X = width;
    }
    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    if(shape1Y < 0)
    {
        shape1Y = height;
    }
  
    // Enemy 2
  fill('blue');
  square(shape2X,shape2Y,40);
  shape2X += shape2XSpeed;
  shape2Y += shape2YSpeed;

  // Enemy Movement
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
  
  // Exit Message
      if(charX > width && charY > height-550 && charY < height-465)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Congratulations! You Did It!!", width/2-150, height/2-50);
    
    }
  
  //Enemy 3 (Mouse Enemy)
  fill('darkgreen');
  square(mouseXShape, mouseYShape, 40);

}