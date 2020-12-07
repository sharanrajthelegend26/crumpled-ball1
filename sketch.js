
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var dustbinObj,paperObject,groundObject;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	var render= Render .create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}

}

