let mobilenet;
let puffin;

const URL =
  "https://thumbs.dreamstime.com/b/malay-tapir-asian-tapir-looks-strange-interesting-tapirus-indicus-90330981.jpg";
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
    createP(label);
  }
}

function setup() {
  createCanvas(640, 480);
  userImg = createImg(URL, imageReady);
  userImg.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
