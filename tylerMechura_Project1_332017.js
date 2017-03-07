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

function setup() {
  createCanvas(700, 500);

  // defining commonly used colors
  clrOcean = color(80, 160, 220, 80);
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
  while (keyIsPressed === false) { // for loop to decrease breath meeter until empty, then stop
    if (mouseIsPressed == true && wFill <= w) { // if the mouse is pressed and wFill is less than the full, increase the size of breath rectangle
      i += 2; // increase the size of the rectangle
      rect(x, y, i, h); // redraw rectangle      
    } else if (mouseIsPressed == false) { // if the mouse is not pressed, decrease the size of the rectangle (i), and redraw it
      rect(x, y, i, h);
    }
  }
}

// bezier wave
function wave(anchorX, anchorY, anchorX2, clr) {
  noStroke();
  fill(clr)

  // first control point
  var x2 = random(anchorX, anchorX2); // make sure the point is always between the two anchor points
  var y2 = random(oceanY, oceanY - 70); // make sure the point is always above the ocean surface
  // second control point
  var x3 = random(anchorX, anchorX2);
  var y3 = random(oceanY, oceanY - 70);

  // creation of the wave
  bezier(anchorX, anchorY, x2, y2, x3, y3, anchorX2, anchorY)

}

function ocean(clr) { // using function 'waves' to create a neverending ocean
  noStroke();
  fill(clr);
  rect(0, oceanY, width, oceanH);

  // the waves of the ocean stored in an array
  var waveArray = [];

  // anchor points for the first wave bezier in waveArray
  var anchorX = 0;
  var anchorX2 = random(300, 400);


  for (var i = 0; i < 10; i++) {
    waveArray[i] = new wave(anchorX, oceanY, anchorX2, clr);
    anchorX = anchorX2 + 20;
    anchorX2 += random(300, 400);
  }

}

function oceanMove(ocean){}

function stick() { // the stickfigure

}

function swim() { // the stickfigure swimming

}

function fish() { // the fish that follows the stickfigure through the ocean


}

function fishSwim() { // the fish swimming;

}
