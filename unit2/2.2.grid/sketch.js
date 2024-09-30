function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

function draw() {
  background(220);

translate(100,100);
 for (let x = 0; x < 8; x++){
    for (let y = 0; y < 8; y++)
    {
      push();
      stroke(random(255), random(255), random(255)); //after lots of experimenting, I discovered you can put random inside of other things. so random color border!
      strokeWeight(random(20)); //random stroke weight between 0-20
      fill(random(255), random(255), random(255)); //random fill color
      translate(x*100, y*100);

      let w = floor(random(1,3)); //discovered random wouldn't work with objects, so created a variable to be assigned a random number 1-3 (floor is so it wont generate decimals https://p5js.org/reference/p5/floor/)
      
      if (w===1) // if the randomly generated number is 1, a triangle is drawn
      {
        triangle(0,100,50,0,100,100);
      }

      if(w===2) { //if the randomly generated number is 2, a rectangle is drawn
        rect(0,0,100,100); 
      }
      
      if(w===3) //if the randomly generated number is 3, an ellipse is drawn
      {
       
        ellipse(50,50,100,100);
      }
      
      pop();
    }


 }


}