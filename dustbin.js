class Dustbin{
    constructor(x, y ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.bodyplate = Bodies.rectangle(x, y, 20, 70, options);
        this.bodyleftplate = Bodies.rectangle(x-135, y-35,20,70, options); 
        this.bodyrightplate = Bodies.rectangle(x+135, y+35, 20,70, options);

        this.width = 20;
        this.height = 70;
        this.image=loadImage("dustbin.png")
        World.add(world, this.bodyplate);
        World.add(world, this.bodyleftplate);
        World.add(world, this.bodyrightplate);
    }
      display(){
        //var angle = this.body.angle;
       // push();
        //translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        // imageMode(CENTER);
        // image(this.image, this.bodyplate.position.x, this.bodyplate.position.y,10, 90);
       // pop();

        var pos =this.bodyplate.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        
        var posr =this.bodyrightplate.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        
        var posl =this.bodyleftplate.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      
      }
}


