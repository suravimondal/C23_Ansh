class Box{
    constructor(x,y,width,height){
        //JSON= Javascript Object Notation
        var options={
            restitution: 0.8,
            
        }
       this.body= Bodies.rectangle(x,y,width,height,options);

       //referencing/referring means this
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
     display(){
            var pos= this.body.position;
            var angle= this.body.angle;

            push();

            //the body has to be around its own axis
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(255);
            rect(0,0,this.width,this.height);
            pop();

    }















}