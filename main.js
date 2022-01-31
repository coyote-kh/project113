function preload(){
}

function setup(){
    canvas = createCanvas(540,480);
    canvas.position(650,310);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 540, 480);
    fill(133, 180, 255);
    stroke(133, 180, 255);
    circle(40,40,50);
    circle(40,440,50);
    circle(500,440,50);
    circle(500,40,50);
    fill(156, 14, 127);
    stroke(156, 14, 127);
    rect(35, 65, 15, 350);
    rect(65, 35, 410, 15);
    rect(490, 65, 15, 350);
    rect(65,430, 410, 15);
}

function take_snapshot(){
    save("YOUR BEAUTIFUL PIC.png"); 
}

