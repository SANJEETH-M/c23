class Box {
     constructor(x,y,width,height){
          //properties of the oject
          //'this' keyword is used

          var options ={
               restitution : 1.0
          }

          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
     }

     display(){
          var pos = this.body.position;
          var angle = this.body.angle;
          
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          fill(25,85,90);
          rectMode(CENTER);
          rect(0,0, this.width, this.height);
          pop();
     }
}