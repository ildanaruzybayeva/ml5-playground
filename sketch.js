function modelReady(){
    console.log("model is ready")
}

const mobilenet = ml5.imageClassifier('MobileNet', modelReady);


function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
}