let comicInfo = {
	title: 'AV-7: In The Shadow of the Perpatrator',
	desc: 'Aero and Lakys are forced to team up after a giant Perpahedron Satellite is about to hit Ert.',
	folder: 'old-av/av-7/',
	background: 'bg-av.png',
	rewindTo: 'old-av-choose',
	corruptable: true,
	fullscreen: true
};

panelSetup(35, 'jpg');

comicInfo.panels[9].link = '../journal/?p=dino';
