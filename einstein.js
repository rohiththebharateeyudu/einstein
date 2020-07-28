
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,bob6;
var roof;
var chain1,Chain2,Chain3,Chain4,Chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new BOB(560,380,10,10);
	bob2 = new BOB(520,380,10,10);
	bob3 = new BOB(480,380,10,10);
	bob4 = new BOB(440,380,10,10);
	bob5 = new BOB(400,380,10,10);
	Chain1 = new Chain(400,270,10,100);
	Chain2 = new Chain(440,270,10,100);
	Chain3 = new Chain(480,270,10,100);
	Chain4  = new Chain(520,270,10,100);
	Chain5 = new Chain(560,270,10,100);
    roof = new ROOF(478,180,100,100);
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();
  roof.display();
  drawSprites();
 
}


