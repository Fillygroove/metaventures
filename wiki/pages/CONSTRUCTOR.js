let pageList = ['ert', 'the', 'doug', 'pilf', 'greme', 'mac', 'grene', 'credits', 'dwarf', 'hotsun', 'tackpenguin', 'aero', 'george', 'aeiou', 'taiberaque', 'berry', 'coldsun', 'wop', 'shrine', 'halloween', 'main', 'dino', 'directions', 'm', 'nine', 'debug'];

let page;

if (typeof pageData == 'undefined' && pageName != 'CONSTRUCTOR') {
	let quoteNumber = Math.floor(Math.random() * 7);
	let quote;
	switch (quoteNumber) {
		case 0:
			quote = 'Maybe it was destroyed by <a href="index.html?p=wop">World of Pain</a>...';
			break;
		case 1:
			quote = 'Maybe it\'s in the <a href="index.html?p=taiberaque">Taiberaque</a> system...';
			break;
		case 2:
			quote = 'Maybe it got abducted by space clowns...';
			break;
		case 3:
			quote = 'Maybe <a href="index.html?p=aero">Aero</a> stole it\'s intestines...';
			break;
		case 4: // Made by Pixel Origin
			quote = 'Likely left to attend <a href="index.html?p=aero">Aero</a>\'s funeral...';
			break;
		case 5: // Made by PS3_33
			quote = 'Perhaps it\'s one of <a href="index.html?p=the">These</a> greatest mysteries...';
			break;
		case 6: // Made by PS3_33
			quote = 'Maybe <a href="index.html?p=aeiou">Aeiou</a> made it explode because of its awesomeness...';
			break;
	}
	page = {
		name: 'Oops, a tasty 404!',
		introText: ['This page doesn\'t seem to exist, sadly... ' + quote],
		endnav: 'chars planet'
	};
} else if (pageName == 'CONSTRUCTOR') {
	page = {
		name: 'SECRET: Construction.',
		introText: [
			'You think you\'re funny, don\'t you? You\'ve been looking at the source code and found a file called CONSTRUCTOR.js, and decided to look at it on the wiki. Needless to say, I\'m not exactly happy. You better be lucky I noticed this, cause you could\'ve really broken stuff otherwise. Get out of my sight, you <a href="index.html?p=doug">Doug</a>.'
		]
	};
} else page = pageData;

let article = document.getElementsByClassName('av-thin')[0];

let name = document.createElement('h1');
name.style = "font-family: Ubuntu;";
name.innerHTML = page.name;

let topLineBreak = document.createElement('hr');

article.append(name, topLineBreak);
	
if (page.warning != undefined) {
	function createWarning(warning) {
		let warningTable = document.createElement('table');
		
		warningTable.className = "navbox";
		warningTable.style = "width: 50%;";
		
		let warningCaption = document.createElement('caption');
		warningCaption.innerHTML = warning.caption;
		
		let warningBody = document.createElement('tbody');
		
		let warningData = document.createElement('td');
		let warningDiv = document.createElement('div');
		let warningIMG = document.createElement('img');
		
		warningIMG.alt = warning.image.file;
		warningIMG.src = `./images/${warning.image.file}`;
		warningIMG.width = warning.image.dims[0];
		warningIMG.height = warning.image.dims[1];
		warningIMG.style = "float: left;"
		
		warningP = document.createElement('p');
		warningP.innerHTML = warning.wormbs;
		
		warningDiv.append(warningIMG, warningP);
		
		warningData.append(warningDiv);
		
		warningBody.append(warningData);
		
		warningTable.append(warningCaption, warningBody);
		
		article.append(warningTable);
	}
	
	if (page.warning.includes('stub')) {
		createWarning({
			caption: 'This page is incomplete!',
			image: {
				file: 'stub.png',
				dims: [80, 80]
			},
			wormbs: 'Please be patient as Lakys finishes the War Maccine.'
		});
	}
	
	if (page.warning.includes('quality')) {
		createWarning({
			caption: 'Bro, this is quality',
			image: {
				file: 'bro.png',
				dims: [80, 80]
			},
			wormbs: 'You\'re looking at a high quality page. Please behold its beauty!'
		});
	}
	
	if (page.warning.includes('forbidden')) {
		createWarning({
			caption: 'You\'re looking at forbidden knowledge.',
			image: {
				file: 'the_first.png',
				dims: [80, 80]
			},
			wormbs: 'This information isn\'t accessable now.'
		});
	}
}

