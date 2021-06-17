class Polygon{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:false,
            density:0.01
        }

        this.image=loadImage("Images/hexagon.png");
        this.body=Bodies.rectangle(x,y,width,height,options)
        Matter.Body.setAngle(this.body,angle);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,120,60);    
        pop();

    }
}