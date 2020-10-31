var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;


var engine,world;

var roof;

var rope1, rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	// No image to be Loaded here
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Create the roof here.

	roof = new Roof(390, 150, 300,30);

	
	//Create the bob objects here.

	bobObject1 = new Bob(270,400,62);
	bobObject2 = new Bob(330,400,62);
	bobObject3 = new Bob(390,400,62);
	bobObject4 = new Bob(450,400,62);
	bobObject5 = new Bob(510,400,62);

	//Create the ropes here.

	rope1 = new Rope(bobObject1.body,roof.body, -31*4, 0)
	rope2 = new Rope(bobObject2.body,roof.body, -31*2, 0)
	rope3 = new Rope(bobObject3.body,roof.body, -31*0, 0)
	rope4 = new Rope(bobObject4.body,roof.body, -31*-2, 0)
	rope5 = new Rope(bobObject5.body,roof.body, -31*-4, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:500})
	}
}
