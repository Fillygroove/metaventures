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

if (!comicList.norm.includes(comic)) {
	comic = 'choose';
	window.location.href = '?c=choose';
}

if (window.localStorage.pass == undefined) window.localStorage.pass = 'false'; 

addScript(`./pages/${comic}.js`);
addScript('./pages/CONSTRUCTOR.js');
