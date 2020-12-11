function makePage(page) {	
	let comicDir, wikiDir, titleDir;
	switch (page) {
		case 'main':
			comicDir = './comics/';
			wikiDir = './wiki/';
			titleDir = './';
			break;
		case 'comic':
			comicDir = './';
			wikiDir = '../wiki/';
			titleDir = '../';
			break;
		case 'wiki':
			comicDir = '../comics/';
			wikiDir = './';
			titleDir = '../';
			break;
	}

	let metaCharset = document.createElement('meta');
	metaCharset.charset = "utf-8";
	
	let metaName = document.createElement('meta');
	metaName.content = "Aeroventures is a comic series that follows the adventures of Aero, Archie, Lakys, Aposteel, where they travel around and just cause general chaos, whether intentional or not!";
	metaName.name = "description";
	
	let metaTitle = document.createElement('title');
	metaTitle.innerHTML = 'Aeroventures!';
	
	let metaFavicon = document.createElement('link');
	metaFavicon.rel = 'icon';
	metaFavicon.type = 'image/png';
	metaFavicon.href = `${titleDir}favicon.png`;
	
	let metaFont = document.createElement('link');
	metaFont.rel = "stylesheet";
	metaFont.href = "https://fonts.googleapis.com/css?family=Ubuntu:400,700";
	
	let metaCss = document.createElement('link');
	metaCss.rel = "stylesheet";
	metaCss.href = `${titleDir}index.css`;
	
	document.head.append(metaCharset, metaName, metaTitle, metaFavicon, metaFont, metaCss);

	// MAIN
	
	let mainBody = document.getElementsByTagName('body')[0];
	
	let mainAVThin = document.createElement('div');
	mainAVThin.className = 'av-thin';

	
	let mainAVTitle = document.createElement('div');
	mainAVTitle.className = 'aeroventures-title';
	if (page == "wiki") {
		mainAVTitle.innerHTML = `<a href="${titleDir}index.html" id="aeroventures-title">Aeroventu</a><a href="../comics/index.html?c=dk" id="aeroventures-title">r</a><a href="${titleDir}index.html" id="aeroventures-title">es!</a>`;
	} else {
		mainAVTitle.innerHTML = `<a href="${titleDir}index.html" id="aeroventures-title">Aeroventures!</a>`;
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
	
	switch (page) {
		case 'main':
			let mainH1 = document.createElement('h1');
			mainH1.style = "font-family: Ubuntu;";
			mainH1.innerHTML = "Aeroventures!";
			
			let lineBreak = document.createElement('hr');
			
			let mainParagraph = document.createElement('p');
			mainParagraph.innerHTML = 'Aeroventures is a comic series that follows the adventures of Aero, Archie, Lakys, Aposteel, where they travel around and just cause general chaos, whether intentional or not.';
			
			let mainBreak1 = document.createElement('br');
			let mainBreak2 = document.createElement('br');
			
			mainAVThin.append(mainH1, lineBreak, mainParagraph, mainBreak1, mainBreak2);
			break;
		default:
			scriptLoader = document.createElement('script');
			scriptLoader.src = `../scripts/${page}Setup.js`;
			mainAVThin.append(scriptLoader);
			break;
	}
	
	mainBody.append(mainAVThin);
}
