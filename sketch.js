var wall, thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,50);
  bullet=createSprite(50,200, 50, 50);
  wall=createSprite(600, 200, thickness, height/2);
} 
  

function draw() {
  background(0);  
  wall.shapeColor=color(80,80,80); 
  bullet.velocityX=speed;

  if (hasCollided(bullet, wall)){
     bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
     if(damage>10){
       wall.shapeColor=color(255,0,0)
     }
     if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
   }
 
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}
