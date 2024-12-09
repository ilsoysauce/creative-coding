//navigation and stickman
let stickman,reset,shirtnav,pantsnav,hairnav,bangsnav,facenav;

//clothing
let sleeveless,dress,shirt,skirt,shorts,pants,pigtails,curls,straightbangs,curlbangs,angry,happy,sad;

//clothes visibility
let sleevelessVisible = false;
let shirtVisible = false;
let dressVisible = false;
let skirtVisible = false;
let shortsVisible = false;
let pantsVisible = false;
let pigtailsVisible = false;
let curlsVisible = false;
let straightbangsVisible = false;
let curlbangsVisible = false;
let angryVisible = false;
let happyVisible = false;
let sadVisible = false;
//navigation visibility
let navigation="shirts";



function setup() {
  createCanvas(800, 800);
}

function preload()
{
stickman=loadImage("https://i.imgur.com/B2IDIi4.png");
shirtnav=loadImage("https://i.imgur.com/VpXgsou.png");
pantsnav=loadImage("https://i.imgur.com/yU9am29.png");
hairnav=loadImage("https://i.imgur.com/thqowEu.png");
bangsnav=loadImage("https://i.imgur.com/J3ITmNk.png");
facenav=loadImage("https://i.imgur.com/Ie41BMO.png");
reset=loadImage("https://i.imgur.com/aU3H6II.png");

sleeveless=loadImage("https://i.imgur.com/lmy1wSI.png");
shirt=loadImage("https://i.imgur.com/pToj9RO.png");
dress=loadImage("https://i.imgur.com/s8Y3Lhh.png");
skirt=loadImage("https://i.imgur.com/b2zYBKc.png");
pants=loadImage("https://i.imgur.com/3mKtrqB.png");
shorts=loadImage("https://i.imgur.com/tfJr7gn.png");
pigtails=loadImage("https://i.imgur.com/Rbkf5JS.png");
curls=loadImage("https://i.imgur.com/6Y4NUpO.png");
straightbangs=loadImage("https://i.imgur.com/4KT0c86.png");
curlbangs=loadImage("https://i.imgur.com/trPSwnv.png");
angry=loadImage("https://i.imgur.com/7K0EA5M.png");
happy=loadImage("https://i.imgur.com/PwXbjOr.png");
sad=loadImage("https://i.imgur.com/JFimtT4.png");
}

function draw() {
  //all the default images
  background(220);
  image(stickman,0,0);
  if (navigation==="shirts")
  {
  image(shirtnav,0,0);
}

else if (navigation==="pants")
{
  image(pantsnav,0,0);
}

else if (navigation==="hair")
{
  image(hairnav,0,0);
}
else if (navigation==="bangs")
{
  image(bangsnav,0,0);
}

else if (navigation==="faces")
{
  image(facenav,0,0);
}

  image(reset,0,0);
 

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

if(shortsVisible)
{
  image(shorts,0,0);
}

if(pantsVisible)
{
  image(pants,0,0);
}
if(pigtailsVisible)
{
  image(pigtails,0,0);
}

if(curlsVisible)
{
  image(curls,0,0);
}
if(straightbangsVisible)
{
  image(straightbangs,0,0);
}
if(curlbangsVisible)
{
  image(curlbangs,0,0);
}

if(angryVisible)
{
  image(angry,0,0);
}

if(happyVisible)
{
  image(happy,0,0);
}

if(sadVisible)
{
  image(sad,0,0);
}


//all the rectangles to help figure out where the mouse needs to click debug
 // noFill();
 // rect(593,90,200,150);
 // rect(593,275,200,150);
 // //  rect(593,555, 200, 227);
 //  rect(0,731, 181,70); //reset button
 // //  rect(700,0, 100,29); // bottoms rectangle
 // //  rect(590,0,56,32); //tops rectangle
 // //  rect(590,37,47,30); //hair rectangle
 // //  rect(657,37,52,30); //face rectangle
 // //  rect(727,37,74,30); //bangs rectangle

 // rect(593,510,200,150);
}

function mousePressed() {

  //if "reset" button is pressed
  if(mouseX > 0 && mouseX < 181 && mouseY > 731 && mouseY < 801)
  {
 sleevelessVisible = false;
 shirtVisible = false;
 dressVisible = false;
 skirtVisible = false;
 shortsVisible = false;
 pantsVisible = false;
 pigtailsVisible = false;
 curlsVisible = false;
 straightbangsVisible = false;
 curlbangsVisible = false;
 angryVisible = false;
 happyVisible = false;
 sadVisible = false;
  }
//if "bottoms" button is pressed
if(mouseX > 700 && mouseX < 800 && mouseY > 0 && mouseY < 29){
  navigation="pants";

}

//if "tops" button is pressed
if(mouseX > 590 && mouseX < 646 && mouseY > 0 && mouseY < 56){
  navigation="shirts";
}

//if "hair" button is pressed
if(mouseX > 590 && mouseX <637 && mouseY > 37 && mouseY < 67 )
{
  navigation="hair";
}

//if "bangs" button is pressed
if(mouseX > 727 && mouseX <801 && mouseY > 37 && mouseY < 67 )
{
  navigation="bangs";
}

//if "face" button is pressed
if(mouseX > 657 && mouseX <709 && mouseY > 37 && mouseY < 67 )
{
  navigation="faces";
}

//shirt navigation buttons
  if(navigation==="shirts")
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
if(navigation==="pants")
{

if(mouseX > 593 && mouseX < 793 && mouseY > 555 && mouseY < 782){
  skirtVisible = !skirtVisible;
}

if (mouseX > 593 && mouseX < 793 && mouseY > 90 && mouseY < 317) { 
  pantsVisible = !pantsVisible; 
}

if(mouseX >593 && mouseX < 793 && mouseY > 325 && mouseY < 552){
  shortsVisible = !shortsVisible;
}
}
if (navigation==="hair")
{
  if (mouseX > 593 && mouseX < 793 && mouseY > 90 && mouseY < 317)
  {
    pigtailsVisible = !pigtailsVisible;
  }

  if(mouseX > 593 && mouseX < 793 && mouseY >450 && mouseY < 677)
  {
    curlsVisible = !curlsVisible;
  }
}


if (navigation==="bangs")
{
  if (mouseX > 593 && mouseX < 793 && mouseY > 90 && mouseY < 317)
  {
    curlbangsVisible = !curlbangsVisible;
  }

  if(mouseX > 593 && mouseX < 793 && mouseY >410 && mouseY < 637)
  {
    straightbangsVisible = !straightbangsVisible;
  }
}


if (navigation==="faces")
{
  if (mouseX > 593 && mouseX < 793 && mouseY > 90 && mouseY < 240)
  {
    happyVisible = !happyVisible;
  }

  if(mouseX > 593 && mouseX < 793 && mouseY >275 && mouseY < 425)
  {
    angryVisible = !angryVisible;
  }

   if(mouseX > 593 && mouseX < 793 && mouseY >510 && mouseY < 660)
  {
    sadVisible = !sadVisible;
  }
}




 }