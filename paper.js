class Paper{
    constructor(x,y,r){
        var options={ 
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
          }
this.x=x
this.y=y
this.r=r
this.image=loadImage("paper.png")
          this.body=Bodies.circle(this.x,this.y,this.r,options)
          World.add(world,this.body)

    }
display(){
    var paperposition=this.body.position
    push()
    translate(paperposition.x,paperposition.y)
    rotate(this.body.angle)
    ellipseMode(CENTER)
  ellipse(0,0,this.r,this.r) 
//   imageMode(CENTER);
//        image(this.image, 0, 0); 
    pop()

}
}