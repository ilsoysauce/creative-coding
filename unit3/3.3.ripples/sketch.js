let ripplers=[];
let x;
let y;
// let timer=0;



class Rippler {
  constructor (x,y){
   this.x = x,
   this.y = y,
   this.diameter = 0
 }
draw()
{
  this.diameter +=1;
  //adjusting the color of the ripples
  noFill();
  stroke(255, 255, 255, 50);
  strokeWeight(3);
  circle(this.x, this.y, this.diameter);

  // for(let p=0; p<6; p++)
  // {
  //   if(timer%2===0)
  //   {
  //     circle(this.x, this.y, this.diameter);
  //   }
  // } there's more of an explanation as to why this is commented out below

}

  }



function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(93,151,231); //background color to make it resemble water a little more
  // frameRate(60);
  // timer++; 

for (let i = 0; i < ripplers.length; i++){
  
  ripplers[i].draw();

}
}

function  mousePressed()
  { //code based on the bounce code on discord
    
ripplers.push(new Rippler(mouseX, mouseY));
//      for(let p=0; p<6; p++)
//   {
//     if(timer%2===0)
//     {
    
//     let newRippler=new Rippler(mouseX, mouseY);
// ripplers.push(newRippler);
// }
// } there was an attempt at making the ripples produce multiple, but it was not working so i commented it all out
}
  
//keep working on ripples? maybe use map for the disappearing effect?