function setup() {
  createCanvas(400, 400);



}

let bouncerx=[0, 200, 300, 0];
let bouncery=[0,0,400,400];
let bouncerxspeed=[];
let bounceryspeed=[];




// let x = 0;
// let y = 0;
// let xspeed = 2;
// let yspeed = 3; //making the speeds different makes it so it bounces outside of the two corners

// //i added a ball that starts in every corner
// let x2 = 400;
// let y2 = 0;
// let x2speed = 2;
// let y2speed = 3;

// let x3 = 400;
// let y3 = 400;
// let x3speed = 2;
// let y3speed = 3;

// let x4 = 0;
// let y4=400;
// let x4speed=2;
// let y4speed=3;

function draw() {
  background(220);

//decided to simplify the code by making an array and using loops instead of copying and pasting everything over and over again
for(let i=0; i<5; i++)
{
  bouncerxspeed[i] = random(-4,4);
  bounceryspeed[i] = random(-4,4);
}


for(let test=0; test<bouncerx.length; test+=1)
{
if(bouncerx[test]<0 | bouncerx[test]>width)
{
  bouncerxspeed[test]=bouncerxspeed[test]*-1;
}
}

for(let test2=0; test2<bouncerx.length; test2+=1)
{
  if(bouncery[test2]<0 | bouncery[test2]>height)
  {
    bounceryspeed[test2]=bounceryspeed[test2]*-1;
  }
}


for(let speeds=0; speeds<bouncerx.length; speeds+=1)
{
  bouncerx[speeds]=bouncerx[speeds]+bouncerxspeed[speeds];
  bouncery[speeds]=bouncery[speeds]+bounceryspeed[speeds];
}

for(let test3=0; test3<bouncerx.length; test3+=1)
{
circle(bouncerx[test3], bouncery[test3], 50);
}



//the other way i was doing it wasn't working so i tried with loops again
for (let test8=0; test8<bouncerx.length; test8+=1) 
  {
 for (let test9=test8+1; test9< bouncerx.length; test9+=1) //should make it so it goes through all the ball numbers? at least it looks like it worked 
  { 
      if (dist(bouncerx[test8], bouncery[test8], bouncerx[test9], bouncery[test9]) < 50) 
  {
        bouncerxspeed[test8]=bouncerxspeed[test8]* -1;
        bounceryspeed[test8]=bounceryspeed[test8]*-1;
        bouncerxspeed[test9]=bouncerxspeed[test9]*-1;
        bounceryspeed[test9]=bounceryspeed[test9]*-1;

        fill(random(255), random(255), random(255)); //changes color everytime it hits another circle. but it makes them ALL change 
  }
  }
  }





//this code was working until i did test7, so i commented the whole thing out and tried with a different format
// for(let test4=0; test4<bouncerx.length; test4+=1)
// {
//   if(dist(bouncerx[1], bouncery[1], bouncerx[test4], bouncery[test4]) <50)
//   {
//     bouncerxspeed[1]=bouncerxspeed[1]*-1;
//     bounceryspeed[1]=bounceryspeed[1]*-1;
//     bouncerxspeed[test4]=bouncerxspeed[test4]*-1;
//     bounceryspeed[test4]=bounceryspeed[test4]*-1;

//   }
// }


// for(let test5=0; test5<bouncerx.length; test5+=1)
// {
//   if(dist(bouncerx[0], bouncery[0], bouncerx[test5], bouncery[test5]) <50 && test5 != 0)
//   {
//     bouncerxspeed[0]=bouncerxspeed[0]*-1;
//     bounceryspeed[0]=bounceryspeed[0]*-1;
//     bouncerxspeed[test5]=bouncerxspeed[test5]*-1;
//     bounceryspeed[test5]=bounceryspeed[test5]*-1;

//   }
// }

// for(let test6=0; test6<bouncerx.length; test6+=1)
// {
//   if(dist(bouncerx[2], bouncery[2], bouncerx[test6], bouncery[test6]) <50 && test6 != 2)
//   {
//     bouncerxspeed[2]=bouncerxspeed[2]*-1;
//     bounceryspeed[2]=bounceryspeed[2]*-1;
//     bouncerxspeed[test6]=bouncerxspeed[test6]*-1;
//     bounceryspeed[test6]=bounceryspeed[test6]*-1;

//   }
// }

// for(let test7=0; test7<bouncerx.length; test7+=1)
// {
//   if(dist(bouncerx[3], bouncery[3], bouncerx[test7], bouncery[test7]) <50 && test7 != 3)
//   {
//     bouncerxspeed[3]=bouncerxspeed[3]*-1;
//     bounceryspeed[3]=bounceryspeed[3]*-1;
//     bouncerxspeed[test7]=bouncerxspeed[test7]*-1;
//     bounceryspeed[test7]=bounceryspeed[test7]*-1;

//   }
// }



// if(dist(x,y,x2,y2) <50)
// {
//   xspeed=xspeed*-1;
//   yspeed=yspeed*-1;
//   x2speed=x2speed*-1;
//   y2speed=y2speed*-1;
// }



// //check for collision w/ left and right edge
//   if(x<0 | x>width)
//   {
//     xspeed=xspeed*-1; //reverse the x direction
//     fill(random(255), random(255), random(255));
//   }

// if(y<0 | y>height)
// {
//   yspeed=yspeed*-1;
//   fill(random(255), random(255), random(255));
// }


// // same code but for balls 2, 3, and 4
// if(x2<0 | x2>width)
// {
//   x2speed=x2speed*-1;
//   fill(random(255), random(255), random(255));
// }

// if(y2<0 | y2>height)
// {
//   y2speed=y2speed*-1;
//   fill(random(255), random(255), random(255));
// }

// if(x3<0 | x3>width)
// {
//   x3speed=x3speed*-1;
//   fill(random(255), random(255), random(255));
// }

// if(y3<0 | y3>height)
// {
//   y3speed=y3speed*-1;
//   fill(random(255), random(255), random(255));
// }

// if(x4<0 | x4>width)
// {
//   x4speed=x4speed*-1;
//   fill(random(255), random(255), random(255));
// }

// if(y4<0 | y4>height)
// {
//   y4speed=y4speed*-1;
//   fill(random(255), random(255), random(255));
// }

// if(dist(x,y,x2,y2) <50)
// {
//   xspeed=xspeed*-1;
//   yspeed=yspeed*-1;
//   x2speed=x2speed*-1;
//   y2speed=y2speed*-1;
// }

// if(dist(x2,y2,x3,y3) <50)
// {
//   x2speed=x2speed*-1;
//   y2speed=y2speed*-1;
//   x3speed=x3speed*-1;
//   y3speed=y3speed*-1;
// }

// if(dist(x,y,x3,y3) <50)
// {
//   xspeed=xspeed*-1;
//   yspeed=yspeed*-1;
//   x3speed=x3speed*-1;
//   y3speed=y3speed*-1;
// }

// if(dist(x3,y3,x4,y4) <50)
// {
//   x3speed=x3speed*-1;
//   y3speed=y3speed*-1;
//   x4speed=x4speed*-1;
//   y4speed=y4speed*-1;
// }

// x = x+xspeed; //iterate x
// y = y+yspeed; //iterate y


// //same code but with balls 2, 3, and 4
// x2 = x2+x2speed;
// y2 = y2+y2speed;

// x3 = x3+x3speed;
// y3 = y3+y3speed;

// x4 = x4+x4speed;
// y4 = y4+y4speed;




// //draw a circle
// circle(x,y,50);

// //same code but with balls 2, 3, and 4
// circle(x2, y2, 50);
// circle(x3, y3, 50);
// circle(x4, y4, 50);





}