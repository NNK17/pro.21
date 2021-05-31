var bullet, wall, speed, weight, thickness

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  thickness = random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  bullet = createSprite(50,height/2,50,25)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color (80,80,80);
  bullet.velocityX= speed;
  
  
}

function draw() {
  background(0,0,0);  
  drawSprites();
  detectCollision()
  
}

function detectCollision (){

  var deformation= 0.5*weight*speed*speed/(thickness*thickness*thickness)
  console.log(deformation)

if (bullet.isTouching(wall)&& deformation<10){

  bullet.shapeColor="Green"
  bullet.velocityX=0;
}

else if(bullet.isTouching(wall)&& deformation>10){

  bullet.shapeColor="red"
  bullet.velocityX=0;

}



}