
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,paperObject,bin1,bin2,bin3;
function preload()
{
//look at line 20
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground (10,650,1000000,50);
	paperObject = new Paper(100,350,10);
	//hey look here i forgot the command for making the circle smaller i couldnt find it
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//look at line 20
  bin1=createSprite(740,560,25,160)
  bin2=createSprite(600,560,25,160)
  bin3=createSprite(670,620,160,25)
  drawSprites();
 ground.display();
 paperObject.display();
 restitution :0.6;
}

//look at line 20
function keyPressed(){
	if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
	}
