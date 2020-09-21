class Rope {
    constructor(body1,body2,offsetX,offsetY) {
        var options = {
            bodyA:body1,
            bodyB :body2,
            length:5,
            stiffness:0.04,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options);
       
        World.add(world, this.chain);
      }

      this.rope=Constraint.create(options)
      display(){
        var pointA = this.chain.pointA.position;
        var pointB = this.chain.pointB.position;
        
        strokeWeight(2);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
      }




}