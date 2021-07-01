var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave2.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);
  security = new Security();
  system = new System();
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 600, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED !!",250, 250);
  }

  drawSprites()
}