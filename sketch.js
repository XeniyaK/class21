var fixedRect, movingRect;
var car1,car2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car1=createSprite(100,300,30,30)
  car2=createSprite(1000,300,30,30)
  car1.velocityX=3
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceoff(car1,car2)
  drawSprites();
}