if (page.navbox != undefined) {
	let navbox = document.createElement('table');
	navbox.className = "infobox";
	navbox.style = "width: 22em";
	
	let caption = document.createElement('caption');
	caption.innerHTML = page.name;
			
	let navbody = document.createElement('tbody');
	
	let imagetr = document.createElement('tr');
	let imagetd = document.createElement('td');
	let imgnav = document.createElement('img');
	let capdiv = document.createElement('div');
	let capa = document.createElement('span');
	
	imagetd.colSpan = "2";
	imagetd.style = "text-align: center";

	imgnav.className = page.file[1];
	imgnav.alt = page.file;
	imgnav.src = `./images/${page.file[0]}`;
	imgnav.width = page.dims[0];
	imgnav.height = page.dims[1];
	
	capa.innerHTML = page.caption;
	
	capdiv.append(capa);
	
	imagetd.append(imgnav, capdiv);
	
	imagetr.append(imagetd);
	
	let headingtr = document.createElement('tr');
	let headingth = document.createElement('th');
	
	headingth.colSpan = "2";
	headingth.innerHTML = page.heading;
	
	headingtr.append(headingth);
	
	navbody.append(imagetr, headingtr);
	
	for (let i = 0; i < page.navbox.length; i++) {
		let navboxtr = document.createElement('tr');
		
		let navboxth = document.createElement('th');
		navboxth.scope = "row";
		navboxth.style = "max-width: 11em;";
		
		let navleftdiv = document.createElement('div');
		navleftdiv.style = "display: inline-block; padding: 0.1em 0; line-height: 1.2em;";
		navleftdiv.innerHTML = page.navbox[i].name;
		
		navboxth.append(navleftdiv);

		let navboxtd = document.createElement('td');

		let navrightdiv = document.createElement('div');
		navrightdiv.className = "plainlist";

		let navrightul = document.createElement('ul');
		let navrightli = document.createElement('li');
		
		for (let j = 0; j < page.navbox[i].info.length; j++) {
			let navrightspan = document.createElement('span');
			
			navrightspan.innerHTML = page.navbox[i].info[j];
			
			if (j != page.navbox[i].info.length - 1) navrightspan.innerHTML += '</br>';
			
			navrightli.append(navrightspan);
		}
		navrightul.append(navrightli);
		navrightdiv.append(navrightul);
		navboxtd.append(navrightdiv);

		navboxtr.append(navboxth, navboxtd);
					
		navbody.append(navboxtr);
	}
	
	navbox.append(caption, navbody);
	
	article.append(navbox);
}

if (page.introText != undefined) {
	for (let i = 0; i < page.introText.length; i++) {
		let introText = document.createElement('p');
		introText.innerHTML = page.introText[i];
		
		article.append(introText);
	}
}

if (page.categories != undefined) {
	for (let i = 0; i < page.categories.length; i++) {
		let category = document.createElement('h2');
		let lineBreak = document.createElement('hr');
		
		category.innerHTML = page.categories[i].name;
		
		article.append(category, lineBreak);
		for (let j = 0; j < page.categories[i].info.length; j++) {
			let info = document.createElement('p');
			info.innerHTML = page.categories[i].info[j];
			
			article.append(info);
		}
	}
}

let endnavs = [];

for (let i = 0; i < page.endnav.split(' ').length; i++) addScript(`./pages/nav_${page.endnav.split(' ')[i]}.js`);
addScript('./pages/FINALIZER.js');