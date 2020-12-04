function generatePanels(comic) {
	let dir = `./panels/${comic}/${comic}`;
	let length;
	let title;
	let description = 'Original unfiltered content.';
	switch (comic) { // Done in order of release
		case "1":
			length = 4;
			title = 'The Pilot';
			description = 'Aero goes to fight his first enemy and nemesis, Archie.';
			break;
		case "2":
			length = 4;
			title = 'Dr. Lacus\' Electric Boogaloo';
			description = 'Aero goes to fight mad Lacus and his annoying pylons.';
			break;
		case "3":
			length = 6;
			title = 'Nutsradamnus Rumbel';
			description = 'Aero attempts to slay the Notorious Gold Golem Nutsradamnus in its long horribly worded battle.';
			break;
		case "4":
			length = 3;
			title = 'Archie STRYKSE BAK!1!';
			description = 'Archie strikes back at our Hero with his OWN Meme.';
			break;
		case "5":
			length = 9;
			title = 'RoYEEEAL Shimmy Shammy';
			description = 'Aero enters the Arena where he has to best Gladiator Champion Royale to escape.';
			break;
		case "6":
			length = 22;
			title = 'Future Fails';
			description = 'Aero comes back from the dead in the future and tries to get revenge on Archie.';
			break;
		case "7":
			length = 35;
			title = 'In The Shadow of the Perpatrator';
			description = 'Aero and Lacus are forced to team up after a giant Perpahedron Satellite is about to hit earth.';
			break;
		case "8":
			length = 36;
			title = 'Tropical Trouble';
			description = 'In this rather short eposode: Aero, Lacus, and Archie get stuck on an island after their plane blows up. watch as they struggle to survive. hah. idiots.';
			break;
		case "9":
			length = 34;
			title = 'Group Lunatics 100';
			description = 'With the Tower of Gladii out of money, Aero, Lacus, Arkpeofet, and Aposteel go to get wacky jobs to pay for the abandoned tower.';
			break;
		case "10":
			length = 73;
			title = 'Flat Line';
			description = 'Aero goes to the hospital after an incident and finds out that it isnt as it seems. porkchops included.';
			break;
		case "10.5":
			length = 53;
			description = 'Over The Rainbow';
			description = 'We tune in to our favorite cartoon characters in tough pickle.';
			break;
		case "h":
			length = 84;
			title = 'Halloween Edition';
			description = 'Aero and the gang go to a halloween party, but whos gonna attack them now?  Find out in this wierdly long adventure! SPOOKE!';
			dir = './panels/H/H';
			break;
		case "11":
			length = 106;
			title = 'Code Red';
			description = 'Something terribly wrong has happened in Dr. Lacus\'s lab. Can the Aeroventures Crew stop this new menace?';
			break;
		case "12-1":
			length = 110;
			title = 'Nutty Business, Part 1';
			description = 'Aero and friends meet an unexpected foe.';
			dir = './panels/12-1/12';
			break;
		case "dk":
			length = 25;
			description = 'You asked for this.';
			title = 'Domakav Rap';
			break;
	}
	document.write(
		`<div class="comic-title">${title}</div>`
	);
	for (let i = 1; i < length + 1; i++) {
		document.write(`
			<div class="slides fade">
			<div class="numbertext">${i} / ${length}</div>
			<img src="${dir}_${i}.jpg" style="width:100%">
			</div>
		`);
	}
	document.write(`
		<hr>
		<h4 class = "description">${description}</h4>
	`);
}
