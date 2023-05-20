let robotX;
let robotY;
const robotSize = 50;
const earSize = 20;
const tailLength = 30;
let clickCount = 0;
let rotation = 0;
let textToShow = "He's trying to fight you! Punch him!";
let flying = false;
let backgroundImage;


function preload() {

  backgroundImage = loadImage("fight ring.jpeg");
}

function setup() {
  createCanvas(400, 400);
  robotX = width / 2;
  robotY = height / 2;
}

function draw() {
  
  background(backgroundImage);
 
  let angle = atan2(mouseY - robotY, mouseX - robotX);
  
  
  if (!flying) {
    robotX += cos(angle) * 2;
    robotY += sin(angle) * 2;
  }
  
 
  push();
  translate(robotX, robotY);
  rotate(rotation);
  

  fill(255, 0, 0);
  rectMode(CENTER);
  rect(0, 0, robotSize, robotSize);
  

  fill(255);
  let faceSize = robotSize * 0.6;
  ellipse(0, -robotSize * 0.25, faceSize, faceSize);
  
 
  fill(0);
  let eyeSize = faceSize * 0.15;
  let eyeOffset = faceSize * 0.2;
  ellipse(-eyeOffset, -robotSize * 0.25, eyeSize, eyeSize);
  ellipse(eyeOffset, -robotSize * 0.25, eyeSize, eyeSize);
  
  
  fill(255, 0, 0);
  triangle(
    -earSize, -robotSize * 0.4,
    0, -robotSize * 0.6,
    earSize, -robotSize * 0.4
  );
  

  fill(255, 0, 0);
  let tailEndX = 0 - cos(angle) * tailLength;
  let tailEndY = 0 - sin(angle) * tailLength;
  triangle(
    0, 0,
    tailEndX, tailEndY,
    -sin(angle) * 10, cos(angle) * 10
  );
  
  pop();
  

  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(textToShow, width / 2, height - 20);
}

function keyPressed() {
  if (keyCode === 32) { // Spacebar key code
    flying = true;
    robotY -= 5; // Move the robot up to simulate flying off the screen
  }
}

function mousePressed() {
  clickCount++;
  if (clickCount === 5) {
    rotation += HALF_PI;
    clickCount = 0;
   
    textToShow = "Finish him, push him into SPACE!";
  }
}


