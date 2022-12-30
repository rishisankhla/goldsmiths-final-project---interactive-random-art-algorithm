//took help from https://p5js.org/reference/#/p5/noise
//took help from https://editor.p5js.org/codingtrain/sketches/2_hBcOBrF

var add_val = 0.01;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
}

function draw() {
  randomart();
}

function randomart() {
  var y_val = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    var x_val = 0;
    for (let x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var final_val = noise(x_val, y_val) * 255;
      pixels[index + 0] = final_val;
      pixels[index + 1] = final_val;
      pixels[index + 2] = final_val;
      pixels[index + 3] = 255;

      x_val += add_val;
    }
    y_val += add_val;
  }
  updatePixels();
}
