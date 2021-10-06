const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

//1. load images  in the preload function, this runs first
function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

                                       /*7
                                        quickly create a
                                        button and add this function with
                                        that button, so that we
                                        can drop our fruit.
                                       */
   
                                        //btn 1
                                        /*8
                                        createImg().
                                        This takes an image as a 
                                        parameter and makes that
                                        image work as a button.
                                        First, define a variable as a var
                                        button.
                                        Then in the setup() function create
                                        the image button
                                        using the createImg() function and 
                                        pass the image we
                                        want to display on this button.
                                        We also need to specify the size and position of the
                                        button.

                                        add the function with the help of the
                                        mouseClicked() function.
                                        In the mouseClicked() function, 
                                        we are passing the
                                        function which we want to execute
                                        when we click the
                                        button.
                                        */
  button = createImg('cut_btn.png');
  button.position(200,30);
  button.size(50,50);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

                                          /*4.For the bunny, we will not 
                                          create a physics body, because
                                          we only need it to play its 
                                          animation and detect the
                                          collision with fruit.
                                          */

  bunny = createSprite(200,620,100,100);
  bunny.addImage(rabbit);
  bunny.scale = 0.2;     
  //don't forget to add draw sprites

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  

}

function draw() 
{
  background(51);
                                          /* 2 The image is stored in the
                                           bg_img variable, x and y
                                           position we will specify as
                                           width/2
                                           and height/2 because
                                           we set the imageMode as CENTER.  

                                          */
  image(bg_img,0,0,displayWidth+80,displayHeight);

                                          /*3.
                                          */
  
  push();
  imageMode(CENTER); 
  /*9
  */
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  } 
  pop();                                 
  rope.show();
  //ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();

  drawSprites();
   
}

/* 6
define the drop() function, where we're going
to break the rope using the rope.break() function, and we
remove the fruit constraint by using the fruit_con.detach()
function and making fruit_con as null

*/

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}


