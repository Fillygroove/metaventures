let comicInfo = {
	title: 'AV-9: Group Lunatics 100',
	desc: 'With the Tower of Gladii out of money, <a href="../wiki/?p=aero">Aero</a>, <a href="../wiki/?p=lakys">Lakys</a>, <a href="../wiki/?p=archie">Archie</a>, and <a href="../wiki/?p=aposteel">Aposteel</a> go to get wacky jobs to pay for the abandoned tower.',
	folder: 'old-av/av-9/',
	background: 'bg-av.png',
	rewindTo: 'old-av-choose',
	corruptable: true,
	verify: (input) => {
		console.log(input);
		if (input.slide == '999') {
			window.location.href = '?c=nine';
		};
	}
};

panelSetup(34, 'jpg');
