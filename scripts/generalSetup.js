let pageList = ['ert', 'the', 'doug', 'pilf', 'greme', 'mac', 'grene', 'credits', 'dwarf', 'hotsun', 'tackpenguin', 'aero', 'george', 'aeiou', 'taiberaque', 'coldsun', 'wop', 'shrine', 'halloween', 'main', 'dino', 'directions', 'm', 'nine', 'debug', 'pilfception', 'hazel', 'baeg', 'rodney', 'cea'];

let avThin = document.createElement('div');

let lineGuideDiv = document.createElement('div');
lineGuideDiv.className = 'lineguide';

let dropdownDiv = document.createElement('div');
dropdownDiv.className = 'topbar';

window.onscroll = () => {
	if (document.body.getBoundingClientRect().top / 56 < 1 && document.body.getBoundingClientRect().top / 56 > -3) {
		dropdownDiv.style.backgroundColor = `rgba(68, 68, 68, ${1 + document.body.getBoundingClientRect().top / 1792}`;
	} else if (document.body.getBoundingClientRect().top / 56 < -3) {
		dropdownDiv.style.backgroundColor = `rgba(68, 68, 68, 0.91)`;
	} else dropdownDiv.style.backgroundColor = `rgba(68, 68, 68, 1)`;
}

function correctLinks() {
	let pageLinks = document.getElementsByTagName('a');
	
	for (let i = 0; i < pageLinks.length; i++) {
		let pageLinkName = pageLinks[i].href.substring(pageLinks[i].href.indexOf('=') + 1, pageLinks[i].href.length);
		if (pageLinkName.includes('#')) pageLinkName = pageLinkName.substring(0, pageLinkName.indexOf('#'));
		if (pageLinks[i].id == '' && pageLinks[i].className == '') {
			if (pageList.includes(pageLinkName)) pageLinks[i].className = 'link';
			else pageLinks[i].className = 'no-link';
		}
	}
}

function makeButton(input) {
	let dropdown = document.createElement('a');
	dropdown.className = `topbar-button ${input.color}`;
	dropdown.innerHTML = input.html;
	if (input.style != undefined) dropdown.style = input.style;
	if (input.link != undefined) dropdown.href = input.link;
	dropdownDiv.append(dropdown);
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
	metaFavicon.href = `${titleDir}/images/favicon.png`;
	
	let metaCss = document.createElement('link');
	metaCss.rel = 'stylesheet';
	metaCss.href = `${titleDir}index.css`;
	
	document.head.append(metaTitle, metaFavicon, metaCss);
		
	avThin.className = 'av-thin';

	let preferenceMenuDiv = document.createElement('div');
	preferenceMenuDiv.className = 'preference-menu';

	let preferenceMenuIsOpen = false;

	let preferenceMenuLine = document.createElement('hr');

	let preferenceMenuHeader = document.createElement('h2')
	preferenceMenuHeader.innerHTML = `Prefe<a class="preference-secret" href="${comicDir}index.html?c=dk">r</a>ences`;
	
	let lineGuideCheckDiv = document.createElement('div');
	lineGuideCheckDiv.title = 'Adds a line guide for people who have a hard time reading.';
	lineGuideCheckDiv.onclick = () => {
		window.localStorage.lineGuide = lineGuideCheck.checked;
		if (window.localStorage.lineGuide == 'false') lineGuideDiv.style.top = '100%';
	}

	let lineGuideCheckLabel = document.createElement('label');
	lineGuideCheckLabel.innerHTML = 'Line Guide';
	lineGuideCheckLabel.htmlFor = 'lineGuide';

	let lineGuideCheck = document.createElement('input');
	if (window.localStorage.lineGuide == 'true') lineGuideCheck.checked = true;
	lineGuideCheck.type = 'checkbox';
	lineGuideCheck.id = 'lineGuide';
	lineGuideCheck.name = 'lineGuide';

	lineGuideCheckDiv.append(lineGuideCheckLabel, lineGuideCheck);

	let lineHeightCheckDiv = document.createElement('div');
	lineHeightCheckDiv.title = 'Adds extra space between lines for people who have a hard time reading.';
	lineHeightCheckDiv.onclick = () => {
		window.localStorage.lineHeight = lineHeightCheck.checked;
		document.body.className = 'transition';
		if (window.localStorage.lineHeight == 'false') {
			document.documentElement.style.setProperty('--lineheight', 1.5);
		}
		if (window.localStorage.lineHeight == 'true') {
			document.documentElement.style.setProperty('--lineheight', 3);
		}
	}

	let lineHeightCheckLabel = document.createElement('label');
	lineHeightCheckLabel.innerHTML = 'Line Height';
	lineHeightCheckLabel.htmlFor = 'lineHeight';

	let lineHeightCheck = document.createElement('input');
	if (window.localStorage.lineHeight == 'true') lineHeightCheck.checked = true;
	lineHeightCheck.type = 'checkbox';
	lineHeightCheck.id = 'lineHeight';
	lineHeightCheck.name = 'lineHeight';

	lineHeightCheckDiv.append(lineHeightCheckLabel, lineHeightCheck);

	preferenceMenuDiv.append(preferenceMenuHeader, preferenceMenuLine, lineGuideCheckDiv, lineHeightCheckDiv);

	let preferenceMenuButton = document.createElement('a');
	preferenceMenuButton.innerHTML = '&#9776;';
	preferenceMenuButton.className = 'preference-button';
	preferenceMenuButton.onclick = () => {
		if (preferenceMenuIsOpen) {
			preferenceMenuDiv.style.width = 0;
			preferenceMenuDiv.style.borderRightWidth = '0px';
			preferenceMenuIsOpen = false;
		} else {
			preferenceMenuDiv.style.width = '250px';
			preferenceMenuDiv.style.borderRightWidth = '1px';
			preferenceMenuIsOpen = true;
		}
	};

	if (window.localStorage.lineHeight == 'true') document.documentElement.style.setProperty('--lineheight', 3);

	dropdownDiv.append(preferenceMenuButton);

	let mainAVIMGLink = document.createElement('a');
	mainAVIMGLink.href = `${titleDir}index.html`;

	let mainAVIMG = document.createElement('img');
	mainAVIMG.src = `${titleDir}/images/top-bar.png`;
	mainAVIMG.className = 'bar-image';
	mainAVIMGLink.append(mainAVIMG);
	dropdownDiv.append(mainAVIMGLink);

	makeButton({
		html: 'The Comics', 
		color: 'aero-blue', 
		link: `${comicDir}index.html?c=choose`
	});
	makeButton({
		html: 'The Wiki', 
		color: 'nyork-green', 
		link: `${wikiDir}index.html?p=main`
	});
	makeButton({
		html: 'The Discord', 
		color: 'pon-pink', 
		link: 'https://discord.gg/xxRvYERs48'
	});
	
	addScript(`${titleDir}scripts/${page}Setup.js`);
			
	document.body.append(preferenceMenuDiv, dropdownDiv, avThin, lineGuideDiv);
}

window.addEventListener('mousedown', mouseInfo => {	
	if (window.localStorage.lineGuide == 'true') {		
		lineGuideDiv.style.top = `${mouseInfo.clientY}px`;
		lineGuideShown = true;
	}
});
