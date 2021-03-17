let imageSize = {
	large: 30,
	norm: 25,
	small: 20
};

let page = pageData;

let article = document.getElementsByClassName('av-thin')[0];

let name = document.createElement('h1');
name.style = "font-family: Ubuntu;";
name.innerHTML = page.name;

let topLineBreak = document.createElement('hr');

article.append(name, topLineBreak);

if (page.navbox != undefined) {
	let navbox = document.createElement('table');
	navbox.className = "infobox";
	navbox.style = "width: 22em";
	
	let caption = document.createElement('caption');
	caption.innerHTML = page.navbox.name ? page.navbox.name : page.name;
			
	let navbody = document.createElement('tbody');
	
	let imagetr = document.createElement('tr');
	let imagetd = document.createElement('td');
	let imgnav = document.createElement('img');
	let capdiv = document.createElement('div');
	let capa = document.createElement('span');
	
	imagetd.colSpan = "2";
	imagetd.style = "text-align: center";

	if (page.navbox.file) {
		imgnav.className = page.navbox.file[1];
		imgnav.alt = page.navbox.file[0];
		imgnav.src = `./images/${page.navbox.file[0]}`;
		imgnav.style = 'max-width: 300px; width: 300px; vertical-align: unset;';
	//	imgnav.width = page.navbox.dims[0];
	//	imgnav.height = page.navbox.dims[1];
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
			navboxth.scope = "row";
			navboxth.style = "max-width: 11em;";
			
			let navleftdiv = document.createElement('div');
			navleftdiv.style = "display: inline-block; padding: 0.1em 0; line-height: 1.2em;";
			navleftdiv.innerHTML = page.navbox.info[k].info[i].name;

			navboxth.append(navleftdiv);

			let navboxtd = document.createElement('td');

			let navrightdiv = document.createElement('div');
			navrightdiv.className = "plainlist";

			let navrightul = document.createElement('ul');
			let navrightli = document.createElement('li');
			
			for (let j = 0; j < page.navbox.info[k].info[i].info.length; j++) {
				let navrightspan = document.createElement('span');
				
				navrightspan.innerHTML = page.navbox.info[k].info[i].info[j];
				
				if (j != page.navbox.info[k].info[i].info.length - 1) navrightspan.innerHTML += '</br>';
				
				navrightli.append(navrightspan);
			}
			
			if (page.navbox.info[k].info[i].embed == true) {
				let navrightembed = document.createElement('iframe');
				
				navrightembed.width = 200;
				navrightembed.height = 200;
				navrightembed.scrolling = "no";
				navrightembed.frameborder = "no";
				navrightembed.allow = "autoplay";
				navrightembed.display = "block";
				
				let songLink = '';
				
				switch (pageName) {
					case 'baeg':
						songLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/992974678&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
						break;
					case 'ert':
						songLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/994171495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
						break;
					case 'aeiou':
						songLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/994972702&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
						break;
					case 'mac':
						songLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1002965515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
						break;
					case 'george':
						songLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1005219457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
						break;
				}
				
				navrightembed.src = songLink;

				navrightli.append(navrightembed);
			}
			
			navrightul.append(navrightli);
			navrightdiv.append(navrightul);
			navboxtd.append(navrightdiv);

			navboxtr.append(navboxth, navboxtd);
						
			navbody.append(navboxtr);
		}
		
		navbox.append(caption, navbody);
	}
	
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
