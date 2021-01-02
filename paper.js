class Paper{
    constructor(x,y,radius){

        var paper_options = {
            

           isStatic:false,
           restitution :0.3,
           friction:0.5,
           density:1.2
        } 
        
        
        this.body = Bodies.circle(x,y,radius,paper_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        World.add(world,this.body)


    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        fill("yellow");
        ellipse(pos.x,pos.y,this.width,this.height);
        
        pop()


    }







}