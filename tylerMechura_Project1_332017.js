var r=0;
var g=0;
var b=0;
var a=0;

var mainX=0;
var mainY=0;

var clr=0;
var fillBar=0;

var bBarX = 360;
var bBarY = 80;
var bBarW = 100;
var bBarH = 50;

function setup() { 
  createCanvas(500, 500);
} 

function draw() { 
  background(220);
    breathBar(bBarX, bBarY, bBarW, bBarH, color(255)); // functionality of the bar coming into play
                       // uses a white rectangle in the same position as 

  // main breath bar
  breathBarStatic(bBarX, bBarY, bBarW, bBarH, color(0, 0, 255));
  // end of aesthetics
}

// breath bar aesthetics
function breathBarStatic( x, y, w, h, clr){
  fill('black');
  rect(x-10, y-10, w+20, h+20, 8);
  
  noStroke();
  fill(clr);
  rect(x, y, w, h);
  
}
// breath bar
function breathBar (x, y, w, h, clr){ // the aesthetics of the breath bar and the mouse clicked funcionality
  fill('white');
  noStroke();
  x = x+w;
  rect(x, y, w, h);
  if( mouseIsPressed == false && x > bBarX ){
    x-=1;
    rect(x, y, w, h);
  }else if( mouseIsPressed == true && x < bBarX+bBarW){
    x+=1;
    rect(x, y, w, h);    
  }
  
  
  
}