function generatePanels(comic) {
	let dir = `./panels/${comic}/${comic}`;
	let length;
	let title;
	let description = 'Original unfiltered content.';
	switch (comic) { // Done in order of release
		case "1":
			length = 4;
			title = 'The Pilot';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> goes to fight his first enemy and nemesis, <a href="../wiki/index.html?p=archie" class="n">Archie</a></a>.';
			break;
		case "2":
			length = 4;
			title = 'Dr. Lakys\' Electric Boogaloo';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> goes to fight mad <a href="../wiki/index.html?p=lakys" class="n">Lakys</a> and his annoying pylons.';
			break;
		case "3":
			length = 6;
			title = 'Nutsradamnus Rumbel';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> attempts to slay the Notorious Gold Golem <a href="../wiki/index.html?p=nutstradamnus" class="n">Nutstradamnus</a> in its long horribly worded battle.';
			break;
		case "4":
			length = 3;
			title = 'ARCHIE STRYKSE BAK!1!';
			description = '<a href="../wiki/index.html?p=archie" class="n">Archie</a> strikes back at our Hero with his OWN Meme.';
			break;
		case "5":
			length = 9;
			title = 'RoYEEEAL Shimmy Shammy';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> enters the Arena where he has to best Gladiator Champion <a href="../wiki/index.html?p=royale" class="n">Royale</a> to escape.';
			break;
		case "6":
			length = 22;
			title = 'Future Fails';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> comes back from the dead in the future and tries to get revenge on <a href="../wiki/index.html?p=archie" class="n">Archie</a>.';
			break;
		case "7":
			length = 35;
			title = 'In The Shadow of the Perpatrator';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> and <a href="../wiki/index.html?p=lakys" class="n">Lakys</a> are forced to team up after a giant <a href="../wiki/index.html?p=perpahedron" class="n">Perpahedron</a> Satellite is about to hit <a href="../wiki/index.html?p=ert" class="y">Ert</a>.';
			break;
		case "8":
			length = 36;
			title = 'Tropical Trouble';
			description = 'In this rather short eposode: <a href="../wiki/index.html?p=aero" class="n">Aero</a>, <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>, and <a href="../wiki/index.html?p=archie" class="n">Archie</a> get stuck on an island after their plane blows up. watch as they struggle to survive. hah. idiots.';
			break;
		case "9":
			length = 34;
			title = 'Group Lunatics 100';
			description = 'With the Tower of Gladii out of money, <a href="../wiki/index.html?p=aero" class="n">Aero</a>, <a href="../wiki/index.html?p=lakys" class="n">Lakys</a>, <a href="../wiki/index.html?p=archie" class="n">Archie</a>, and <a href="../wiki/index.html?p=aposteel" class="n">Aposteel</a> go to get wacky jobs to pay for the abandoned tower.';
			break;
		case "10":
			length = 73;
			title = 'Flat Line';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> goes to the hospital after an incident and finds out that it isnt as it seems. porkchops included.';
			break;
		case "10.5":
			length = 53;
			title = 'Over The Rainbow';
			description = 'We tune in to our favorite cartoon characters in tough pickle.';
			break;
		case "h":
			length = 84;
			title = 'Halloween Edition';
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> and the gang go to a halloween party, but whos gonna attack them now?  Find out in this wierdly long adventure! SPOOKE!';
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
			description = '<a href="../wiki/index.html?p=aero" class="n">Aero</a> and friends meet an unexpected foe.';
			dir = './panels/12-1/12';
			break;
		case "dk":
			length = 25;
			description = 'You asked for this.';
			title = 'Domakav Rap';
			break;
	}
	
	let slideshow = document.getElementsByClassName('slideshow-container')[0];
	
	let slideTitle = document.createElement('div');
	slideTitle.className = 'comic-title';
	slideTitle.innerHTML = title;
	slideshow.append(slideTitle);

	for (let i = 1; i < length + 1; i++) {
		let slides = document.createElement('div');
		slides.className = 'slides fade';
		
		let number = document.createElement('div');
		number.className = 'numbertext';
		number.innerHTML = `${i} / ${length}`;
		
		let panels = document.createElement('img');
		panels.src = `${dir}_${i}.jpg`;
		panels.style = "width: 100%";

		
		slides.append(number);
		
		if (comic == 7 && i == 10) {
			let panelLink = document.createElement('a');
			panelLink.href = "../wiki/index.html?p=dino";
			
			panelLink.append(panels);
			slides.append(panelLink);
		} else slides.append(panels);
				
		slideshow.append(slides);
	}
	let line = document.createElement('hr');
	let desc = document.createElement('h4');
	
	desc.className = 'description';
	desc.innerHTML = description;
	
	slideshow.append(line);
	slideshow.append(desc);
}

let comic = new URLSearchParams(window.location.search);
comic = comic.get('c')
if (comic == null) comic = "12-1";
generatePanels(comic);
