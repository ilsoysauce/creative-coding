let bouncers=[];

let x=200;
let y=200;
let xspeed;
let yspeed;
class Bouncer 
{
constructor()
{

this.x = width/2;
this.y = height/2;
this.xspeed = random(-4,4);
this.yspeed = random(-4,4);
}

update()
{
  if(this.x<25 | this.x >375)
  {
    this.xpeed = -this.xspeed;
  }
if(this.y<25 | this.y >375)
{
  this.yspeed = -this.yspeed;
}

this.x += this.xspeed;
this.y += this.yspeed;

circle(this.x,this.y, 50);

}

}


function setup() {
  createCanvas(400, 400);

for (let b=0; b<5; b++)
{
  bouncers.push(new Bouncer());
}

}






function draw() {
  background(220);

for(let r=0; r<bouncers.length; r++)
{
  bouncers[r].update();
}






}