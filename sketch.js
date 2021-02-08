
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var dustbinObj,groundObject, paper, chain;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200, 400, 50, 50);
	chain = new Chain(paper.body,{x:200,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
  chain.display();

}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    chain.fly();
}