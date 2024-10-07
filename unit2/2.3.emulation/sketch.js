//I chose to emulate Sans titire, 1984 by Vera Molnar https://www.artsy.net/artwork/vera-molnar-sans-titre-6

function setup() {
  // create the canvas
  createCanvas(600, 800);
  
  // disable animation
  noLoop();
}

function draw() {
  background(205, 207,208);

  //just for fun I added the frame
  fill(199, 204, 205);
  stroke(198,198,196);
  strokeWeight(5);
rect(55, 72, 500, 500);

//black rectangles
fill(53,53,53); 
stroke(0) //to give them a litlt more depth
strokeWeight(1);


translate(100,100); //moving the starting position away from behind the border




for(let x=0; x<14; x++){ //to make the grid
  for(let y=0; y<14; y++) {
push(); //i forgot to put push and pop at first and it was making everything look really wacky

// let xspace=x*(width+5);  later realized this was making space left/right between rectangles, but in the original composition there is no space there
  // let yspace=y*(width+5); five was too much and it made all the rectangles look the same, eventually abandoned this idea because the top rows weren't moving as much as the bottom rows

translate(x*30, y*30); //moves the rectangles to the next spot in the grid


  rect(0,random(5,20,15), 30, 20) //the rectangles. the random value was originally random(10) but i wanted the spaces to be a little more consistent, ended up going between different values to see which ones i liked more
  pop();
}
}


}
