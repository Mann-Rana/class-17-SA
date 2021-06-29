var box1
var boxE

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,100,40,50,2,-0.4);
  boxE = new Box(150,213,50,50,-3,0.2)
}

function draw() 
{
  background(220);
  box1.show();
  box1.moveV();
  box1.move();
  boxE.show();
  boxE.moveV();
  boxE.move();

}

