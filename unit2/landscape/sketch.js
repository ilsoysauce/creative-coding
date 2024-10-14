// function preload(){
//   // load the image from a file
// 	img = loadImage();
// }

function setup() {

  // create the canvas
  createCanvas(800, 800);
  
}

function draw() {
  background(220);


  // // render the image
  // image(img,10,10,100,100);

  //code borrowed from the perlin noise example https://editor.p5js.org/zachwhalen/sketches/yWyy9gN17
  for (let x = 0; x <= width; x+=1){

    
    let y = noise(x * 0.01) * height;
   
    noStroke();
    fill("white")
    circle(x,y,8);
    
  }
 
fill("orange") //I wanted to fill the area underneath the circles, so I started a shape
 beginShape();
 vertex(0,height); //bottom left corner of the canvas
for(let w=0; w <= width; w +=1)
{ //noise seems to stay consistent every refresh so I did the same loop as above
  let z = noise (w*0.01)*height;
  vertex(w,z) //matches up w/ circles from above
}

vertex(width, height) //bottom right corner
endShape();
}