//Artist statement: Usually when I'm thinking about time, I'm thinking 'what time do I do this'. Scheduling stuff is super important to me, so I based this project around my schedule on most Tuesdays. I made it so the text says what I typically do at that hour is, with some differences in how quickly the text displays. For example, I think time moves slower when I'm in class compared to when I'm playing something, so it takes 5 seconds for text to appear during the class hours. On top of that, I used map to make the text grow every second, because I feel like when you're paying attention to the time, you can feel every second that goes by.


let words=[];
//code for the milli timer from https://editor.p5js.org/zachwhalen/sketches/pGtx_xoLJ
let currentSecond = 0;
let milliFreeze = 0;
let x=20;
let y=20;
let canwidth=760; //used later so the text doesnt go past this point
let lineheight = 30; //space between lines of text



function setup() {
  createCanvas(800, 800);
 
}

function draw() {
  
  background(56,4,100); //purple background

// if (currentSecond != second()){
    
//     // if there's a new second, reset the variable
//     currentSecond = second();  
    
//     // also, capture what the current millis() is
//     milliFreeze = millis();
//   }
//     mm = floor(millis() - milliFreeze);


// if(mm===0)
// {

  //if statements that check what hour it is, and then proceeds to freeze the milliseconds to eventually print the corresponding text. couldn't figure out a simpler way to do it
if(hour()===7)
{
if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %1 ==0) //makes it so it updates every second
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);

  if(mm==0)
  {
  words.push('wake up');
}
}

if(hour()===8 || hour()===9)
{

if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %5 ==0) //makes it so it only updates every 5 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);

  if(mm==0)
  {
words.push('class');
}
}

if(hour()===10)
{
  
    if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %2 ==0) //makes it so it updates every 2 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
if (mm==0)
{
  words.push('schoolwork');
}
}

if(hour()===11 || hour()===12 || hour()===13)
{
  
    if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %5==0) //makes it so it only updates every 5 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
if(mm==0)
{
  words.push('class');
}
}


if(hour()===14)
{
  if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %1 ==0) 
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
if (mm==0)
{
  words.push('eat');
}
}

if(hour()===15 || hour()===16)
{

if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %5 ==0) //makes it so it only updates every 5 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);

  if(mm==0){
  words.push('class');
}
}

if(hour()===17)
{
  if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %2 ==0) //makes it so it only updates every 5 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %1 ==0) //makes it so it only updates every 5 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
  if(mm==0)
  {
  words.push('eat and shower')
}
}

if(hour()===18 || hour()===19 || hour()===20)
{
  if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %2 ==0) //makes it so it only updates every 5 seconds instead of one
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
  if(mm==0)
  {
  words.push('schoolwork');
}
}

if (hour()===21 || hour()===22 || hour()===23)
{

  if(currentSecond != second())
{
  currentSecond=second();

  if (currentSecond %1 ==0) 
  {
    milliFreeze=millis();
  }
}
mm = floor(millis()-milliFreeze);
if(mm == 0)
{
  words.push('play');
}
}

if (hour()===0 || hour()===1 || hour()===2 || hour()===3 || hour()===4 || hour()===5 || hour()===6)  //this one doesn't check the seconds and just rapid fire prints sleep because sleep goes by real fast
{
  words.push('sleep');
}

// }

//makes the lines where the text goes so that it can go on new lines when the text reaches the edge
x=20; //starting positions
y=40;
let rollover='';
for (let w = 0; w < words.length; w++)
 { 
let testline = rollover+words[w]+' '; 
 if (textWidth(testline) > canwidth) 
 { 
  text(rollover, x, y);
  rollover = words[w] + ' '; 
  y += lineheight; //resets the page once it reaches the bottom
  if(y+lineheight > height)
  {
    background(56, 4, 100);
    words=[];
    y=20;
  }  
 } 

 else {
  rollover=testline; 
}
} 


//increases the text size at every second then restarts once a minute has passed
let textsizem = map(second(), 0, 59, 12, 48);
textSize(textsizem);
fill('white');
  text(rollover, x, y); 
}