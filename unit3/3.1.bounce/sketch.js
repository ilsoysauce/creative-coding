function setup() {
  createCanvas(400, 400);



}

let x = 0;
let y = 0;
let xspeed = 2;
let yspeed = 3; //making the speeds different makes it so it bounces outside of the two corners

let x2 = 400;
let y2 = 0;
let x2speed = 2;
let y2speed = 3;

let x3 = 400;
let y3 = 400;
let x3speed = 2;
let y3speed = 3;

let x4 = 0;
let y4=400;
let x4speed=2;
let y4speed=3;

function draw() {
  background(220);

//check for collision w/ left and right edge
  if(x<0 | x>width)
  {
    xspeed=xspeed*-1; //reverse the x direction
    fill(random(255), random(255), random(255));
  }

if(y<0 | y>height)
{
  yspeed=yspeed*-1;
  fill(random(255), random(255), random(255));
}


if(x2<0 | x2>width)
{
  x2speed=x2speed*-1;
  fill(random(255), random(255), random(255));
}

if(y2<0 | y2>height)
{
  y2speed=y2speed*-1;
  fill(random(255), random(255), random(255));
}

if(x3<0 | x3>width)
{
  x3speed=x3speed*-1;
  fill(random(255), random(255), random(255));
}

if(y3<0 | y3>height)
{
  y3speed=y3speed*-1;
  fill(random(255), random(255), random(255));
}

if(x4<0 | x4>width)
{
  x4speed=x4speed*-1;
  fill(random(255), random(255), random(255));
}

if(y4<0 | y4>height)
{
  y4speed=y4speed*-1;
  fill(random(255), random(255), random(255));
}

x = x+xspeed; //iterate x
y = y+yspeed; //iterate y

x2 = x2+x2speed;
y2 = y2+y2speed;

x3 = x3+x3speed;
y3 = y3+y3speed;

x4 = x4+x4speed;
y4 = y4+y4speed;


//draw a circle
circle(x,y,50);
circle(x2, y2, 50);
circle(x3, y3, 50);
circle(x4, y4, 50);





}