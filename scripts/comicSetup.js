let comic = new URLSearchParams(window.location.search);
comic = comic.get('c');

function panelSetup(howLong, extension) {
	comicInfo.panels = [];
	for (let i = 0; i < howLong; i++) {
		comicInfo.panels.push({
			panel: `${i + 1}.${extension}`
		});
	}
}

addScript(`./pages/${comic}.js`);
addScript('./pages/CONSTRUCTOR.js');
