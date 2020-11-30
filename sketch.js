let mobilenet;
let puffin;

const URL =
  "https://upload.wikimedia.org/wikipedia/commons/6/68/Eurasian_wolf_2.jpg";

function modelReady() {
  console.log("Model is ready!!!");
}

function imageReady() {
  image(userImg, 0, 0, width, height);
  mobilenet.predict(userImg, gotResult);
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
  userImg = createImg(URL, imageReady);
  userImg.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
