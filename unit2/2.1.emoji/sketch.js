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

fill(102,69,0); // color of mouth
stroke(102,69,0)
strokeWeight(4);
ellipse(200, 250, 120, 70) //bottom part of mouth (x, y, long, height)


fill("white");
rect(140, 215, 120, 29) // teeth on the smile!

stroke(0,0); // eye 1
fill(102,69,0)
ellipse(150, 170, 40, 12)

//eye 1 part two (the sides of the eye)
triangle(120, 180, 130, 169, 140, 175) 
triangle(170, 169, 160, 175, 180, 180)

// eye 2

ellipse(250, 170, 40, 12)
// eye 2 part two (the sides of the eye)
triangle(220, 180, 230, 169, 240, 175)
triangle(270, 169, 260, 175, 280, 180)

//eyebrow 1
ellipse(140, 140, 20, 7)
//eyebrow 1 part two (the left side of the eyebrow)
triangle(120, 145, 130, 139, 134, 143)
//eyebrow 2
ellipse(260, 140, 20, 7)
//eyebrow 2 part two (the right side of the eyebrow)
triangle(280, 145, 270, 139, 266, 143 )

//teardrop 1 
fill(93, 173, 236)
triangle(120, 180, 99, 190, 130, 200)
ellipse(110, 207, 42, 40)

//teardrop 2
triangle(280, 180, 301, 190, 270, 200)
ellipse(290, 207, 42, 40)



  rectMode(CENTER);
 
}