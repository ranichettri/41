class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true,
            restitution:0.5
        }
        this.body = Bodies.circle(x,y,10,option);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        this.image=loadImage("images/Walking Frame/walking_1.png");
    }
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,450,500 );
        pop();
    }
};