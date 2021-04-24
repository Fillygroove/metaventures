let pageList = ['ert', 'the', 'doug', 'pilf', 'greme', 'mac', 'grene', 'credits', 'dwarf', 'hotsun', 'tackpenguin', 'aero', 'george', 'aeiou', 'taiberaque', 'coldsun', 'wop', 'shrine', 'halloween', 'main', 'dino', 'directions', 'm', 'nine', 'debug', 'pilfception', 'hazel', 'baeg', 'rodney'];
let avThin = document.createElement('div');

function correctLinks() {
	let pageLinks = document.getElementsByTagName('a');
	
	for (let i = 0; i < pageLinks.length; i++) {
		let pageLinkName = pageLinks[i].href.substring(pageLinks[i].href.indexOf('=') + 1, pageLinks[i].href.length);
		if (pageLinkName.includes('#')) pageLinkName = pageLinkName.substring(0, pageLinkName.indexOf('#'));
		if (pageLinks[i].id == '' && pageLinks[i].className == '') {
			if (pageList.includes(pageLinkName)) pageLinks[i].className = 'y';
			else pageLinks[i].className = 'n';
		}
	}
}

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	avThin.append(pageScript);
}

function makePage(page) {
	let comicDir, wikiDir, titleDir, pageName;
	switch (page) {
		case 'main':
			comicDir = './comics/';
			wikiDir = './wiki/';
			titleDir = './';
			pageName = 'Main';
			break;
		case 'comic':
			comicDir = './';
			wikiDir = '../wiki/';
			titleDir = '../';
			pageName = 'Comics';
			break;
		case 'wiki':
			comicDir = '../comics/';
			wikiDir = './';
			titleDir = '../';
			pageName = 'Wiki';
			break;
	}
	
	let metaTitle = document.createElement('title');
	metaTitle.innerHTML = `${pageName} - Metaventures`;
	
	let metaFavicon = document.createElement('link');
	metaFavicon.rel = 'icon';
	metaFavicon.type = 'image/png';
	metaFavicon.href = `${titleDir}favicon.png`;
	
	let metaCss = document.createElement('link');
	metaCss.rel = 'stylesheet';
	metaCss.href = `${titleDir}index.css`;
	
	document.head.append(metaTitle, metaFavicon, metaCss);
		
	avThin.className = 'av-thin';

	let mainAVTitle = document.createElement('div');
	mainAVTitle.className = 'aeroventures-title';
	if (page == 'wiki') {
		mainAVTitle.innerHTML = `<a href='${titleDir}index.html' id='aeroventures-title'>Metaventu</a><a href='../comics/index.html?c=dk' id='aeroventures-title'>r</a><a href='${titleDir}index.html' id='aeroventures-title'>es!</a>`;
	} else {
		mainAVTitle.innerHTML = `<a href='${titleDir}index.html' id='aeroventures-title'>Metaventures!</a>`;
	}
	
	document.body.append(mainAVTitle);
	
	let dropdownDiv = document.createElement('div');
	dropdownDiv.className = 'w3-bar aero-dblue';
	
	function makeButton(html, color, link) {
		let dropdown = document.createElement('a');
		dropdown.className = `w3-bar-item w3-button w3-mobile ${color}`;
		dropdown.href = link;
		dropdown.innerHTML = html;
		dropdownDiv.append(dropdown);
	}

	makeButton('The Comics', 'aero-blue', `${comicDir}index.html?c=choose`);
	makeButton('The Wiki', 'pon-pink', `${wikiDir}index.html?p=main`);
	makeButton('The Discord', 'nyork-green', 'https://discord.gg/xxRvYERs48');

	avThin.append(dropdownDiv);
	
	addScript(`${titleDir}scripts/${page}Setup.js`);
	
	document.getElementsByTagName('body')[0].append(avThin);
}
