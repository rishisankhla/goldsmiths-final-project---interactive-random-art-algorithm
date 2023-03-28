
function setup() {
    
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  hand_detection = ml5.handpose(video, modelReady);
  
  hand_detection.on("hand", results => {
    points_array = results;
  });
  video.hide();
}

function modelReady() {
  console.log("Model is working");
}

function draw() {
  image(video, 0, 0, width, height);

  drawpoints();
}

function drawpoints() {
  for (let i = 0; i < points_array.length; i += 1) {
    const first_prediction = points_array[i];
      t_number = 1;
    for (let j = 0; j < first_prediction.landmarks.length; j += 1) {
      const keypoint = first_prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 15, 15);
        push();
        fill(255);
        textSize(15);
        text(t_number.toString(), keypoint[0], keypoint[1]);
        pop();
        t_number=t_number+1;
    }
  }
}
