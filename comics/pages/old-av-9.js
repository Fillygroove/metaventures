let comicInfo = {
	title: 'AV-9: Group Lunatics 100',
	desc: 'With the Tower of Gladii out of money, Aero, Lakys, Archie, and Aposteel go to get wacky jobs to pay for the abandoned tower.',
	folder: 'old-av/av-9/',
	background: 'bg-av.png',
	rewindTo: 'old-av-choose',
	corruptable: true,
	verify: (input) => {
		if (input.slide == '999') {
			window.location.href = '?c=nine';
		};
	},
	fullscreen: true
};

panelSetup(34, 'jpg');
