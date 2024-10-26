
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;
let points = 0;
let debug=true;


let squarex=400;
let squarey=400;

let img;
let img2;
function preload(){
 img=loadImage("https://i.imgur.com/TlnlagT.png");
img2=loadImage("https://cdn.pixabay.com/photo/2024/04/05/09/01/ai-generated-8676957_1280.png")
}


function setup() {
  createCanvas(800, 800);


}

function draw() {
  background(220);
if (debug){
   text("width: " + width, 30, 30);
   text("height: " + height, 30, 45);
   text("mouseX: " + mouseX, 30, 60);
   text("mouseY: " + mouseY, 30, 75);
   
}
// points text, push/pop so it doesnt affect the debug text
push();
textSize(50);
textAlign(CENTER);
text("points: " + points, width/2, 45);
pop();

//code from the notes
if (mouseX > x){
   xspeed = speedfactor;
 }else{
   xspeed = -speedfactor;
 }

 if (mouseY > y){
   yspeed = speedfactor;
 }else{
   yspeed = -speedfactor;
 }

//code that resets the circle when it reaches the mouse, and gets rid of a point
if(dist(mouseX, mouseY, x, y) < 4)
{
x=random(width);
y=random(height);
points--;
}


//creates a square that spawns in the center


image(img2,squarex-30,squarey-30,60,60);
// square(squarex, squarey, 50);

if(dist(squarex, squarey, mouseX, mouseY) < 50) //moves the square if the mouse reaches it and rewards a point
{
  squarex=random(width);
  squarey=random(height);
  points++;
}

x = x+xspeed; //iterate x
y = y+yspeed; //iterate y
image(img,x-30,y-30,60,60);

}