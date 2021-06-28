let avThin = document.createElement('div');

let lineGuideDiv = document.createElement('div');
lineGuideDiv.className = 'lineguide';

let dropdownDiv = document.createElement('div');
dropdownDiv.className = 'topbar';

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
			comicDir = './';
			wikiDir = './';
			titleDir = './';
			pageName = 'Main';
			break;
		case 'comic':
			comicDir = '../';
			wikiDir = '../';
			titleDir = '../';
			pageName = 'Comics';
			break;
		case 'wiki':
			comicDir = '../';
			wikiDir = '../';
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
	preferenceMenuLine.style.margin = 0;

	let preferenceMenuHeader = document.createElement('h2')
	preferenceMenuHeader.innerHTML = `Prefe<a class="preference-secret" href="${comicDir}?c=dk">r</a>ences`;

	preferenceMenuDiv.append(preferenceMenuHeader, preferenceMenuLine);

	function addPreferenceCategory(input) {
		let preference = document.createElement('div');
		preference.className = 'preference-collapse-div';
	
		preferenceHeader = document.createElement('h3');
		preferenceHeader.innerHTML = input.name;
		preferenceHeader.className = 'preference-collapse-closed';
		preferenceHeader.id = input.id;

		let preferenceInner = document.createElement('div');
		preferenceInner.className = 'preference-inner';
		preferenceInner.style.height = '0px';

		function addPreference(input) {
			let checkDiv = document.createElement('div');
			checkDiv.title = input.description;
		
			let checkLabel = document.createElement('label');
			checkLabel.innerHTML = input.title;
			checkLabel.htmlFor = input.id;
		
			checkDiv.append(checkLabel);

			if (input.dropdownValues != undefined) {
				let checkSelect = document.createElement('select');
				checkSelect.name = input.id;
				checkSelect.id = input.id;
				
				for (let i = 0; i < Object.keys(input.dropdownValues).length; i++) {
					let checkSelectOption = document.createElement('option');
					checkSelectOption.innerHTML = Object.values(input.dropdownValues)[i];
					checkSelectOption.value = Object.keys(input.dropdownValues)[i];
					checkSelect.append(checkSelectOption);
				}

				checkSelect.onchange = () => {
					input.onclick({checkSelect: document.getElementById(input.id)});
				}

				checkSelect.value = window.localStorage.theme;

				checkDiv.append(checkSelect);
			} else {
				let check = document.createElement('input');

				if (input.internalValue == 'true') check.checked = true;
				check.type = 'checkbox';
				check.id = input.id;
				check.name = input.id;

				checkDiv.onclick = () => {
					input.onclick({check});
				}

				checkDiv.append(check);
			}

			preferenceInner.append(checkDiv);
		}

		if (input.options != undefined) {
			for (let i = 0; i < input.options.length; i++) addPreference(input.options[i]);
		}

		preferenceHeader.onclick = () => {
			if (preferenceInner.style.height != '0px') {
				document.getElementById(input.id).className = 'preference-collapse-closed';
				preferenceInner.style.height = '0px';
			} else {
				document.getElementById(input.id).className = 'preference-collapse-opened';
				preferenceInner.style.height = `${28 * input.options.length}px`;
			}
		};

		if (input.internalValue == undefined) input.internalValue = input.default;

		preference.append(preferenceHeader, preferenceInner);	
		preferenceMenuDiv.append(preference);	
	}

	addPreferenceCategory({
		name: 'General',
		id: 'general',
		options: [{
			title: 'Theme',
			id: 'theme',
			description: 'Wearing tinted glasses for cheap.',
			internalValue: window.localStorage.theme,
			default: 'default',
			dropdownValues: {
				default: 'Default',
				superdark: 'Super Dark',
				cherryBlossom: 'Cherry Blossom',
				the: 'The',
				abyss: 'Abyss',
				sunset: 'Sunset (Bright)',
				nyork: 'Nyork'
			},
			onclick: function(input) {
				window.localStorage.theme = input.checkSelect.value;
				updateTheme(window.localStorage.theme);
			}
		}]
	});

	addPreferenceCategory({
		name: 'The Comics',
		id: 'comics',
		options: [{
			title: 'Speedrun Mode',
			id: 'speedrun',
			description: 'For when your cousins\' MV-related birthday is tomorrow.',
			internalValue: window.localStorage.speedrun,
			default: false,
			onclick: function(input) {
				window.localStorage.speedrun = input.check.checked;
				if (page == 'comic') {
					nextButton.className = window.localStorage.speedrun == 'true' ? (speedrunFinished ? 'comic-fast-next' : 'comic-next') : 'comic-next';
					prevButton.className = window.localStorage.speedrun == 'true' ? 'comic-fast-prev' : 'comic-prev';
					slideText.style.visibility = window.localStorage.speedrun == 'true' ? 'hidden' : 'visible';
					slideSpeedText.style.visibility = window.localStorage.speedrun == 'true' ? 'visible' : 'hidden';
					if (speedrunFinished) currentSlide(slides.length);
					else currentSlide(1);
				}
			}
		}]
	});

	addPreferenceCategory({
		name: 'Accessibility',
		id: 'access',
		options: [{
			title: 'Line Guide',
			id: 'lineGuide',
			description: 'Adds a line guide for people who have a hard time reading.',
			internalValue: window.localStorage.lineGuide,
			default: false,
			onclick: function(input) {
				window.localStorage.lineGuide = input.check.checked;
				if (window.localStorage.lineGuide == 'false') lineGuideDiv.style.top = '100%';
			}
		}, {
			title: 'Line Height',
			id: 'lineHeight',
			description: 'Adds extra space between lines for people who have a hard time reading.',
			internalValue: window.localStorage.lineHeight,
			default: false,
			onclick: function(input) {
				window.localStorage.lineHeight = input.check.checked;
				
				document.body.className = 'transition';
	
				if (window.localStorage.lineHeight == 'false') {
					document.documentElement.style.setProperty('--lineheight', 1.5);
				}
	
				if (window.localStorage.lineHeight == 'true') {
					document.documentElement.style.setProperty('--lineheight', 3);
				}
			}
		}]
	});

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
	if (window.localStorage.speedrun == undefined) window.localStorage.speedrun = 'false';

	dropdownDiv.append(preferenceMenuButton);

	let mainAVIMGLink = document.createElement('a');
	mainAVIMGLink.href = titleDir;

	let mainAVIMG = document.createElement('img');
	mainAVIMG.src = `${titleDir}/images/top-bar.png`;
	mainAVIMG.className = 'bar-image';
	mainAVIMGLink.append(mainAVIMG);
	dropdownDiv.append(mainAVIMGLink);


	makeButton({
		html: 'The Comics', 
		color: 'aero-blue', 
		link: `${comicDir}comics/?c=choose`
	});
	makeButton({
		html: 'The Wiki', 
		color: 'nyork-green', 
		link: `${wikiDir}wiki/?p=main`
	});
	makeButton({
		html: 'The Discord', 
		color: 'pon-pink', 
		link: 'https://discord.gg/xxRvYERs48'
	});
		
	document.body.append(preferenceMenuDiv, dropdownDiv, avThin, lineGuideDiv);
	
	addScript(`${titleDir}scripts/pageList.js`);
	addScript(`${titleDir}scripts/themeSetup.js`);
	addScript(`${titleDir}scripts/${page}Setup.js`);
}

window.addEventListener('mousedown', mouseInfo => {	
	if (window.localStorage.lineGuide == 'true') {		
		lineGuideDiv.style.top = `${mouseInfo.clientY}px`;
		lineGuideShown = true;
	}
});
