let soundFile;
let soundPlayed = false;
let startTime;

function preload() {
    soundFile = loadSound('halloween.mp3');
}

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
  }
  startTime = millis();

}
 
function draw() {
    background(220);

    if (millis() - startTime > 3000 && millis() - startTime < 4000) {
        fill(0)
    }

    if (millis() - startTime > 4000 && millis() - startTime < 5000) {
        fill(255)    
    }

    if (millis() - startTime > 5000 && millis() - startTime < 6000) {
        fill(0)
    }

    ellipse(width / 2, height / 2, 50);

}
