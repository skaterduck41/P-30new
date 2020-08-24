class Box{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic: false,
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/box.png");
        World.add(world, this.body);
      }
        display(){
         
          if (this.body.speed<3) {
           var angle = this.body.angle;
            push();
            //this.Visibility = this.Visibility - 5
            //tint(255, this.Visibility)
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
          else {
            World.remove(world,this.body)
            push();
            this.Visibility = this.Visibility - 5
            tint(255, this.Visibility)
            image(this.image, this.body.position.x, this.body.position.y, 50, 50)
            pop();
          }
      
      }
}   