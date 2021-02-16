var fruits,chips,chocolates;
var player;
var nutella,chocolate, bluechips, yellowchips;
var strawberry, mango, guava, watermelon;

function preload(){
nutella= loadImage("nutella.jpg");
chocolate= loadImage("choco.jpg");
bluechips= loadImage("blue.jpg");
yellowchips= loadImage("yellow.jpg");
strawberry= loadImage("strawberry.png");
mango= loadImage("mango.png");
guava= loadImage("guava.png");
watermelon= loadImage("wm.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}


function draw() {
  background(255);  
  createchips();
  createchocolates();
  createfruits();
  drawSprites();

}

function createfruits(){
if (frameCount % 30===0){
fruits = createSprite((random(20,width-50)),0,50,50)
fruits.velocityY = 15;
var rand = Math.round(random(1,3));
switch(rand){
  case 1:fruits.shapeColor="red"
  break;
  case 2:fruits.shapeColor="blue"
  break;
  case 3:fruits.shapeColor="green"
  break;
  
}
fruits.lifetime = 100;
console.log(height/5);
}
}

function createchips(){
  if (frameCount % 50===0){
  chips = createSprite((random(20,width-50)),0,40,80)
  chips.velocityY = 15;
  var rand = Math.round(random(1,3));
  switch(rand){
    case 1:chips.shapeColor="yellow"
    break;
    case 2:chips.shapeColor="black"
    break;
    case 3:chips.shapeColor="purple"
    break;
    
  }
  chips.lifetime = 100;
  console.log(height/5);
  }
  }

  function createchocolates(){
    if (frameCount % 100===0){
    chocolates = createSprite((random(20,width-50)),0,20,20)
    chocolates.velocityY = 15;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:chocolates.shapeColor="red"
      break;
      case 2:chocolates.shapeColor="blue"
      break;
      case 3:chocolates.shapeColor="green"
      break;
      
    }
    chocolates.lifetime = 100;
 
    }
    
    }