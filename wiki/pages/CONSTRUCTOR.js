let imageSize = {
	large: 30,
	norm: 25,
	small: 20,
	smol: 15
};

let page = pageData;

let pageHeader = document.createElement('span');

let wikiPageName = document.createElement('h1');
wikiPageName.innerHTML = page.name;
wikiPageName.className = 'page-header';

let topLineBreak = document.createElement('hr');

pageHeader.append(wikiPageName, topLineBreak);
avThin.append(pageHeader);

if (page.navbox != undefined) {
	let navbox = document.createElement('table');
	navbox.className = 'wiki-infobox';
	
	let caption = document.createElement('caption');
	
	caption.innerHTML = page.navbox.name ? page.navbox.name : page.name;
	
	if (page.navbox.symbol != undefined) {
		let navsymbol = document.createElement('img');
		navsymbol.alt = `symbol_${page.navbox}.png`;
		navsymbol.src = `./images/symbol_${pageName}.png`;
		navsymbol.className = 'wiki-navbox-symbol';
		caption.append(navsymbol);
	}
	
	let navbody = document.createElement('tbody');
	
	let imagetr = document.createElement('tr');
	let imagetd = document.createElement('td');
	let imgnav = document.createElement('img');
	let capdiv = document.createElement('div');
	let capa = document.createElement('span');
	
	imagetd.className = 'wiki-infobox-image-td';
	imagetd.colSpan = 2;

	if (page.navbox.file) {
		imgnav.className = `wiki-navbox-image${page.navbox.file[1] ? ' ' + page.navbox.file[1] : ''}`;
		imgnav.src = `./images/${page.navbox.file[0]}`;
		imgnav.alt = page.navbox.file[0];
		
		imagetd.append(imgnav);
	}
	
	capa.innerHTML = page.navbox.caption;
	
	capdiv.append(capa);
	
	imagetd.append(capdiv);
	
	imagetr.append(imagetd);
	
	navbody.append(imagetr);
	
	for (let k = 0; k < page.navbox.info.length; k++) {
		
		let headingtr = document.createElement('tr');
		let headingth = document.createElement('th');
		
		headingth.colSpan = "2";
		headingth.innerHTML = page.navbox.info[k].heading;
		
		headingtr.append(headingth);
		
		navbody.append(headingtr);
		
		for (let i = 0; i < page.navbox.info[k].info.length; i++) {
			let navboxtr = document.createElement('tr');
			
			let navboxth = document.createElement('th');
			navboxth.scope = 'row';
				
			if (page.navbox.info[k].info[i].name != undefined) {
				let navleftdiv = document.createElement('div');
				navleftdiv.innerHTML = page.navbox.info[k].info[i].name;

				navboxth.append(navleftdiv);
			}

			let navboxtd = document.createElement('td');

			let navrightdiv = document.createElement('div');

			let navrightul = document.createElement('ul');
			let navrightli = document.createElement('li');
			
			if (page.navbox.info[k].info[i].info != undefined) {
				for (let j = 0; j < page.navbox.info[k].info[i].info.length; j++) {
					let navrightspan = document.createElement('span');
					
					navrightspan.innerHTML = page.navbox.info[k].info[i].info[j];
					
					if (j != page.navbox.info[k].info[i].info.length - 1) navrightspan.innerHTML += '</br>';
					
					navrightli.append(navrightspan);
				}
			}			
	
			navboxtr.append(navboxth);
			
			if (page.navbox.info[k].info[i].embed != undefined) {
				navboxth.colSpan = "2";
				
				let embedInfo = page.navbox.info[k].info[i].embed
				let navrightembed = document.createElement('iframe');
				
				navrightembed.width = 275;
				navrightembed.height = 200;
				navrightembed.frameborder = "no";
				navrightembed.allow = "autoplay";
				navrightembed.display = "block";
				navrightembed.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${embedInfo.track}&color=%23${embedInfo.color}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true`;
				
				navboxth.append(navrightembed);
			} else {				
				navrightul.append(navrightli);
				navrightdiv.append(navrightul);
				navboxtd.append(navrightdiv);
				navboxtr.append(navboxtd);
			}

			navbody.append(navboxtr);
		}
		
		navbox.append(caption, navbody);
	}
	
	avThin.append(navbox);
}

if (page.introText != undefined) {
	for (let i = 0; i < page.introText.length; i++) {
		let introText = document.createElement('p');
		introText.innerHTML = page.introText[i];
		
		avThin.append(introText);
	}
}

if (page.categories != undefined) {
	for (let i = 0; i < page.categories.length; i++) {
		let category = document.createElement('h2');
		let lineBreak = document.createElement('hr');
		
		category.innerHTML = page.categories[i].name;
		
		avThin.append(category, lineBreak);
		for (let j = 0; j < page.categories[i].info.length; j++) {
			let info = document.createElement('p');
			info.innerHTML = page.categories[i].info[j];
			
			avThin.append(info);
		}
	}
}

if (page.warning != undefined) {
	for (let i = 0; i < page.warning.split(' ').length; i++) {
		addScript(`./pages/warn_${page.warning.split(' ')[i]}.js`);
	}
}

if (page.endnav != undefined) {
	for (let i = 0; i < page.endnav.split(' ').length; i++) {
		addScript(`./pages/nav_${page.endnav.split(' ')[i]}.js`);
	}
}

addScript('./pages/FINALIZER.js');
