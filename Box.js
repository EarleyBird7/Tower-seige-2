class Box {
    constructor(x,y,width,height) {
      var options = {
        friction:0.5,
        density:0.05
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
 var angle=this.body.angle
 if(this.body.speed < 3){
   super.display()
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
 translate(pos.x,pos.y)
 rotate(angle)     
 rectMode(CENTER);
      rect(0,0,this.width,this.height)
      pop()
 }
}
}