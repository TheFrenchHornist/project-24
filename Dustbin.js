class Dustbin{
    constructor(){
        var options={
            isStatic:true,
            friction:0.5
        }
        this.leftBody=Bodies.rectangle(900, 640, 20, 50, options);
        this.rightBody=Bodies.rectangle(1100, 640, 20, 50, options);
        this.bottomBody=Bodies.rectangle(1000, 660, 200, 20, options);

        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);
    }
    display(){
        //var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(900, 670, 20, 50);
        rect(1100, 670, 20, 50);
        rect(1000, 690, 200, 20);
    }
}