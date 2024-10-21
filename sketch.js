let soundFile, fft;

function preload() {
  soundFile = loadSound('halloween.mp3'); // Replace with your sound file path
}

function setup() {
  createCanvas(400, 400);
  fft = new p5.FFT();
  fft.setInput(soundFile);
  soundFile.play();
}

function draw() {
  background(220);
  let spectrum = fft.analyze();
  let bassEnergy = fft.getEnergy("bass");

  let threshold = 200; // Adjust this value as needed

  if (bassEnergy > threshold) {
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 50, 50);
  }
}
