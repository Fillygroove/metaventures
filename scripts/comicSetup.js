let comic = new URLSearchParams(window.location.search);
comic = comic.get('c');

let avThin = document.getElementsByClassName('av-thin')[0];

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	avThin.append(pageScript);
}

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
