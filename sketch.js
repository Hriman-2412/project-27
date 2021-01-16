
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var ground;
var roof;

var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(150,400,50);
	bob2 = new Bob(200,400,50);
	bob3 = new Bob(250,400,50);
	bob4 = new Bob(300,400,50);
  bob5 = new Bob(350,400,50);
  ground = new Ground(400,500,800,10);
 roof = new Ground(250,200,240,10);
 

 rope1 = new Chain(bob1.body,roof.body,-bob1.radius*4,0);
 rope2 = new Chain(bob2.body,roof.body,-bob2.radius*4,0);
 rope3 = new Chain(bob3.body,roof.body,-bob3.radius*4,0);
 rope4 = new Chain(bob4.body,roof.body,-bob4.radius*4,0);
 rope5 = new Chain(bob5.body,roof.body,-bob5.radius*4,0);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(230,230,0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  drawSprites();
 
}



