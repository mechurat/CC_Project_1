var r = 0;
var g = 0;
var b = 0;
var a = 0;

var mainX = 0;
var mainY = 0;

var clr = 0;
var fillBar = 0;

var bBarX = 560;
var bBarY = 40;
var bBarW = 100;
var bBarH = 50;

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220);
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
  fill(clr);
  rect(x, y, w, h);

  //  fill(clr);
  fill('blue');
  var wFill = w;
  for (var i = w; i <= 0; i--) {
    if (mouseIsPressed == true && wFill <= w) {
      rect(x, y, i, h);
      i += 2;
    } else if (mouseIsPressed == false) {
      rect(x, y, i, h);
    }
  }


}

function wave() { // use random within a certain range to create 'waves' for the stick to ride on and the fish to follow

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
