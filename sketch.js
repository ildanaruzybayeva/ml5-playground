let mobilenet;
let puffin;

function modelReady() {
  console.log("Model is ready!!!");
}

function imageReady() {
  image(puffin, 0, 0, width, height);
  mobilenet.predict(puffin, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    let label = results[0].className;
    fill(0);
    textSize(30);
    text(label, 10, height - 10);
  }
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg("images/penguin.jpg", imageReady);
  puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
