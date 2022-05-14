// Create a reference for the canvas
canvas = document.getElementById("canvas_id")
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	bg_img1 = new Image();
	bg_img1.onload = uploadimg;
	bg_img1.src = img_image;
}

function uploadimg() {

	ctx.drawImage(bg_img1, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90))
		aplhabetkey();

	else {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}

	if (keyPressed >= 48 && keyPressed <= 57)
		numberkey();

	else {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}

	if (keyPressed >= 37 && keyPressed <= 40)
		arrowkey();

	else {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}


	if (key_pressed == '17') {
		specialkey();
	}

	if (key_pressed == '18') {
		specialkey();
	}

	if (key_pressed == '27') {
		specialkey();
	}
}

function aplhabetkey() {
	img_image = "Alpkey.png"
	add()
}

function numberkey() {
	img_image = "Arrkey.png"
	add();
}

function arrowkey() {
	img_image = "numkey.png"
	add();
}

function specialkey() {
	img_image = "spkey.png"
	add();
}

function otherkey() {
	img_image = "otherkey.png";
	add();
}