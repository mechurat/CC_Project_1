// common colors
color white = color( 255 );
color black = color( 0 );

// color variables
int r = 0; // red variable
int g = 0; // green variable
int b = 0; // blue variable

// Pattern switcher variable
int option = 0;

void setup() {
  size( 800, 600 ); // create a window 800x600 pixels
}

void draw() {
  if ( option == 0 ) { // first pattern, alternating red/black lines from corner
    background(black);
    for ( int x = 25; x <= width-25; x+=25 ) { // first for loop
      for ( int y = 25; y <=height-25; y+=25 ) { // second for loop
        if ( y > height/4 && x > width/4 ) { // in the bottom left corner
          // of the screen, taking up 2/3rds
          stroke( r, 0, 0 ); // change the color the the line based on the current r value
          strokeWeight(15); // because of repeat use, needs to be in if loop
          point(x, y);
          strokeWeight(3);
          line(x, y, 0, 0); // put a line from the two coordinates to the origin
        }
        r+=50; // add 50 to the r value
        if ( r > 255 ) { // reset the r value if it becomes greater than it's strongest value
          r = 0;
        }
      }
    }
  }

  if ( option == 1 ) {
    background( white );
    stroke(black);
    rectMode(CORNER);
    for ( int x = 25; x <= width-50; x+= 25 ) { // draw a line from the top to the bottom right corner
      strokeWeight(1);
      line( x, 0, 800, 600 );
    }
    for ( int x = 25; x <= width-50; x+= 25 ) { // draw lines from bottom to top left corner
      strokeWeight(1);
      line( x, height, 0, 0 );
    }

    for ( int y = 25; y <= height-50; y+=25 ) { // draw lines from left side to top right corner 
      strokeWeight(1);
      line( 0, y, 800, 0 );
    }
    for ( int y = 25; y <= height-50; y+=25 ) { // draw lines from right side to bottom left corner
      line( width, y, 0, 600 );
    }
  }


  if ( option == 2 ) {
    background( black );
    fill( black ); // reset the fill each loop
    noStroke();
    for ( int x = 0; x <= 1250; x+= 25 ) { // going beyond the edge of the window so that the pattern fills up most of the screen
      for ( int y = 0; y <= 1000; y+=25) {
        fill( r, 0, b );
        ellipse( x, y, y, x ); // reverse the ellipse

        r+=50; // add 50 to the r value
        if ( r > 255 ) { // reset the r value if it becomes greater than it's strongest value
          r = 0;
        }
        b+=50; // add 50 to the b value
        if ( b > 255 ) { // reset the b value if it becomes greater than it's strongest value
          b = 0;
        }
      }
    }
  }

  if ( option == 3 ) {
    background(white);
    strokeWeight(.25);
    stroke(black);
    for ( int x = 25; x <= width-25; x+= 10 ) { // spacing change to create different levels of perspective
      for ( int y = 25; y <=height-25; y+= 40 ) {
        line(x, y, width/2, height/2);  // line to center point
      }
    }
    for ( int y = 25; y <= height-25; y+=40 ) {
      strokeWeight(2);
      line( 25, y, width-25, y ); // line for each row
    }
  }


  if ( option == 4 ) {
    strokeWeight( 2 ); // left the background the previous pattern on purpose to paint over it.
    //if (mousePressed() == true ) {
    for ( int i = 0; i < width; i+=30 ) {
      point( mouseX-random(25), mouseY-random(25) );
      point( mouseX+random(25), mouseY+random(25) );
    }
    // }
  }

  if ( option == 5 ) {
    background(white); // reset the field to white
    strokeWeight(3);
    stroke(r, g, b);
    for (int i = 0; i < width; i++ ) {
      line( mouseX, mouseY, 800, 0 ); // from mouse to upper right corner
      line( mouseX, mouseY, 0, 600 ); // from mouse to lower left corner
      line( mouseX, mouseY, 800, 600 ); // from mouse to lower right corner
      line( mouseX, mouseY, 0, 0 ); // from mouse to upper left corner
      r = mouseX;
      g = mouseY;
      b = 0;
    }
  }
}

void mousePressed() {
  option++;

  if (option > 5) {
    option = 0;
  }
}