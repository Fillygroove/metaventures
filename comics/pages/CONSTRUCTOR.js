let directory = `${comicInfo.folder}`;

if (comicInfo.rewindTo != undefined) makeButton({
	html: 'Rodney Rewind', 
	color: 'rodney-violet', 
	link: `./index.html?c=${comicInfo.rewindTo}`
});

if (comicInfo.background != undefined) {
	document.getElementsByTagName('html')[0].style.backgroundImage = `url(../${comicInfo.background})`;
}

let slideshow = document.createElement('div');
slideshow.className = 'slideshow-container';

let slideTitle = document.createElement('div');
slideTitle.className = 'comic-title';
slideTitle.innerHTML = comicInfo.title;

for (let i = 0; i < comicInfo.panels.length; i++) {
	let slide = document.createElement('div');
	slide.style = 'background-color: rgba(0, 0, 0, 0);';
	slide.className = 'slides';

	let panel = document.createElement('img');
	
	panel.src = `./panels/${directory}/${comicInfo.panels[i].panel}`;
	panel.style = 'max-height: 21.5em; height: 21.5em; text-align: center; display: flex; margin: 0 auto 0 50%; transform: translateX(-50%); background-color: rgba(0, 0, 0, 0);';
	if (comicInfo.panels[i].classTitle !== undefined) panel.className = comicInfo.panels[i].classTitle;

	if (comicInfo.panels[i].link !== undefined) {
		let panelLink = document.createElement('a');
		panelLink.href = comicInfo.panels[i].link;
		panelLink.append(panel);
		slide.append(panelLink);
	} else slide.append(panel);
	
	if (comicInfo.panels[i].caption !== undefined) {
		let caption = document.createElement('div');
		caption.style = 'text-align: center; background-color: rgba(0, 0, 0, 0); font-weight: bold;';
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
prevButton.className = 'prev';
nextButton.className = 'next';
prevButton.innerHTML = '&#9664;';
nextButton.innerHTML = '&#9654;';
prevButton.type = 'button';
nextButton.type = 'button';
prevButton.onclick = () => {
	showSlides(slideIndex -= 1);
};
nextButton.onclick = () => {
	showSlides(slideIndex += 1);
};

let slideText = document.createElement('div');
slideText.style = 'text-align: center; background-color: rgba(0, 0, 0, 0); height: 1.4em;';

slideLabel = document.createElement('label');
slideLabel.style = 'background-color: rgba(0, 0, 0, 0); line-height: 2.55em;';
slideLabel.innerHTML = 'Panel Number: ';
slideLabel.htmlFor = "panel";
	
slideInput = document.createElement('input');
slideInput.type = 'text';
slideInput.id = 'panel';
slideInput.name = 'panel';
slideInput.style = 'color: white; width: 9em; text-align: center;';
slideInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		verify(slideInput.value);
	}
});

slideText.append(prevButton, nextButton, slideLabel, slideInput);

slideshow.append(slideText, line);

let desc = document.createElement('h4');

desc.className = 'description';
desc.innerHTML = comicInfo.desc;

let numbertext = document.createElement('p');
numbertext.style = 'top: -50px; left: -60px; position: relative;';

avThin.append(numbertext, slideTitle, slideshow, desc);


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName('slides');

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

	numbertext.innerHTML = `${comicInfo.panels[slideIndex - 1].number ? comicInfo.panels[slideIndex - 1].number : slideIndex} / ${comicInfo.panels.length}`;
}

function verify(slide) {
	let slides = document.getElementsByClassName('slides');

	if (comic == 'av-9' && slide == '999') { // Nineventures Easter Egg
		window.location.href = 'index.html?c=nine';
	} else if (comic == 'nine' && slideIndex == 9 && (slide == '9' || slide == 'nine')) { // Metanineventures Easter Egg
		window.location.href = '../wiki/index.html?p=nine';
	} else if (slide == 'Panel Number') {  // Panel Number Easter Egg
		window.location.href = 'index.html?c=pn';
	} else if (!isNaN(slide) && Math.floor(slide) != slide) { // Panel Corruption Easter Egg
		if (comic == 'av-10.5' || comic == 'trigger' || comic == 'av-choose') {
			document.getElementsByClassName('description')[0].innerHTML = 'Failed the corruption, please try again later.';
			return;
		}
		if (comic == 'pn') {
			document.getElementsByClassName('description')[0].innerHTML = 'Come back another time for another secret.';
			return;
		}
		document.getElementsByClassName('description')[0].innerHTML = 'Well... What did you think was going to happen when you put in a decimal value?';
		document.getElementsByClassName('slides')[slideIndex - 1].childNodes[1].src = `./panels/secrets/corrupt/${comic}.jpg`;
		document.getElementsByClassName('slides')[slideIndex - 1].childNodes[1].visibility = 'visible';
		if (comic == 'nine') {
			document.getElementsByClassName('slides')[slideIndex - 1].childNodes[2].innerHTML = 'Aero is gone.';
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
	if (event.key == 'ArrowLeft') showSlides(slideIndex -= 1);
	if (event.key == 'ArrowRight') showSlides(slideIndex += 1);
});

correctLinks();
