function setup() {


  // create the canvas
  createCanvas(800, 800);
  noLoop();

//i could NOT figure out how to do a gradient so i got help from a video https://www.youtube.com/watch?v=EAY7S1tWbzc
  //there are multiple top/bottom colors because i wanted gradients based on different times of day
  mtopcolor=color(113,199,233);
  mbottomcolor=color(254,221,158);

  ntopcolor=color(67,28,86)
  nbottomcolor=color(252,180,158);

  stopcolor=color(198,67,118);
  sbottomcolor=color(254,171,90);

  rtopcolor=color(27,48,69);
  rbottomcolor=color(129,150,171);



  let timeofday=floor(random(0,4)); //this random value will decide what time of day it will generate

for(let o=0; o<height; o++)
{
  let n= map(o,0,height,0,1);

//puts the time of day gradient into the corresponding variable
  let morningcolor=lerpColor(mtopcolor, mbottomcolor, n);
let nightcolor=lerpColor(ntopcolor,nbottomcolor,n);
let sunsetcolor=lerpColor(stopcolor,sbottomcolor,n);
let stormcolor=lerpColor(rtopcolor,rbottomcolor,n);


//if statements that change the gradient color 
  if(timeofday==0)
{
  stroke(morningcolor);
}

if(timeofday==1)
{
  stroke(nightcolor)
}

if(timeofday==2)
{
  stroke(sunsetcolor)
}

if(timeofday==3)
{
  stroke(stormcolor)
}

  line(0,o,width,o);
}

}


function draw() {

 
let starsornah=floor(random(2));

//a loop that creates a bunch of randomly placed stars! or snow. 

if (starsornah==1)
{
for(let s=0; s < 300; s++)
{
  let starswidth=random(width);
  let starsheight=random(height);
  let starsize=random(1,6);
fill("white");
  ellipse(starswidth,starsheight,starsize, starsize);
}
}

  //code borrowed from the perlin noise example https://editor.p5js.org/zachwhalen/sketches/yWyy9gN17
noStroke();

let mcolor=floor(random(0,3));
if(mcolor==0){
fill(7, 2, 97); 
}

if(mcolor==1){
  fill("black");
}


if(mcolor==2)
{
  fill(252, 255, 217);
}
//I wanted to, instead of just make a line of circles, fill in the mountains. so i used beginshape/vertex
 beginShape();
 vertex(0,height); //bottom left corner of the canvas
for(let w=0; w <= width; w++)
{ 
  let z = noise (w*0.01)*height;
  vertex(w,z) 
}

vertex(width, height) //bottom right corner
endShape();


//decides if there are 0, 1, 2, or 3 rivers
let riveramount=floor(random(0,4));

// goodbye that did not work fill(171,230,255);
stroke(171, 230, 255);
noFill();

if(riveramount>=1)
{
  beginShape();
  let riverx = random(width); //so it'll appear anywhere on the mountains left/right
  let rivery = noise(riverx*0.01)*height; //i did the same thing with the buildings, just with rivers now
  vertex(riverx, rivery);
  for (let q=0; q<height*5; q+=5) { //makes all the points on the river
    riverx+=random(-10, 10); //moves the river left/right
    rivery+=random(1, 5); //makes the river go down
    vertex(riverx, rivery);
  }
  endShape(); 
}


if(riveramount>=2)
{
  beginShape();
  let rivera = random(width); //so it'll appear anywhere on the mountains left/right
  let riverb = noise(rivera*0.01)*height; //i did the same thing with the buildings, just with rivers now
  vertex(rivera, riverb);
  for (let q=0; q<height*5; q+=5) { //makes all the points on the river
    rivera+=random(-10, 10); //moves the river left/right
    riverb+=random(1, 5); //makes the river go down
    vertex(rivera, riverb);
  }
  endShape(); 
}

if(riveramount>=3)
{
  beginShape();
  let riveru = random(width); //so it'll appear anywhere on the mountains left/right
  let riveri = noise(riveru*0.01)*height; //i did the same thing with the buildings, just with rivers now
  vertex(riveru, riveri);
  for (let q=0; q<height*5; q+=5) { //makes all the points on the river
    riveru+=random(-10, 10); //moves the river left/right
    riveri+=random(1, 5); //makes the river go down
    vertex(riveru, riveri);
  }
  endShape(); 
}


let buildingamount=floor(random(0,40));
 //i wanted buildings, so i tried to make their location and size somewhat random. in the end i dont think they looked like buildings but i kept them in anyways. they're just patches now
for (let bu=0; bu<buildingamount; bu++)
{
  let buildwidth=random(width);
  let buildheight=random(height)
  let buildsize=random(50,100);
  let buildsize2=random(50,100)
//i wasn't sure how to make it so they wouldnt hang off the sides of the mountains so they still do that

noStroke();
  fill("gray");

//i wanted the buildings to start only underneath the noise area. i used the code from the above noise and applies it to the buildings, then made it so it only generates if the height is below the top of the mountains (>t)
 let t = noise(buildwidth*0.01)*height;
    if (buildheight>t) {
      rect(buildwidth, buildheight, buildsize, buildsize2);
}


}

}