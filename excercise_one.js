function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
//Called Functions
  myTriangle();
  myEllipse();
  myArc();
  
  
function myTriangle() {
  fill("orange");
  angleMode(DEGREES);
  triangle(150, 150, 200, 200, 250, 150);
}
  
function myEllipse() {
  fill("red");
  angleMode(DEGREES);
  ellipse(200, 230, 70, 70);
}
  
function myArc() {
  fill("yellow");
  angleMode(DEGREES);
  arc(200, 150, 100, 100, 270, 360);
  fill("maroon");
  arc(200, 150, 100, 100, 180, 270);
}
