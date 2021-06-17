var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,Block11,Block12,Block13,Block14;
var Block15,stand,polygon,rope,fly,bg,backgroundImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	getbgImage()
}

function setup() {
	createCanvas(1000,800);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);

	Block1=new Block(560,565,50,50);
	Block2=new Block(630,565,50,50);
	Block3=new Block(700,565,50,50);
	Block4=new Block(770,565,50,50);
	Block5=new Block(840,565,50,50);
	Block6=new Block(595,485,50,50);
	Block7=new Block(665,485,50,50);
	Block8=new Block(735,485,50,50);
	Block9=new Block(805,485,50,50);
	Block10=new Block(635,435,50,50);
	Block11=new Block(700,435,50,50);
	Block12=new Block(765,435,50,50);
	Block13=new Block(667.5,385,50,50);
	Block14=new Block(732.5,385,50,50);
	Block15=new Block(700,335,50,50);
	
	stand=new Stand(705,580,400,20);

	polygon=new Polygon(200,300,30,30,PI/8);

	rope=new SlingShot(polygon.body,{x:220,y:280});

}


function draw() {
	if(backgroundImage)
		background(backgroundImage);

    Block1.display();
	Block2.display();
	Block3.display();
	Block4.display();
	Block5.display();
	Block6.display();	
	Block7.display();
	Block8.display();
	Block9.display();
	Block10.display();
	Block11.display();
	Block12.display();
	Block13.display();
	Block14.display();
	Block15.display();

	stand.display();

	polygon.display();

	rope.display();
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.fly(polygon.body);
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(polygon.body);
	}
}

async function getbgImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var json=await response.json();

  var datetime=json.datetime
  var hour=datetime.slice(11,13);

  if(hour>=06 && hour<=18){
	  bg="Images/day.jpg"
  }else{
	  bg="Images/night.jpg"
  }
  backgroundImage=loadImage(bg)
}