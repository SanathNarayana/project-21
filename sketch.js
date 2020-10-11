var ground, ground1;



function setup() {
  var canvas=createCanvas(480,800);
  createSprite(200, 200, 50, 50);
  ground1 = new Ground(600,height,1200,20);
}

function draw() {
  rectMode(CENTER);
  background(0);  
  ground1.display();
  drawSprites();
}