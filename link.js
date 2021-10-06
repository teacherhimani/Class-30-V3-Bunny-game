class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    } 


    /*6
    
    */

    detach()
    {
      World.remove(engine.world,this.link);
     
    }
}

/*5
We have two things to perform:
● Cut the rope from the top point where it is
connected.
● Cut the fruit from the rope.

cut the rope from the top : call a
function from the rope class, which is called break(). It
will release the rope and remove it from the scene.

detach the fruit from the rope : delete
the constraint between the rope and fruit by removing
that constraint from the world.

create this function in the Link class and call it using the link object.

use the World.remove() function, this will
remove the constraint from the world.

To call the detach() & break() function : create a
new function in the sketch.js file named drop(), which
we will call(execute) by a button press.

Make the fruit constraint as null. So that it
does not affect the fruit.
*/
