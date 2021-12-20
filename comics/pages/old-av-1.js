let comicInfo = {
	title: 'AV-1: The Pilot',
	desc: 'Aero goes to fight his first enemy and nemesis, Archie.',
	folder: 'old-av/av-1/',
	background: 'bg-av.png',
	rewindTo: 'old-av-choose',
	corruptable: true,
	fullscreen: true
};

panelSetup(4, 'jpg');

comicInfo.panels[1].caption = 'In this magestic panel, Rodney dies.';
