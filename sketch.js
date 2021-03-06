// Your code will go here

// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);

let mobilenet;

let tentacles;
function modelReady()
 {
 console.log('Model is Ready!!!');
 }
function setup(){
	createCanvas(400, 400);
    tentacles = createImg('tentacles2.jpg');
    puffin.hide();
	textSize(width / 3);
	textAlign(CENTER, CENTER);

    mobilenet = ml5.imageClassifer('MobileNet', modelReady);
}

function draw(){
	background(200);
	text(ml5.version, width/2, height/2);
}
