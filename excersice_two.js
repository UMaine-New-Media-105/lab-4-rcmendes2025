function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
//Called Functions
  myTriangle("rgb(255, 130, 0)" );
  myEllipse("rgb(255, 0, 0)" );
  myArc("rgb(255, 250, 0)" );
}
  
function myTriangle(myColor) {
  fill(myColor);
  angleMode(DEGREES);
  triangle(150, 150, 200, 200, 250, 150);
}
  
function myEllipse(myColor) {
  fill(myColor);
  angleMode(DEGREES);
  ellipse(200, 230, 70, 70);
}
  
function myArc(myColor) {
  fill(myColor);
  angleMode(DEGREES);
  arc(200, 150, 100, 100, 270, 360);
  fill("rgb(133,0,0)" );
  arc(200, 150, 100, 100, 180, 270);
}
