function generatePanels(comic) {
	let dir = `./panels/${comic}/${comic}`;
	let length;
	let title;
	let description;
	switch (comic) { // Done in order of release
		case "1":
			length = 4;
			title = 'The Pilot';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> goes to fight his first enemy and nemesis, <a href="../wiki/index.html?p=archie" class="n">Archie</a></a>.';
			break;
		case "2":
			length = 4;
			title = 'Dr. Lakys\' Electric Boogaloo';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> goes to fight mad <a href="../wiki/index.html?p=lakys" class="n">Lakys</a> and his annoying pylons.';
			break;
		case "3":
			length = 6;
			title = 'Nutstradamnus Rumbel';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> attempts to slay the Notorious Gold Golem <a href="../wiki/index.html?p=nutstradamnus" class="n">Nutstradamnus</a> in its long horribly worded battle.';
			break;
		case "4":
			length = 3;
			title = 'ARCHIE STRYKSE BAK!1!';
			description = '<a href="../wiki/index.html?p=archie" class="n">Archie</a> strikes back at our Hero with his OWN Meme.';
			break;
		case "5":
			length = 9;
			title = 'RoYEEEAL Shimmy Shammy';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> enters the Arena where he has to best Gladiator Champion <a href="../wiki/index.html?p=royale" class="n">Royale</a> to escape.';
			break;
		case "6":
			length = 22;
			title = 'Future Fails';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> comes back from the dead in the future and tries to get revenge on <a href="../wiki/index.html?p=archie" class="n">Archie</a>.';
			break;
		case "7":
			length = 35;
			title = 'In The Shadow of the Perpatrator';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> and <a href="../wiki/index.html?p=lakys" class="n">Lakys</a> are forced to team up after a giant <a href="../wiki/index.html?p=perpahedron" class="n">Perpahedron</a> Satellite is about to hit <a href="../wiki/index.html?p=ert" class="y">Ert</a>.';
			break;
		case "8":
			length = 36;
			title = 'Tropical Trouble';
			description = 'In this rather short eposode: <a href="../wiki/index.html?p=aero" class="y">Aero</a>, <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>, and <a href="../wiki/index.html?p=archie" class="n">Archie</a> get stuck on an island after their plane blows up. watch as they struggle to survive. hah. idiots.';
			break;
		case "9":
			length = 34;
			title = 'Group Lunatics 100';
			description = 'With the Tower of Gladii out of money, <a href="../wiki/index.html?p=aero" class="y">Aero</a>, <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>, <a href="../wiki/index.html?p=archie" class="n">Archie</a>, and <a href="../wiki/index.html?p=aposteel" class="n">Aposteel</a> go to get wacky jobs to pay for the abandoned tower.';
			break;
		case "10":
			length = 73;
			title = 'Flat Line';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> goes to the hospital after an incident and finds out that it isnt as it seems. porkchops included.';
			break;
		case "10.5":
			length = 53;
			title = 'Over The Rainbow';
			description = 'We tune in to our favorite cartoon characters in tough pickle.';
			break;
		case "h":
			length = 84;
			title = 'Halloween Edition';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> and the gang go to a halloween party, but whos gonna attack them now?  Find out in this wierdly long adventure! SPOOKE!';
			dir = './panels/H/H';
			break;
		case "11":
			length = 106;
			title = 'Code Red';
			description = 'Something terribly wrong has happened in Dr. <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>\'s lab. Can the Aeroventures Crew stop this new menace?';
			break;
		case "12-1":
			length = 110;
			title = 'Nutty Business, Part 1';
			description = '<a href="../wiki/index.html?p=aero" class="y">Aero</a> and friends meet an unexpected foe.';
			dir = './panels/12-1/12';
			break;
		case "dk":
			length = 25;
			title = 'Domakav Rap';
			description = 'You asked for this.';
			break;
		case "brooo":
			length = 4;
			title = 'Broventures';
			description = 'We are proud to present the comic that we put all of our passion into. For years we toil on this masterpiece and now it\'s finally out: BROVENTURES!';
			break;
		case "nine":
			length = 12;
			title = 'Nineventures';
			description = '"Nineventures" contains every ninth panel from every aeroventure to make some.. tangible kind of story. More panels are sure to be added after more comics are made.';
			break;
		case "trigger":
			length = 1;
			title = 'Trigger Fish';
			description = 'bro you just posted cringe';
			break;
	}

	let avThin = document.getElementsByClassName('av-thin')[0];
	let slideshow = document.createElement('div');
	slideshow.className = 'slideshow-container';
	
	let slideTitle = document.createElement('div');
	slideTitle.className = 'comic-title';
	slideTitle.innerHTML = title;
	avThin.append(slideTitle);

	for (let i = 1; i < length + 1; i++) {
		let slides = document.createElement('div');
		slides.className = 'slides';
		
		let number = document.createElement('div');
		number.className = 'numbertext';
		number.innerHTML = `${i} / ${length}`;
		
		let panels = document.createElement('img');
		panels.src = `${dir}_${i}.jpg`;
		panels.style = "width: 100%";

		slides.append(number);
		
		if (comic == "7" && i == 10) { // Dinosaurs wiki page
			let panelLink = document.createElement('a');
			panelLink.href = "../wiki/index.html?p=dino";
			
			panelLink.append(panels);
			slides.append(panelLink);
		} else if (comic == "8" && i == 7) { // Trigger Fish
			let panelLink = document.createElement('a');
			panelLink.href = "index.html?c=trigger";
			
			panelLink.append(panels);
			slides.append(panelLink);
		} else if (comic == "11" && i == 8) { // Code Red explanation loop
			let panelLink = document.createElement('a');
			panelLink.onclick = () => {
				currentSlide(3);
			};
			
			panelLink.append(panels);
			slides.append(panelLink);
		} else if (comic == "11" && i == 44) { // Broventures
			let panelLink = document.createElement('a');
			panelLink.href = "index.html?c=brooo";
			
			panelLink.append(panels);
			slides.append(panelLink);
		} else slides.append(panels);
		
		if (comic == "nine") {
			let caption = document.createElement('div');
			caption.style = 'text-align: center; background-color: #555555;'
			switch (i) {
				case 1:
					caption.innerHTML = 'Aero looks upon a memory of a deceased Archie, someone who\'s been rumored to be coming back in recent times...'
					break;
				case 2:
					caption.innerHTML = 'Aero seeks his old rival, but newfound partner, Archie. Had he forgotten that he must be present in order for a mafia war to take place? He hastily scurries around the room in an attempt to find his lost partner.'
					break;
				case 3:
					caption.innerHTML = 'His old enemy, Lakys remarks on Aero\'s persistence. Lakys sees the focus of a true reeg in Aero. Perhaps both of them share a similair goal..?'
					break;
				case 4:
					caption.innerHTML = 'Lakys suddenly grows suspicious as he seems to remember the enviroment both of them are currently standing on with their own two stubs! The Island of No Escape? A memory shakes and wriggles in Lakys\'s brain, attempting to find clarification before...'
					break;
				case 5:
					caption.innerHTML = '..Mcfrownies? This was odd, had he been transported to somewhere else via some anomalous object, some.. kind of witchery? Lakys\' sees a sweat drop from his face as the familiar cashier in the back welcomes him to enjoy one of their burgers, something the resturant is praised for. Lakys sighs; Might as well.'
					break;
				case 6:
					caption.innerHTML = 'But it was not! Once the Cashier has stated the resturants menu, Lakys immediately recognizes the monotone voice of his short-time ally, Aero! Lakys is at a lost for words! How did Aero do this??'
					break;
				case 7:
					caption.innerHTML = 'Some familiar fellows seem quick to abscond the area, which has the aura of a fight looming. Looming hard! Trivy gives one last word of wisdom before fleeing the premises! What will happen next??'
					break;
				case 8:
					caption.innerHTML = 'As lakys gets battle-ready, boot on, duck placed, and armed to the stub, he cant help but notice Aero\'s lack of common decency.'
					break;
				case 9:
					caption.innerHTML = 'THE NINTH PANEL OF "NINEVENTURES" HAS BEEN REMOVED</br>FURTHER INVESTIGATIONS HAVE BEEN TERMINATED UNDER ORDER GAMMA-52OXY</br>THE FOLLOWING FILM SHALL CONTINUE AS INTENDED.'
					break;
				case 10:
					caption.innerHTML = '"Whatever." Lakys says, turning on his machine that he was SURE would work to make the Lacii army he\'s always dreamed of! Hopefully it\'ll work again, as Aero seems to be ready to battle.'
					break;
				case 11:
					caption.innerHTML = 'Aero was somewhat late to the prepare of war. He scrambles on the desk of a nearby resturant in order to obtain some sort of energy that not even regular Reegs should use! Meanwhile, some familiar faces farm XP from a bear person. Perhaps Aero should do the same...?'
					break;
				case 12:
					caption.innerHTML = 'As Lakys looks on to what Aero\'s ignoring, Lacus questions everyone\'s safety...'
					break;
			}
			slides.append(caption);
		} else if (comic == "brooo" && i == 4) {
			let caption = document.createElement('div');
			caption.style = 'text-align: center; background-color: #555555;'
			caption.innerHTML = 'The finale for broventures has come, and i can tell you its been an amazing journey. Even after the 5 movies and 127 brands of clothes based on this series, i cant help but still love how it came out. Thanks to all of your increasing support i was finally able to make a sufficient ending to the series that touched our hearts as children, and now to the next generation. Do i have any regrets about closing off this wonderful series for good? No, it was a perfect run that i dont think even Einstein couldve finished off better. I may be shedding a tear right now about letting this series go, but i know it would be forever perfect in our minds, and in this archive. Thank you all who have stuck with me on this ride, we\'ve worked tirelessly on these broventures. I dont know what will happen next, but i\'m glad i was able to be part of this epoch in history.';
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
	slideText.style = 'text-align: center; background-color: #555555; padding-top: 1em;';
	
	slideLabel = document.createElement('label');
	slideLabel.style = 'background-color: #555555;';
	slideLabel.innerHTML = 'Panel number: ';
		
	slideInput = document.createElement('input');
	slideInput.type = 'text';
	slideInput.id = 'panel';
	slideInput.name = 'panel';
	slideInput.style = "color: white;";
	slideInput.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.key === 'Enter') {
			verify(Number(slideInput.value));
		}
	});

	slideText.append(slideLabel, slideInput);

	slideshow.append(slideText, line, prevButton, nextButton);

	let desc = document.createElement('h4');
	
	desc.className = 'description';
	desc.innerHTML = description;

	avThin.append(slideshow, desc);
}

let comic = new URLSearchParams(window.location.search);
comic = comic.get('c')
if (comic == null) comic = "12-1";
generatePanels(comic);

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("slides");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}

function verify(slide) {
	let slides = document.getElementsByClassName("slides");

	if (comic == '9' && slide == '999') window.location.href = 'index.html?c=nine';

	if (!isNaN(slide)) {
		if (slide < slides.length + 1 && slide > 0) {
			currentSlide(slide);
		}
	}
}
