let soundFile;
let soundPlayed = false;
let startTime;

function preload() {
    soundFile = loadSound('halloween.mp3');
}

function setup() {
    createCanvas(400, 400);
    startTime = millis();
    userStartAudio();
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
  }
}

function draw() {
    background(220);

    if (millis() - startTime > 3000) {
        ellipse(width / 2, height / 2, 50);
    }
}
