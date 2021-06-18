let imageSize = {
	large: 30,
	norm: 25,
	small: 20,
	smol: 15
};
let slideIndex = 0;

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
				navrightembed.frameborder = 'no';
			//	navrightembed.allow = 'autoplay';
				navrightembed.display = 'block';
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

function makeQuote(input) {
	let quoteText = document.createElement('p');
	
	let quoteItalics = document.createElement('i');
	quoteItalics.className = 'wiki-quote';
	quoteItalics.innerHTML = `"${input.quote}"`;

	let lineBreak = document.createElement('br');

	let quoteAuthor = document.createElement('i');
	quoteAuthor.className = 'wiki-quote-author';
	quoteAuthor.innerHTML = ` - ${input.author}`;

	quoteText.append(quoteItalics, lineBreak, quoteAuthor);

	avThin.append(quoteText);
}

function makeList(list) {
	let listContainer = document.createElement('ul');
	listContainer.className = 'wiki-unordered-list';

	for (let listIndex = 0; listIndex < list.length; listIndex++) {
		let listItem = document.createElement('li');
		listItem.innerHTML = list[listIndex];
		listItem.className = 'wiki-list-item';
		listContainer.append(listItem);
	}

	avThin.append(listContainer);
}

function handleText(input) {
	switch (typeof input) {
		case 'string':
			let introText = document.createElement('p');
			introText.innerHTML = input;
			avThin.append(introText);	 
			break;
		case 'function':
			input();
			break;
		default:
			console.log('Unknown input type!', input);
			break;
	}
}

if (page.introText != undefined) {
	for (let i = 0; i < page.introText.length; i++) handleText(page.introText[i]);
}

if (page.categories != undefined) {
	for (let i = 0; i < page.categories.length; i++) {
		let category = document.createElement('h2');
		let lineBreak = document.createElement('hr');
		
		category.innerHTML = page.categories[i].name;
		
		avThin.append(category, lineBreak);
		
		if (page.categories[i].info != undefined) {
			for (let j = 0; j < page.categories[i].info.length; j++) handleText(page.categories[i].info[j]);
		}

		if (page.categories[i].gallery != undefined) {
			let gallerySlideshow = document.createElement('div');
			gallerySlideshow.className = 'wiki-gallery-parent';

			for (let j = 0; j < page.categories[i].gallery.length; j++) {
				let slideshowDiv = document.createElement('div');
				slideshowDiv.className = 'wiki-gallery';

				let slideshowDivChild = document.createElement('div');
				slideshowDivChild.className = 'wiki-slide-parent';

				let slideDiv = document.createElement('div');
				slideDiv.className = 'wiki-slide';

				let slideDivImage = document.createElement('img');
				slideDivImage.className = 'wiki-image';
				slideDivImage.src = `./images/${page.categories[i].gallery[j].image}`;

				slideDiv.append(slideDivImage);

				let slideTextDiv = document.createElement('div');
				slideTextDiv.className = 'wiki-slide-text';

				let slideText = document.createElement('p');
				slideText.innerHTML = `${page.categories[i].gallery[j].text}`;

				slideTextDiv.append(slideText);

				slideshowDivChild.append(slideDiv, slideTextDiv);

				let slideshowPrev = document.createElement('a');
				let slideshowNext = document.createElement('a');
				slideshowPrev.className = 'wiki-gallery-prev';
				slideshowNext.className = 'wiki-gallery-next';

				slideshowPrev.innerHTML = '&#9664;';
				slideshowNext.innerHTML = '&#9654;';

				function updateGallery(addSlideIndex) {
					let slides = document.getElementsByClassName('wiki-gallery');

					slides[slideIndex].style.display = 'none';

					slideIndex += addSlideIndex;
					if (slideIndex < 0) slideIndex = page.categories[i].gallery.length - 1;
					if (slideIndex > page.categories[i].gallery.length - 1) slideIndex = 0;

					slides[slideIndex].style.display = 'block';
				}

				slideshowPrev.onclick = () =>{
					updateGallery(-1);
				}

				slideshowNext.onclick = () =>{
					updateGallery(1);
				}

				slideshowDiv.append(slideshowPrev, slideshowDivChild, slideshowNext);

				if (j > 0) slideshowDiv.style.display = 'none';
				else slideshowDiv.style.display = 'block';

				gallerySlideshow.append(slideshowDiv);
			}

			avThin.append(gallerySlideshow);
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
