
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.constraint



var bob1;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
	//bob1= new Bob (200,200,70);
	roof=new Roof (300,600,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  bob1.display();
  
  drawSprites();
 
}



