
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,groundObj,leftSide;


let engine
let world


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_option = {
    isStatic:false,
    restitution:0,
    friction:0,
    density:1

   }
   ball = Matter.Bodies.circle(100,100,20,ball_option);
   World.add(world,ball);
   rectMode(CENTER);
   ellipseMode(RADIUS);

   // creating ground
   ground = new Ground (350,620,800,20);
   groundObj = new Ground (390,570,20,100);
   leftSide = new Ground (520,570,20,100);
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ellipse(ball.position.x,ball.position.y,15,15);
 
 ground.display()
 groundObj.display()
  leftSide.display()
  drawSprites();

 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:25,y:5})
  }

}

