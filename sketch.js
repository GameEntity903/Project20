var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,canvas.height/2);
  wall.shapeColor = (80,80,80);
  car.shapeColor = "white";
  deformation = (0.5*weight*speed*speed)/22500;
}
function draw() {
  background("black");
  console.log(deformation); 
  car.velocityX = speed;  if(car.isTouching(wall)){
    car.velocityX = 0;
  }
  if(((deformation<=100))&&(car.isTouching(wall))){
    car.shapeColor = "green";
    console.log(deformation);
     }
  if((deformation >=100) && (deformation <=180)&&(car.isTouching(wall))){
      car.shapeColor = "yellow";
     }
  if((deformation>=180)&&(car.isTouching(wall))){
        car.shapeColor = "red";
     }
  drawSprites();
}