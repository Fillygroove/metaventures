let slideIndex = 1;
showSlides(slideIndex);

document.getElementById("panel").addEventListener("keyup", function(event) {
	event.preventDefault();
	let slideValue = document.getElementById("panel").value;
	if (event.key === "Enter") {
		currentSlide(slideValue);
	}
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function isNumber(evt) {
	let keyCode = evt.key;
	if (keyCode > -1 && keyCode < 10) return true;
	return false;
}    
// Thumbnail image controls
function currentSlide(n) {
	if (n < 1) return;
	showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}