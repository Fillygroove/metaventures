function generatePanels(comic) {
	let comicInfo = {
		dir: null, 
		howLong: null, 
		title: null, 
		desc: null,
		extension: 'jpg'
	};
	switch (comic) { // Done in order of release
		case "choose-av":
			comicInfo.dir = 'av/choose';
			comicInfo.howLong = 14;
			comicInfo.title = 'Choose your AV comic!';
			comicInfo.desc = 'Original Unfiltered Content';
			comicInfo.extension = 'png';
			break;
		case "1":
			comicInfo.howLong = 4;
			comicInfo.title = 'AV-1: The Pilot';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> goes to fight his first enemy and nemesis, <a href="../wiki/index.html?p=archie" class="n">Archie</a></a>.';
			break;
		case "2":
			comicInfo.howLong = 4;
			comicInfo.title = 'AV-2: Dr. Lakys\' Electric Boogaloo';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> goes to fight mad <a href="../wiki/index.html?p=lakys" class="n">Lakys</a> and his annoying pylons.';
			break;
		case "3":
			comicInfo.howLong = 6;
			comicInfo.title = 'AV-3: Nutstradamnus Rumbel';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> attempts to slay the Notorious Gold Golem <a href="../wiki/index.html?p=nutstradamnus" class="n">Nutstradamnus</a> in its long horribly worded battle.';
			break;
		case "4":
			comicInfo.howLong = 3;
			comicInfo.title = 'AV-4: ARCHIE STRYKSE BAK!1!';
			comicInfo.desc = '<a href="../wiki/index.html?p=archie" class="n">Archie</a> strikes back at our Hero with his OWN Meme.';
			break;
		case "5":
			comicInfo.howLong = 9;
			comicInfo.title = 'AV-5: RoYEEEAL Shimmy Shammy';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> enters the Arena where he has to best Gladiator Champion <a href="../wiki/index.html?p=royale" class="n">Royale</a> to escape.';
			break;
		case "6":
			comicInfo.howLong = 22;
			comicInfo.title = 'AV-6: Future Fails';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> comes back from the dead in the future and tries to get revenge on <a href="../wiki/index.html?p=archie" class="n">Archie</a>.';
			break;
		case "7":
			comicInfo.howLong = 35;
			comicInfo.title = 'AV-7: In The Shadow of the Perpatrator';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> and <a href="../wiki/index.html?p=lakys" class="n">Lakys</a> are forced to team up after a giant <a href="../wiki/index.html?p=perpahedron" class="n">Perpahedron</a> Satellite is about to hit <a href="../wiki/index.html?p=ert" class="y">Ert</a>.';
			break;
		case "8":
			comicInfo.howLong = 36;
			comicInfo.title = 'AV-8: Tropical Trouble';
			comicInfo.desc = 'In this rather short eposode: <a href="../wiki/index.html?p=aero" class="y">Aero</a>, <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>, and <a href="../wiki/index.html?p=archie" class="n">Archie</a> get stuck on an island after their plane blows up. watch as they struggle to survive. hah. idiots.';
			break;
		case "9":
			comicInfo.howLong = 34;
			comicInfo.title = 'AV-9: Group Lunatics 100';
			comicInfo.desc = 'With the Tower of Gladii out of money, <a href="../wiki/index.html?p=aero" class="y">Aero</a>, <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>, <a href="../wiki/index.html?p=archie" class="n">Archie</a>, and <a href="../wiki/index.html?p=aposteel" class="n">Aposteel</a> go to get wacky jobs to pay for the abandoned tower.';
			break;
		case "10":
			comicInfo.howLong = 73;
			comicInfo.title = 'AV-10: Flat Line';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> goes to the hospital after an incident and finds out that it isnt as it seems. porkchops included.';
			break;
		case "10.5":
			comicInfo.howLong = 53;
			comicInfo.title = 'AV-10.5: Over The Rainbow';
			comicInfo.desc = 'We tune in to our favorite cartoon characters in tough pickle.';
			break;
		case "h":
			comicInfo.howLong = 84;
			comicInfo.title = 'AV: Halloween Edition';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> and the gang go to a halloween party, but whos gonna attack them now?  Find out in this wierdly long adventure! SPOOKE!';
			break;
		case "11":
			comicInfo.howLong = 106;
			comicInfo.title = 'AV-11: Code Red';
			comicInfo.desc = 'Something terribly wrong has happened in Dr. <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>\'s lab. Can the Aeroventures Crew stop this new menace?';
			break;
		case "12":
			comicInfo.howLong = 2;
			comicInfo.title = 'AV-12: Nutty Business';
			comicInfo.desc = 'A large two part Aeroventure where the Aeroventures crew meet up with Nutstradamnus once more...';
			break;
		case "12-1":
			comicInfo.howLong = 110;
			comicInfo.title = 'AV-12: Nutty Business, Part 1';
			comicInfo.desc = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> and friends meet an unexpected foe.';
			comicInfo.dir = 'av/12/12-1';
			break;
		case "dk":
			comicInfo.howLong = 25;
			comicInfo.title = 'Secret: Domakav Rap';
			comicInfo.desc = 'You asked for this.';
			break;
		case "brooo":
			comicInfo.howLong = 4;
			comicInfo.title = 'Secret: Broventures';
			comicInfo.desc = 'We are proud to present the comic that we put all of our passion into. For years we toil on this masterpiece and now it\'s finally out: BROVENTURES!';
			break;
		case "nine":
			comicInfo.howLong = 12;
			comicInfo.title = 'Secret: Nineventures';
			comicInfo.desc = '"Nineventures" contains every ninth panel from every aeroventure to make some.. tangible kind of story. More panels are sure to be added after more comics are made.';
			break;
		case "trigger":
			comicInfo.howLong = 1;
			comicInfo.title = 'Secret: Trigger Fish';
			comicInfo.desc = 'bro you just posted cringe';
			break;
		case "pn":
			comicInfo.howLong = 1;
			comicInfo.title = 'Secret: Panel Number';
			comicInfo.desc = 'Panel Number';
			break;
		default:
			window.location = 'index.html?c=choose-av';
			break;
	}

	if (comicInfo.dir == null) {
		let folder;
		if (comicInfo.title.includes('AV')) folder = 'av';
		if (comicInfo.title.includes('Secret')) folder = 'secrets';
		comicInfo.dir = `${folder}/${comic}`;
	}

	let avThin = document.getElementsByClassName('av-thin')[0];
	let slideshow = document.createElement('div');
	slideshow.className = 'slideshow-container';
	
	let slideTitle = document.createElement('div');
	slideTitle.className = 'comic-title';
	slideTitle.innerHTML = comicInfo.title;
	avThin.append(slideTitle);

	for (let i = 1; i < comicInfo.howLong + 1; i++) {
		let slides = document.createElement('div');
		slides.style = 'background-color: #555555;';
		slides.className = 'slides';
		
		let number = document.createElement('div');
		number.className = 'numbertext';
		number.innerHTML = `${i} / ${comicInfo.howLong}`;
		
		let panels = document.createElement('img');
		panels.src = `./panels/${comicInfo.dir}/${i}.${comicInfo.extension}`;
		panels.style = 'max-height: 23em; height: 23em; text-align: center; display: flex; margin: 0 auto 0 50%; transform: translateX(-50%); background-color: #555555;';
 
		slides.append(number);
		
		function appendPanel(link) {
			let panelLink = document.createElement('a');
			panelLink.href = link;
						
			panelLink.append(panels);
			slides.append(panelLink);
		}
		
		if (comic == '7' && i == 10) appendPanel('../wiki/index.html?p=dino'); // Dinosaurs wiki page
		else if (comic == '8' && i == 7) appendPanel('index.html?c=trigger'); // Trigger Fish
		else if (comic == '11' && i == 44) appendPanel('index.html?c=brooo'); // Broventures
		else if (comic == '12' && i == 1) appendPanel(`index.html?c=12-${i}`);
		else if (comic == '11' && i == 8) { // Code Red explanation loop
			let panelLink = document.createElement('a');
			panelLink.style = 'cursor: pointer;';
			panelLink.onclick = () => {
				currentSlide(3);
			};
			
			panelLink.append(panels);
			slides.append(panelLink);
		} else if (comic == 'choose-av') {
			let episode = String(i);
			switch (i) {
				case 11:
					episode = '10.5';
					break;
				case 12:
					episode = 'h';
					break;
				case 13:
					episode = '11';
					break;
				case 14:
					episode = '12';
					break;
			}
			
			appendPanel(`index.html?c=${episode}`);
		}
		else slides.append(panels);
		
		if (comic == 'nine') {
			let caption = document.createElement('div');
			caption.style = 'text-align: center; background-color: #555555;';
			switch (i) {
				case 1:
					caption.innerHTML = 'Aero looks upon a memory of a deceased Archie, someone who\'s been rumored to be coming back in recent times...';
					break;
				case 2:
					caption.innerHTML = 'Aero seeks his old rival, but newfound partner, Archie. Had he forgotten that he must be present in order for a mafia war to take place? He hastily scurries around the room in an attempt to find his lost partner.';
					break;
				case 3:
					caption.innerHTML = 'His old enemy, Lakys remarks on Aero\'s persistence. Lakys sees the focus of a true reeg in Aero. Perhaps both of them share a similair goal..?';
					break;
				case 4:
					caption.innerHTML = 'Lakys suddenly grows suspicious as he seems to remember the enviroment both of them are currently standing on with their own two stubs! The Island of No Escape? A memory shakes and wriggles in Lakys\'s brain, attempting to find clarification before...';
					break;
				case 5:
					caption.innerHTML = '..Mcfrownies? This was odd, had he been transported to somewhere else via some anomalous object, some.. kind of witchery? Lakys\' sees a sweat drop from his face as the familiar cashier in the back welcomes him to enjoy one of their burgers, something the resturant is praised for. Lakys sighs; Might as well.';
					break;
				case 6:
					caption.innerHTML = 'But it was not! Once the Cashier has stated the resturants menu, Lakys immediately recognizes the monotone voice of his short-time ally, Aero! Lakys is at a lost for words! How did Aero do this??';
					break;
				case 7:
					caption.innerHTML = 'Some familiar fellows seem quick to abscond the area, which has the aura of a fight looming. Looming hard! Trivy gives one last word of wisdom before fleeing the premises! What will happen next??';
					break;
				case 8:
					caption.innerHTML = 'As lakys gets battle-ready, boot on, duck placed, and armed to the stub, he cant help but notice Aero\'s lack of common decency.';
					break;
				case 9:
					caption.innerHTML = 'THE NINTH PANEL OF "NINEVENTURES" HAS BEEN REMOVED</br>FURTHER INVESTIGATIONS HAVE BEEN TERMINATED UNDER ORDER GAMMA-52OXY</br>THE FOLLOWING FILM SHALL CONTINUE AS INTENDED.';
					break;
				case 10:
					caption.innerHTML = '"Whatever." Lakys says, turning on his machine that he was SURE would work to make the Lacii army he\'s always dreamed of! Hopefully it\'ll work again, as Aero seems to be ready to battle.';
					break;
				case 11:
					caption.innerHTML = 'Aero was somewhat late to the prepare of war. He scrambles on the desk of a nearby resturant in order to obtain some sort of energy that not even regular Reegs should use! Meanwhile, some familiar faces farm XP from a bear person. Perhaps Aero should do the same...?';
					break;
				case 12:
					caption.innerHTML = 'As Lakys looks on to what Aero\'s ignoring, Lacus questions everyone\'s safety...';
					break;
			}
			slides.append(caption);
		} else if (comic == "brooo" && i == 4) {
			let caption = document.createElement('div');
			caption.style = 'text-align: center; background-color: #555555;'
			caption.innerHTML = 'The finale for broventures has come, and i can tell you its been an amazing journey. Even after the 5 movies and 127 brands of clothes based on this series, i cant help but still love how it came out. Thanks to all of your increasing support i was finally able to make a sufficient ending to the series that touched our hearts as children, and now to the next generation. Do i have any regrets about closing off this wonderful series for good? No, it was a perfect run that i dont think even Einstein couldve finished off better. I may be shedding a tear right now about letting this series go, but i know it would be forever perfect in our minds, and in this archive. Thank you all who have stuck with me on this ride, we\'ve worked tirelessly on these broventures. I dont know what will happen next, but i\'m glad i was able to be part of this epoch in history.';
			slides.append(caption);
		} else if (comic == 'choose-av') {
			let caption = document.createElement('div');
			caption.style = 'text-align: center; background-color: #555555;';
			switch (i) {
				case 1:
					caption.innerHTML = 'Aeroventures 1: The Pilot';
					break;
				case 2:
					caption.innerHTML = 'Aeroventures 2: Dr. Lakys\' Electric Boogaloo';
					break;
				case 3:
					caption.innerHTML = 'Aeroventures 3: Nutstradamnus Rumbel';
					break;
				case 4:
					caption.innerHTML = 'Aeroventures 4: <a href="../wiki/index.html?p=shrine">ARCHIE STRYKSE BAK!1!</a>';
					break;
				case 5:
					caption.innerHTML = 'Aeroventures 5: RoYEEEAL Shimmy Shammy';
					break;
				case 6:
					caption.innerHTML = 'Aeroventures 6: Future Fails';
					break;
				case 7:
					caption.innerHTML = 'Aeroventures 7: In The Shadow of the Perpatrator';
					break;
				case 8:
					caption.innerHTML = 'Aeroventures 8: Tropical Trouble';
					break;
				case 9:
					caption.innerHTML = 'Aeroventures 9: Group Lunatics 100';
					break;
				case 10:
					caption.innerHTML = 'Aeroventures 10: Flat Line';
					break;
				case 11:
					caption.innerHTML = 'Aeroventures 10.5: Over The Rainbow';
					break;
				case 12:
					caption.innerHTML = 'Aeroventures: Halloween Edition';
					break;
				case 13:
					caption.innerHTML = 'Aeroventures 11: Code Red';
					break;
				case 14:
					caption.innerHTML = 'Aeroventures 12: Nutty Business';
					break;
			}
			slides.append(caption);
		} else if (comic == '12') {
			let caption = document.createElement('div');
			caption.style = 'text-align: center; background-color: #555555;';
			switch (i) {
				case 1:
					caption.innerHTML = 'Aeroventures 12, Part 1';
					break;
				case 2:
					caption.innerHTML = 'Aeroventures 12, Part 2 (Coming soon! (for real this time))';
					break;
			}
			slides.append(caption);
		}
		
		slideshow.append(slides);
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
	slideText.style = 'text-align: center; background-color: #555555; height: 2em;';
	
	slideLabel = document.createElement('label');
	slideLabel.style = 'background-color: #555555; line-height: 3.5em;';
	slideLabel.innerHTML = 'Panel Number: ';
		
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

	avThin.append(slideshow, desc);
}

let comic = new URLSearchParams(window.location.search);
comic = comic.get('c')
generatePanels(comic);

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
}

function verify(slide) {
	let slides = document.getElementsByClassName('slides');

	if (comic == '9' && slide == '999') { // Nineventures Easter Egg
		window.location.href = 'index.html?c=nine';
	} else if (comic == 'nine' && slideIndex == 9 && (slide == '9' || slide == 'nine')) { // Metanineventures Easter Egg
		window.location.href = '../wiki/index.html?p=nine';
	} else if (slide == 'Panel Number') {  // Panel Number Easter Egg
		window.location.href = 'index.html?c=pn';
	} else if (!isNaN(slide) && Math.floor(slide) != slide) { // Panel Corruption Easter Egg
		if (comic == '10.5' || comic == 'trigger' || comic == 'choose-av') {
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
