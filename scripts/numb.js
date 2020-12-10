const mpc = 439.871334097;

function pixelsFromCircumference(circumference) {
	return circumference / (Math.PI * mpc);
}

function diamFromPixels(pixels) {
	return pixels * mpc;
}

console.log(diamFromPixels(88));
