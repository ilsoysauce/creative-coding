function setup() {
  // create a canvas
  createCanvas(400, 400);


  // disable animation
  noLoop();
}

function draw() {
  background(220); //color (rgb 255, 255, 255)


   stroke(0,0); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill(255,204,77); // sets the fill color of circle

  
  circle(200,200,250) // the yellow emoji circle

fill(220);
rect(40, 70, 350, 90)
//the orange part of the explosion
fill(243,108,36);
triangle(200, 250, 300, 100, 100, 100)

//the broken half of the emoji
fill(255,204,77);
triangle(79, 180, 90, 140, 100, 180)
triangle(100, 180, 110, 150, 116, 180)
triangle(116, 180, 130, 137, 150, 180)
triangle(125, 180, 146, 145, 150, 180)
triangle(149, 180, 160, 150, 190, 180)
triangle(190, 180, 210, 143, 230, 180)
triangle(230, 180, 250, 149, 270, 180)
triangle(220, 180, 230, 152, 285, 180)
triangle(220, 180, 270, 142, 285, 180)
triangle(260, 180, 286, 147, 305, 180)
triangle(260, 180, 310, 148, 320, 180)
rect(120, 180, 175, 100)

//cloud
fill(164,172,177);
ellipse(195, 90, 300, 50) 
circle(180, 70, 79) //x,y, diameter
circle(140, 80, 50)
circle(120, 90, 80)
circle(50, 60, 90)
circle(80, 70, 80)
circle(125, 55, 65)
circle(165, 100, 90)
circle(200, 90, 80)
circle(220, 80, 60)
circle(240, 90, 65)
circle(250, 80, 70)
circle(350, 60, 90)
circle(270, 50, 50)
circle(290, 70, 70)
circle(285, 90, 60)
circle(250, 50, 60)
circle(224, 40, 70)
circle(175, 40, 80)

//inner cloud
fill(225,232,237);
circle(100, 70, 50)
circle(120,80, 40)
circle(130, 60, 50)
circle(150, 90, 60)
circle(160, 60, 45)
circle(190, 70, 60)
circle(290, 74, 50)


//face
fill(101, 71, 27);
ellipse(155, 220, 30, 50) //eyes
ellipse(245, 220, 30, 50)

ellipse(200, 270, 65, 75) //mouth

  rectMode(CENTER);
 
}