//mouth variables x and y
var mouthDirection = 2
var mouthX = 200
var mouthY = 175

//left eye variables x
var leftDirection
var leftX = 150

//right eye variables y
var rightDirection = 3
var rightY = 75

//text size
var size = 10
var count = 0
var textDirection = 1

function setup() {
  createCanvas(400, 400);
  leftDirection = floor(random() * 10) + 1;
}

function draw() {
  background(220);
  
  
  fill('white')
  strokeWeight(1);
  // Head
  ellipse(200,130,220,250)

      // hat
  strokeWeight(3);
  line(135,30,265,30)
  strokeWeight(1)
  fill('yellow')
  rect(175,20,50,5)
  
  // left eye
  fill('white');
  strokeWeight(1);
  ellipse(leftX,75,50,40);
  fill('blue');
  circle(leftX,75,30);
  fill('white')
  strokeWeight(3);
  line(130,40,175,60);
  strokeWeight(15);
  point(leftX,75)
  //Left Eye Movement
  leftX += leftDirection
  if(leftX >= 400 || leftX <= 0)
    { 
      leftDirection *= -1;
    }

  
  // right eye
  strokeWeight(1)
  circle(250,rightY,50);
  fill('blue')
  circle(250,rightY,35);
  strokeWeight(3);
  line(225,50,270,35);
  strokeWeight(20);
  point(250,rightY)
  //Right Eye Movement
  rightY+=rightDirection
  if(rightY >= 400 || rightY <= 0)
    {
      rightDirection *= -1;
    }
  
  // mouth
  strokeWeight(1);
  fill(255,0,0)
  ellipse(mouthX,mouthY,80,60);
  //Mouth Movement
  mouthX+=mouthDirection;
  mouthY+=mouthDirection;
  if(mouthX >= 400 || mouthX <= 0)
  {
    mouthDirection *= -1;
  }
  if(mouthY >= 400 || mouthY <= 0)
    
  {
    mouthDirection *=-1;
  }
  
    // nose
  strokeWeight(1)
  fill('white')
  line(180,130,220,130)
  triangle(180,130,200,90,220,130);
  
    // arms
  strokeWeight(5);
  line(170,280,100,220);
  line(230,280,300,220)
  
  
  // body
  strokeWeight(1);
  fill('firebrick');
  rect(170,250,60,100);
  fill('darkgreen');
  square(192.5,260,15);
  square(192.5,280,15);
  square(192.5,300,15);
  
  // legs
  fill('darkblue');
  rect(170,350,15,50);
  rect(215,350,15,50);
  
  // Signature
  textSize(size)
  text("Cheering for the Home Team",0,380 );
  size+=textDirection;
  count++;
  if(count > 5)
    {
      textDirection *= -1
    count = 0;
    }
  textSize(10)
  text("By: Connor Daniels",20,390);
}