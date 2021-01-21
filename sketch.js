
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{

}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the bodies here

	platform=new Ground(400,400,200,10)
	
	box1=new Box(330,235,30,40)
	box2=new Box(360,235,30,40)
	box3=new Box(390,235,30,40)
	box4=new Box(420,235,30,40)
	box9=new Box(450,235,30,40)
	box5=new Box(360,195,30,40)
	box6=new Box(390,195,30,40)
	box7=new Box(420,195,30,40)
	box8=new Box(390,155,30,40)

	polygon=new Box(200,200,30,30)

	rope=new Rope(polygon.body,{x:200,y:300})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  rope.attach(polygon.body)

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  polygon.display()
  platform.display()
  rope.display()
  drawSprites();
 
}

function mouseReleased(){
	rope.fly();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(this.polygon)
	}
}
