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

var bBarX = 510;
var bBarY = 30;
var bBarW = 150;
var bBarH = 10;

var wFill = bBarW;

var ocean;

function setup() {
  createCanvas(700, 500);

  // defining commonly used colors
  clrOcean = color(80, 160, 220, 80);

  // initializing objects
  ocean = new Ocean(clrOcean);
  ocean.initialize();
}

function draw() {
  background(220);

  ocean.display();

  breathBar(bBarX, bBarY, bBarW, bBarH, color(220)); // functionality of the air gauge
  // uses a white rectangle in the same position as 
}



///////////////////////////////////////////
// OBJECTS AND FUNCTIONS FOR USE IN DRAW //
///////////////////////////////////////////

// Breath Bar
function breathBar(x, y, w, h, clr) { // the aesthetics of the breath bar and the mouse clicked funcionality
  // outer slider
  fill('black');
  rect(x - 5, y - 5, w + 10, h + 10, 8);

  // inner part of breathbar
  noStroke();
  fill(color(220));
  rect(x, y, w, h);
  
  // The blue "breath" level
  // color of bar
  fill('blue');
  // the actual bar (starts full)
  rect(x, y, wFill, h);
  // fills if mouse is pressed up until limit
  if (wFill <= w && mouseIsPressed == true) {
    wFill+=2;
  } 
  // empties until fill value is less than or equal to zero
  else if (wFill >= 0 && mouseIsPressed == false) {
    wFill = wFill - 0.2;
  }
}

// OBJECT: Wave
function Wave(anchorX, anchorY, anchorX2, clr) {

  /////////////////
  // CONSTRUCTOR //
  /////////////////

  // anchor 1
  this.x1 = anchorX;
  this.y1 = anchorY;
  // first control point
  this.x2 = random(anchorX, anchorX2); // make sure the point is always between the two anchor points
  this.y2 = random(oceanY, oceanY - 70); // make sure the point is always above the ocean surface
  // second control point
  this.x3 = random(anchorX, anchorX2);
  this.y3 = random(oceanY, oceanY - 70);
  // anchor 2
  this.x4 = anchorX2;
  this.y4 = anchorY;


  //////////////////////
  // OBJECT FUNCTIONS //
  //////////////////////

  // wave display on screen
  this.display = function () {
    noStroke();
    fill(clr);
    bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
  }

  // Move
  // Called in order to move the wave one pixel to the left
  this.move = function () {
    this.x1 -= 1;
    this.x2 -= 1;
    this.x3 -= 1;
    this.x4 -= 1;
  }
}

function Ocean(clr) { // using OBJECT 'Wave' to create a neverending ocean when displayed

  /////////////////
  // CONSTRUCTOR //
  /////////////////
  // color of ocean
  this.clr = clr;

  this.waveArray = [];
  // anchor points for the first wave bezier in waveArray
  this.anchorX = 0;
  this.anchorX2 = random(300, 400);


  //////////////////////
  // OBJECT FUNCTIONS //
  //////////////////////
  // The Display Loop
  this.display = function () {
      // main rectangle for body of ocean
      noStroke()
      fill(this.clr);
      rect(0, oceanY, width, oceanH);

      for (var i = 0; i < this.waveArray.length; i++) {

        // Wave functions called for each one
        this.waveArray[i].display();
        this.waveArray[i].move();

        // when a wave moves off screen on the left, do this statement
        if (this.waveArray[i].x4 < 0) {
          // delete first object in array
          this.waveArray.splice(0, 1);
          // create new wave as a new entry at the end of the array
          this.waveArray[this.waveArray.length] = new Wave(
            this.waveArray[this.waveArray.length - 1].x4 + 20,
            oceanY,
            this.waveArray[this.waveArray.length - 1].x4 + random(300, 400),
            this.clr);
          // test the length for memory leak
          console.log(this.waveArray.length);
        }
      }
    }
    // for loop that puts several waves in an array for looping in function oceanMove()

  // INITIALIZATION
  // Used in Setup
  this.initialize = function () {
    // creates the initial array of TEN waves to guarantee the waves go off-screen
    for (var i = 0; i < 10; i++) {
      // creates a new wave
      this.waveArray[i] = new Wave(this.anchorX, oceanY, this.anchorX2, this.clr);
      // changes the anchor value so that the wave is placed AFTER the one before it
      this.anchorX = this.anchorX2 + 20;
      this.anchorX2 += random(300, 400);
    }
  }
}

function stick() { // the stickfigure

}

function swim() { // the stickfigure swimming

}

function fish() { // the fish that follows the stickfigure through the ocean


}

function fishSwim() { // the fish swimming;

}
