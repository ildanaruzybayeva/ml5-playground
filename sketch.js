let puffin
let mobilenet

function modelReady(){
    console.log("model is ready")
}

function imageReady(){
    image(puffin, 0,0, width, height)
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg('images/puffin.jpg', imageReady)
  puffin.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
  background(0);
}