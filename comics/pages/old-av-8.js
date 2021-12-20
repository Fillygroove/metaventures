let comicInfo = {
	title: 'AV-8: Tropical Trouble',
	desc: 'In this rather short eposode: Aero, Lakys, and Archie get stuck on an island after their plane blows up. watch as they struggle to survive. hah. idiots.',
	folder: 'old-av/av-8/',
	background: 'bg-av.png',
	rewindTo: 'old-av-choose',
	corruptable: true,
	fullscreen: true
};

panelSetup(36, 'jpg');

comicInfo.panels[6].link = '?c=trigger';
