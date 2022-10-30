function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    fill('white')
    strokeWeight(1);
    // Head
    ellipse(200,130,220,250)
    
    // left eye
    strokeWeight(1);
    ellipse(150,75,50,40);
    circle(150,75,30);
    strokeWeight(3);
    line(130,40,175,60);
    strokeWeight(15);
    point(150,75)
    
    // right eye
    strokeWeight(1)
    circle(250,75,50);
    circle(250,75,35);
    strokeWeight(3);
    line(225,50,270,35);
    strokeWeight(20);
    point(250,75)
    
    // mouth
    strokeWeight(1);
    fill(255,0,0)
    ellipse(200,175,80,60);
    
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
    textSize(10)
    text("Cheering for the Home Team",0,380 )
    text("By: Connor Daniels",20,390)
  }