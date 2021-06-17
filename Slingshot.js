class SlingShot{
    constructor(localBodyA, pointB){
        var options={
            bodyA:localBodyA,
            pointB:pointB,
            stiffness: 0.09,
            length: 10
        }
        
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;

    }

    fly(localBody){
        this.sling.bodyA=null;
    }

    attach(localBody){
        this.sling.bodyA=localBody;
    }
    
    display(){
        if(this.sling.bodyA){

        var pointA=this.sling.bodyA.position
        var pointB=this.pointB;

        strokeWeight(5);
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
  }
}