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
var bBarH = 50;

function setup() {
  createCanvas(700, 500);
  
  // defining commonly used colors
  clrOcean = color(80, 160, 220, 80)
}

function draw() {
  background(220);
  
  // the body of the ocean. Never changes
  noStroke();
  fill(clrOcean);
  rect( 0, oceanY, width, oceanH );
  
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
  for (var i = w; i <= 0; i--) { // for loop to decrease breath meeter until empty, then stop
    if (mouseIsPressed == true && wFill <= w) { // if the mouse is pressed and wFill is less than the full, increase the size of breath rectangle
      i += 2; // increase the size of the rectangle
      rect(x, y, i, h); // redraw rectangle      
    } else if (mouseIsPressed == false) { // if the mouse is not pressed, decrease the size of the rectangle (i), and redraw it
      rect(x, y, i, h);
    }
  }
}

function wave(x, y, w, h, a, clr) { // use random within a certain range to create 'waves' for the stick to ride on and the fish to follow
  fill(clr);
  noStroke();

  var waveW = random(w-30, w+30);
  var waveH = random(w-50, w+100);
  
  // initialize the wave
  arc(x, oceanY, waveW, waveH, PI, 0, OPEN);
}

function ocean() { // using function 'waves' to create a neverending ocean
  
}

function stick() { // the stickfigure

}

function swim() { // the stickfigure swimming

}

function fish() { // the fish that follows the stickfigure through the ocean


}

function fishSwim() { // the fish swimming;

}
