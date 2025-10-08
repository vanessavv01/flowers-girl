var vanvan=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(242,107,170) // an RGB color for the circle's border
  fill(255,100,127,200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(300,mouseX,400,mouseY); // center of canvas, 20px dia

  strokeWeight(20);
  line(300,700,500,10);
  rect(mouseX,mouseY,vanvan,vanvan);
  
  triangle(60,100,300,200,60,400);

  strokeWeight(10);
  textFont('impact')
  textSize(80);
  fill(230,20,230);
  text("Let's peace take over",30,100,0)


}

function mousePressed(){

  if (vanvan>=155) {
    vanvan=0;
  } else {
  vanvan= vanvan+5;
  }

}