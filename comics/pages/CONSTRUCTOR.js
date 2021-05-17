let directory = `${comicInfo.folder}`;
let speedrunTime = 0;
let speedrunFinished = false;
let slides = document.getElementsByClassName('comic-slides');

if (comicInfo.rewindTo != undefined) makeButton({
	html: 'Rodney Rewind', 
	color: 'rodney-violet', 
	link: `./index.html?c=${comicInfo.rewindTo}`
});

if (comicInfo.background != undefined) {
	document.getElementsByTagName('html')[0].style.backgroundImage = `url(../images/${comicInfo.background})`;
}

let slideshow = document.createElement('div');
slideshow.className = 'comic-slideshow-container';

let slideTitle = document.createElement('div');
slideTitle.className = 'comic-title';
slideTitle.innerHTML = comicInfo.title;

for (let i = 0; i < comicInfo.panels.length; i++) {
	let slide = document.createElement('div');
	slide.className = 'comic-slides';

	let panel = document.createElement('img');
	
	panel.src = `./panels/${directory}${comicInfo.panels[i].panel}`;
	panel.className = `comic-panel${comicInfo.panels[i].classTitle ? ' ' + comicInfo.panels[i].classTitle : ''}`;

	if (comicInfo.panels[i].link !== undefined) {
		let panelLink = document.createElement('a');
		panelLink.href = comicInfo.panels[i].link;
		panelLink.append(panel);
		slide.append(panelLink);
	} else slide.append(panel);
	
	if (comicInfo.panels[i].caption !== undefined) {
		let caption = document.createElement('div');
		caption.className = 'comic-caption';
		caption.innerHTML = comicInfo.panels[i].caption;
		slide.append(caption);
	}

	if (comicInfo.panels[i].execute !== undefined) {
		comicInfo.panels[i].execute({panel, slide});
	}

	slideshow.append(slide);
}

let line = document.createElement('hr');
let prevButton = document.createElement('a');
let nextButton = document.createElement('a');
prevButton.className = window.localStorage.speedrun == 'true' ? 'comic-fast-prev' : 'comic-prev';

nextButton.className = 'comic-next';
prevButton.innerHTML = '&#9664;';
nextButton.innerHTML = '&#9654;';
prevButton.type = 'button';
nextButton.type = 'button';
prevButton.onclick = () => {
	if (window.localStorage.speedrun == 'false') showSlides(slideIndex -= 1);
};
nextButton.onclick = () => {
	let timerInterval;

	if (nextButton.className != 'comic-fast-next') showSlides(slideIndex += 1);

	if (slideIndex == 2 && speedrunTime == 0 && window.localStorage.speedrun == 'true') {
		timerInterval = setInterval(function() {
			speedrunTime++;
			slideTimer.innerHTML = `Timer: ${String(Math.floor((speedrunTime) / 100) % 60).padStart(2, '0')}.${String(speedrunTime % 100).padStart(2, '0')}`;
			if (slideIndex == slides.length) {
				clearInterval(timerInterval);
				nextButton.className = 'comic-fast-next';
				speedrunFinished = true;
			}
		}, 1);
	}
};

let slideDiv = document.createElement('div');
slideDiv.className = 'comic-slidetext';

let slideText = document.createElement('div');
slideText.className = 'comic-slidetext';
slideText.style = 'position: absolute';

let slideSpeedText = document.createElement('div');
slideSpeedText.className = 'comic-slidetext';
slideSpeedText.style = 'position: absolute';

slideLabel = document.createElement('label');
slideLabel.className = 'comic-slidelabel';
slideLabel.innerHTML = 'Panel Number: ';
slideLabel.htmlFor = 'comic-slide-input';

slideInput = document.createElement('input');
slideInput.type = 'text';
slideInput.id = 'comic-slide-input';
slideInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		verify(slideInput.value);
	}
});

slideTimer = document.createElement('p');
slideTimer.innerHTML = 'Timer: 00.00';

slideText.style.visibility = window.localStorage.speedrun == 'true' ? 'hidden' : 'visible';
slideSpeedText.style.visibility = window.localStorage.speedrun == 'true' ? 'visible' : 'hidden';

slideText.append(slideLabel, slideInput)
slideSpeedText.append(slideTimer)

slideDiv.append(prevButton, nextButton, slideText, slideSpeedText);

slideshow.append(slideDiv, line);

let desc = document.createElement('h4');

desc.className = 'comic-description';
desc.innerHTML = comicInfo.desc;

let numbertext = document.createElement('p');
numbertext.className = 'comic-numbertext';

avThin.append(numbertext, slideTitle, slideshow, desc);


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slides[slideIndex - 1].style.display = 'block';

	numbertext.innerHTML = `${comicInfo.panels[slideIndex - 1].number ? comicInfo.panels[slideIndex - 1].number : slideIndex} / ${comicInfo.howLong ? comicInfo.howLong : comicInfo.panels.length}`;
}

function verify(slide) {
	if (comic == 'av-9' && slide == '999') { // Nineventures Easter Egg
		window.location.href = 'index.html?c=nine';
	} else if (comic == 'nine' && slideIndex == 9 && (slide == '9' || slide == 'nine')) { // Metanineventures Easter Egg
		window.location.href = '../wiki/index.html?p=nine';
	} else if (slide == 'Panel Number') {  // Panel Number Easter Egg
		window.location.href = 'index.html?c=pn';
	} else if (!isNaN(slide) && Math.floor(slide) != slide) { // Panel Corruption Easter Egg
		if (comic == 'av-10.5' || comic == 'trigger' || comic == 'av-choose') {
			document.getElementsByClassName('comic-description')[0].innerHTML = 'Failed the corruption, please try again later.';
			return;
		}
		if (comic == 'pn') {
			document.getElementsByClassName('comic-description')[0].innerHTML = 'Come back another time for another secret.';
			return;
		}
		document.getElementsByClassName('comic-description')[0].innerHTML = 'Well... What did you think was going to happen when you put in a decimal value?';
		document.getElementsByClassName('comic-slides')[slideIndex - 1].childNodes[0].src = `./panels/secrets/corrupt/${comic}.jpg`;
		document.getElementsByClassName('comic-slides')[slideIndex - 1].childNodes[0].visibility = 'visible';
		if (comic == 'nine') {
			document.getElementsByClassName('comic-slides')[slideIndex - 1].childNodes[1].innerHTML = 'Aero is gone.';
		}
	}
	
	slide = Number(slide);

	if (!isNaN(slide)) {
		if (slide < slides.length + 1 && slide > 0 && Math.floor(slide) == slide) {
			currentSlide(slide);
		}
	}
}

window.addEventListener('keydown', function(event) {
	if (window.localStorage.speedrun == 'false') {
		if (event.key == 'ArrowLeft') showSlides(slideIndex -= 1);
		if (event.key == 'ArrowRight') showSlides(slideIndex += 1);
	}
});

correctLinks();
