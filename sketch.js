var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf
var appleImg,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function apples(){
  if(frameCount % 20 === 0){
    apple = createSprite(Math.round(random(20,380)),-10)
    apple.addImage(appleImg)
    apple.scale = 0.1
    apple.velocityY = 10
    apple.lifeTime = 40
  }
}
function leaves(){
  if(frameCount % 25 === 0){
    leaf = createSprite(Math.round(random(20,380)),-10)
    leaf.addImage(leafImg)
    leaf.scale = 0.1
    leaf.velocityY = 6
    leaf.lifeTime = 240
  }
}


function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  apples()
  leaves()
  drawSprites();
}