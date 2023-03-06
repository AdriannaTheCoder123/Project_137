status = "";
objects = [];

function preload() {

}

function setup() {
  canvas = createCanvas(450, 350);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(450,350);
  video.hide();
}

function draw() {
  image(video, 0, 0, 450, 350);
  if(status != "") 
  {
    objectDetector.detect(gotResult);
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";

      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill()
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }

  if(objects[i].label == object_name) {
    video_webcameLiveView.stop();
    objectDetector.detect(gotResult);

    document.getElementById("object_status").innerHTML = object_name + "Found";
    SpeechSynthesisUtterance("object mentioned found");
    SpeechSynthesisUtterance.utterThis;

  {
    SpeechSynthesisUtterance("object mentioned not found");
    SpeechSynthesisUtterance.utterThis;
    }
  }
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   document.getElementById("input").value;
  }

  function modelLoaded() {
    console.log("Model is Loaded!");
    status = true;
  }

  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
      console.log(results);
      objects = results;
  }