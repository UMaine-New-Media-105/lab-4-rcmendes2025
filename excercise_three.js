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
  noStroke();
  
//Called Functions
  myTriangle(200, 200, 50, 10, 350, 10, "red");
  myEllipse(200, 200, 150, 150, "#FFC107");
  myArc(200, 200, 150, 150, 230, 310, "black");
}
  
//My Functions
function myTriangle(x1, y1, x2, y2, x3, y3, myColor) {
  fill(myColor);
  triangle(x1, y1, x2, y2, x3, y3);
}
  
function myEllipse(x, y, w, h, myColor) {
  if (mouseX < 200) {
  fill(myColor);
  ellipse(x, y, h, w);
  } else {
  fill("black");
  ellipse(x, y, h, w);
  }
}

function myArc(x, y, w, h, start, stop, myColor) {
  if (mouseX < 200) {
  fill(myColor);
  angleMode(DEGREES);
  arc(x, y, w, h, start, stop);
  } else {
  fill("#FFC107");
  arc(x, y, w, h, start, stop);
  }
}
