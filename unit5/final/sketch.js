//navigation and stickman
let stickman;
let shirtnav;
let pantsnav;
let reset;
//clothing
let sleeveless;
let dress;
let shirt;
let skirt;
//clothes visibility
let sleevelessVisible = false;
let shirtVisible = false;
let dressVisible = false;
let skirtVisible = false;
//navigation visibility
let shirtnavi = true;
let pantsnavi = false;



function setup() {
  createCanvas(800, 800);
}

function preload()
{
stickman=loadImage("https://i.imgur.com/B2IDIi4.png");
shirtnav=loadImage("https://i.imgur.com/VpXgsou.png");
reset=loadImage("https://i.imgur.com/aU3H6II.png");
sleeveless=loadImage("https://i.imgur.com/lmy1wSI.png");
shirt=loadImage("https://i.imgur.com/pToj9RO.png");
dress=loadImage("https://i.imgur.com/s8Y3Lhh.png");
pantsnav=loadImage("https://i.imgur.com/yU9am29.png");
skirt=loadImage("https://i.imgur.com/b2zYBKc.png");
}
function draw() {
  //all the default images
  background(220);
  image(stickman,0,0);
  image(shirtnav,0,0);
  image(reset,0,0);
  noFill();

 //makes clothing items visible
  if(sleevelessVisible)
  {
    image(sleeveless,0,0);
  }
if(shirtVisible)
{
  image(shirt,0,0);
}

if(dressVisible)
{
  image(dress,0,0);
}

if(skirtVisible)
{
  image(skirt,0,0);
}
//puts in the side navigation image. do this for all
if(pantsnavi===true)
{
    image(pantsnav,0,0);
}


//all the rectangles to help figure out where the mouse needs to click
 rect(593,90,200,227);
  rect(593,325,200,227);
  rect(593,555, 200, 227);
  rect(0,731, 181,70);
  rect(700,0, 100,29); // bottoms rectangle

}

function mousePressed() {
//if "bottoms" button is pressed
if(mouseX > 700 && mouseX < 800 && mouseY > 0 && mouseY < 29){
  pantsnavi = true;
  shirtnavi = false;

}

//shirt navigation buttons
  if(shirtnavi===true)
  {
 
  if (mouseX > 593 && mouseX < 793 && mouseY > 90 && mouseY < 317) { 
  sleevelessVisible = !sleevelessVisible; // Toggle shirt visibility 
}

if(mouseX >593 && mouseX < 793 && mouseY > 325 && mouseY < 552){
  shirtVisible = !shirtVisible;
}

if(mouseX > 593 && mouseX < 793 && mouseY > 555 && mouseY < 782){
  dressVisible = !dressVisible;
}
}


//pants navigation buttons
if(pantsnavi===true)
{

if(mouseX > 593 && mouseX < 793 && mouseY > 555 && mouseY < 782){
  skirtVisible = !skirtVisible;
}

}





 }