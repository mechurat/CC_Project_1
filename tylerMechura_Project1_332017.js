var r = 0;
var g = 0;
var b = 0;
var a = 0;

var mainX = 0;
var mainY = 0;

var oceanY = 280;
var oceanH = 220;

var clrOcean = 0;
var fillBar = 0;

var bBarX = 560;
var bBarY = 40;
var bBarW = 100;
var bBarH = 30;

// wave points
var wX1;
var wX2;
var wX3;
var wX4;
var wY1;
var wY2;
var wY3;
var wY4;

function setup() {
  createCanvas(700, 500);
  
  // defining commonly used colors
  clrOcean = color(80, 160, 220, 80)
}

function draw() {
  background(220);
  
  // the body of the ocean. Never changes
  ocean(clrOcean);  
  
  breathBar(bBarX, bBarY, bBarW, bBarH, color(220)); // functionality of the bar coming into play
  // uses a white rectangle in the same position as 
}

// breath bar
function breathBar(x, y, w, h, clr) { // the aesthetics of the breath bar and the mouse clicked funcionality
  // outer slider
  fill('black');
  rect(x - 10, y - 10, w + 20, h + 20, 8);

  // inner part of breathbar
  noStroke();
  fill(color(220));
  rect(x, y, w, h);

  //  fill(clr);
  fill('blue');
  var wFill = w;
  
//  function keyPressed(){
//    if( keyCode == SPACEBAR ){
//      
//    }
//    
//    else( keyCode == ESCAPE){
//      return false;
//    }
//    
//    
//  }
  while(keyIsPressed === false) { // for loop to decrease breath meeter until empty, then stop
    if (mouseIsPressed == true && wFill <= w) { // if the mouse is pressed and wFill is less than the full, increase the size of breath rectangle
      i += 2; // increase the size of the rectangle
      rect(x, y, i, h); // redraw rectangle      
    } else if (mouseIsPressed == false) { // if the mouse is not pressed, decrease the size of the rectangle (i), and redraw it
      rect(x, y, i, h);
    }
  }
}

// bezier wave
function wave1(anchorX, anchorY, anchorX2, clr){
  noStroke();
  fill(clr)
  
  var x2 = random(oceanY, oceanY-70);
  var y2 = random(oceanY, oceanY-70);
  
  var x3 = random(oceanY, oceanY-70);
  var y3 = random(oceanY, oceanY-70);

  
  bezier(anchorX, anchorY, x2, y2, x3, y3, anchorX2, anchorY)
  
}

function wave(x, y, w, h, a, clr) { // use random within a certain range to create 'waves' for the stick to ride on and the fish to follow
  // basic wave functions from the built in graphics of p5
  fill(clr);
  noStroke();
  
  // random values for the wave's width and height defined
  var waveW = random(w-30, w+30); 
  var waveH = random(h-200, h+20);
  
  // initialize the wave
  arc(x, oceanY, waveW, waveH, PI, 0, OPEN);
}

function ocean(clr) { // using function 'waves' to create a neverending ocean
  noStroke();
  fill(clr);
  rect( 0, oceanY, width, oceanH );
  
  var anchorX2 = oceanY+random(50,130);
  wave1(0, oceanY, anchorX2, clr );
}

function stick() { // the stickfigure

}

function swim() { // the stickfigure swimming

}

function fish() { // the fish that follows the stickfigure through the ocean


}

function fishSwim() { // the fish swimming;

}
