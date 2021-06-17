class Block extends BaseClass {
  constructor(x, y, width, height,angle){
    super(x,y,width,height,angle);
    this.Visibility=255;
    
  }
  display(){
    fill("lightblue")
    if(this.body.speed<3){
      super.display();
    }else{
      push();
      World.remove(world,this.body)
      this.Visibility=this.Visibility-5
      tint(255,this.Visibility)
      pop();
    }
    //console.log(this.body.speed)
  }
};
