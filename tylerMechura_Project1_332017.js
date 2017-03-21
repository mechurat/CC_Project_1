/*
Tyler Mechura
3/7/2017
Project 1
Creative Coding with Professor Katherine Bennett
*/

//////////////////////
// GLOBAL VARIABLES //
//////////////////////

// height and y position of ocean rect
var oceanY = 280;
var oceanH = 220;

// dolphin initial position
var dolphinY = oceanY + 50;
var dolphinX = 50;

// colors
var clrOcean = 0;
var clrBreathOut = 0;
var alphaBreath = 0;
var clrDolphin = 0;

// Breathing Bar
var bBarX = 1110;
var bBarY = 30;
var bBarW = 150;
var bBarH = 10;

// Fill of breathing bar
var wFill = bBarW;

// object initialization
var ocean;
var dolphin;

///////////
// SETUP //
///////////
function setup() {
  createCanvas(1300, 500);

  // defining commonly used colors
  clrOcean = color(80, 160, 220, 80);
  clrDolphin = color(52, 239, 239);

  // initializing objects
  ocean = new Ocean(clrOcean);
  ocean.initialize();

  dolphin = new Dolphin(dolphinX, dolphinY, clrDolphin);
}

////////////////
// DRAW  LOOP //
////////////////
function draw() {

  background(220);

  ocean.display();

  breathBar(bBarX, bBarY, bBarW, bBarH, color(220)); // functionality of the air gauge

  dolphin.display();
  dolphin.swim();

  // When breath runs out: DO THIS
  // For some reason I couldn't get this working in breathBar
  // it works here so ¯\_(ツ)_/¯
  clrBreathOut = color(250, 60, 60, alphaBreath);
  if (wFill <= 0 && alphaBreath <= 255) { // when breath is empty and not at max value of 255: DO THIS
    alphaBreath += 0.4; // increase alpha, making rect more solid 
    console.log('alpha increased ' + alphaBreath);
  } else if (wFill > 0 && alphaBreath > 0) { // when breath is at least a little full and is above a minimum value of 0: DO THIS
    alphaBreath = alphaBreath - 1.5; // decrease alpha, making rect more see-through
    console.log('alpha decreased' + alphaBreath);
  }
  noStroke();
  fill(clrBreathOut); // alphaBreath is the [alpha] parameter in clrBreathOut
  rect(0, 0, width, height); // rect that covers everything using the clrBreathOut fill
}

///////////////////////////////////////////
// OBJECTS AND FUNCTIONS FOR USE IN DRAW //
///////////////////////////////////////////

// Breath Bar
function breathBar(x, y, w, h, clr) { // the aesthetics of the breath bar and the mouse clicked functionality
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
    wFill += 2;
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

function Dolphin(x_, y_, clr) { // the fish that follows the stickfigure through the ocean
  /////////////////
  // CONSTRUCTOR //
  /////////////////
  this.color = clr;
  this.x = x_;
  this.y = y_;

  this.width = 80;
  this.height = 40;

  //////////////////////
  // OBJECT FUNCTIONS //
  //////////////////////  

  // swim in the direction of the arrow pressed
  this.swim = function () {
    if (keyIsPressed == true && keyCode == UP_ARROW) { // up
      if (this.y > oceanY) {
        this.y -= 2;
      } else if (keyIsPressed == false) {
        this.y += 0;
      }
    } else if (keyIsPressed == true && keyCode == DOWN_ARROW) { // down
      if (this.y < height) {
        this.y += 2;
      } else if (keyIsPressed == false) {
        this.y += 0;
      }
    } else if (keyIsPressed == true && keyCode == LEFT_ARROW) { // left
      if (this.x > 0) {
        this.x -= 2;
      } else if (keyIsPressed == false) {
        this.x += 0;
      }
    } else if (keyIsPressed == true && keyCode == RIGHT_ARROW) { // right
      if (this.x < width) {
        this.x += 2;
      } else if (keyIsPressed == false) {
        this.x += 0;
      }
    }
  }

  // Not Complete
  this.jump = function () { // have the dolphin 'jump' out of the water
    // need to use sin function to make a "jump" animation
  }

  // display of the dolphin's position
  this.display = function () {
    stroke(2);
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
  }
}
