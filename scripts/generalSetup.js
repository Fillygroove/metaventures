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

	let metaCharset = document.createElement('meta');
	metaCharset.charset = "utf-8";
	
	let metaName = document.createElement('meta');
	metaName.content = "Metaventures is the name of a collective of ideas; Aeroventures, Polyventures, and more!";
	metaName.name = "description";
	
	let metaTitle = document.createElement('title');
	metaTitle.innerHTML = `${pageName} - Metaventures`;
	
	let metaFavicon = document.createElement('link');
	metaFavicon.rel = 'icon';
	metaFavicon.type = 'image/png';
	metaFavicon.href = `${titleDir}favicon.png`;
	
	let metaCss = document.createElement('link');
	metaCss.rel = "stylesheet";
	metaCss.href = `${titleDir}index.css`;
	
	document.head.append(metaCharset, metaName, metaTitle, metaFavicon, metaCss);
	
	let mainBody = document.getElementsByTagName('body')[0];
	
	let mainAVThin = document.createElement('div');
	mainAVThin.className = 'av-thin';

	let mainAVTitle = document.createElement('div');
	mainAVTitle.className = 'aeroventures-title';
	if (page == "wiki") {
		mainAVTitle.innerHTML = `<a href="${titleDir}index.html" id="aeroventures-title">Metaventu</a><a href="../comics/index.html?c=dk" id="aeroventures-title">r</a><a href="${titleDir}index.html" id="aeroventures-title">es!</a>`;
	} else {
		mainAVTitle.innerHTML = `<a href="${titleDir}index.html" id="aeroventures-title">Metaventures!</a>`;
	}
	
	mainAVThin.append(mainAVTitle);
		
	let dropdownDiv = document.createElement('div');
	dropdownDiv.className = 'w3-bar aero-dblue';
	
	let comicsDropdown = document.createElement('div');
	comicsDropdown.className = "w3-dropdown-hover w3-mobile aero-blue"
	comicsDropdown.href = "./wiki/index.html?p=main";
	
	let comicsButton = document.createElement('button');
	comicsButton.className = "w3-button";
	comicsButton.innerHTML = "The Comics &#9662;";
	
	let comicList = document.createElement('div');
	comicList.className = "w3-dropdown-content w3-bar-block aero-blue";
	
	for (let i = 1; i < 15; i++) {
		let comic = document.createElement('a');
		comic.className = "w3-bar-item w3-button w3-mobile";
		let comicLink, comicTitle;
		switch (i) {
			case 11:
				comicLink = "10.5";
				comicTitle = "10.5";
				break;
			case 12:
				comicLink = "h";
				comicTitle = "Halloween Edition";
				break;
			case 13:
				comicLink = "11";
				comicTitle = "11";
				break;
			case 14:
				comicLink = "12-1";
				comicTitle = "12, Part 1";
				break;
			default:
				comicLink = `${i}`;
				comicTitle = `${i}`;
				break;
		}
		comic.href = `${comicDir}index.html?c=${comicLink}`;
		comic.innerHTML = `Aeroventures ${comicTitle}`;
		comicList.append(comic);
	}
	
	comicsDropdown.append(comicsButton, comicList);
	
	let wikiTab = document.createElement('a');
	wikiTab.className = "w3-bar-item w3-button w3-mobile pon-pink";
	wikiTab.href = `${wikiDir}index.html?p=main`;
	wikiTab.innerHTML = "The Wiki";
	
	let discord = document.createElement('a');
	discord.className = "w3-bar-item w3-button w3-mobile nyork-green";
	discord.href = "https://discord.gg/xxRvYERs48";
	discord.innerHTML = "The Discord";

	dropdownDiv.append(comicsDropdown, wikiTab, discord);

	mainAVThin.append(dropdownDiv);
	
	scriptLoader = document.createElement('script');
	scriptLoader.src = (page == 'main' ? '' : '.') + `./scripts/${page}Setup.js`;
	mainAVThin.append(scriptLoader);
	
	mainBody.append(mainAVThin);
}
