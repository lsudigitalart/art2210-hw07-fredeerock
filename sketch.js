let sound;
let soundPlayed = false;
let startTime;

function preload() {
    sound = loadSound('halloween.mp3');
}

function setup() {
    createCanvas(400, 400);
    startTime = millis();
}

function draw() {
    background(220);

    if (!soundPlayed) {
        sound.play();
        soundPlayed = true;
    }

    if (millis() - startTime > 3000) {
        ellipse(width / 2, height / 2, 50);
    }
}
