let comicInfo = {
	title: 'AV-11: Code Red',
	desc: 'Something terribly wrong has happened in Dr. <a href="../wiki/index.html?p=lakys">Lakys</a>\'s lab. Can the Aeroventures Crew stop this new menace?',
	folder: 'old-av/av-11/',
	background: 'bg-av.png',
	rewindTo: 'old-av-choose'
};

panelSetup(106, 'jpg');

comicInfo.panels[7].execute = (input) => {
	let panelLink = document.createElement('a');
	panelLink.style = 'cursor: pointer;';
	panelLink.onclick = () => {
		currentSlide(3);
	};
	
	panelLink.append(input.panel);
	input.slide.append(panelLink);
};
comicInfo.panels[43].link = 'index.html?c=brooo';
