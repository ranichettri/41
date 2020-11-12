class Drop{
    constructor(x,y){
        var option = {
            restitution:0.4,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,5,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(0,191,255);
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
    }
    update(){
        if(this.body.position.y>800){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,100)})
        }
    }

}