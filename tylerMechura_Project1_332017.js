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

var ocean;

function setup() {
  createCanvas(700, 500);

  // defining commonly used colors
  clrOcean = color(80, 160, 220, 80);
  ocean = new Ocean(clrOcean);
  ocean.initialize();
}

function draw() {
  background(220);

  ocean.display();

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
  // to be filled later:
  // empty bar when mouse is not pressed
  // fill bar when mouse is pressed
}

// OBJECT: Wave
function Wave(anchorX, anchorY, anchorX2, clr) {

  // CONSTRUCTOR
  /////////////////////////////////////
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


  // OBJECT FUNCTIONS
  /////////////////////////////////////
  // creation of the wave
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

function Ocean(clr) { // using function 'waves' to create a neverending ocean

  // CONSTRUCTOR
  /////////////////////////////////////
  this.clr = clr;

  this.waveArray = [];
  // anchor points for the first wave bezier in waveArray
  this.anchorX = 0;
  this.anchorX2 = random(300, 400);


  // OBJECT FUNCTIONS
  /////////////////////////////////////
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
        
        // When a wave moves off screen, delete it and add a new one to the end of the array
        if (this.waveArray[i].x4 < 0) {
          this.waveArray.splice(0, 1);
          this.waveArray[this.waveArray.length] = new Wave( 
            this.waveArray[this.waveArray.length-1].x4+20, 
            oceanY, 
            this.waveArray[this.waveArray.length-1].x4+random(300,400), 
            this.clr);
        }
      }
    }
    // for loop that puts several waves in an array for looping in function oceanMove()
  
  // INITIALIZATION
  // Used in Setup
  this.initialize = function () {
    for (var i = 0; i < 10; i++) {
      this.waveArray[i] = new Wave(this.anchorX, oceanY, this.anchorX2, this.clr);
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
