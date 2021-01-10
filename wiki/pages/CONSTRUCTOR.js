let page;

if (typeof pageData == 'undefined') {
	let quoteNumber = Math.floor(Math.random() * 7);
	let quote;
	switch (quoteNumber) {
		case 0:
			quote = 'Maybe it was destroyed by <a href="index.html?p=wop" class="y">World of Pain</a>...';
			break;
		case 1:
			quote = 'Maybe it\'s in the <a href="index.html?p=taiberaque" class="y">Taiberaque</a> system...';
			break;
		case 2:
			quote = 'Maybe it got abducted by space clowns...';
			break;
		case 3:
			quote = 'Maybe <a href="index.html?p=aero" class="y">Aero</a> stole it\'s intestines...';
			break;
		case 4: // Made by Pixel Origin
			quote = 'Likely left to attend <a href="index.html?p=aero" class="y">Aero</a>\'s funeral...';
			break;
		case 5: // Made by PS3_33
			quote = 'Perhaps it\'s one of <a href="index.html?p=the" class="y">These</a> greatest mysteries...';
			break;
		case 6: // Made by PS3_33
			quote = 'Maybe <a href="index.html?p=aeiou" class="y">Aeiou</a> made it explode because of its awesomeness...';
			break;
	}
	page = {
		name: 'Oops, a tasty 404!',
		introText: ['This page doesn\'t seem to exist, sadly... ' + quote],
		endnav: 'chars planet'
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
	let capa = document.createElement('a');
	
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

if (page.endnav != undefined) {
	function createNav(table) {
		let endTable = document.createElement('table');
		endTable.className = "navbox";
		endTable.style = "width: 95%;";
		
		let caption = document.createElement('caption');
		caption.innerHTML = table.heading;
		
		let tableBody = document.createElement('tbody');
		
		for (let i = 0; i < table.categories.length; i++) {
			let tableRow = document.createElement('tr');
			
			let tableHeader = document.createElement('th');
			tableHeader.scope = "row";
			tableHeader.style = "padding:0.25em 1em; line-height:1.5em; text-align:center; width: 1%;"
			tableHeader.innerHTML = table.categories[i].category;
			
			let tableData = document.createElement('td');
			let innerTable = document.createElement('table');
			
			tableData.append(innerTable);
			
			let innerTableBody = document.createElement('tbody');
			
			for (let j = 0; j < table.categories[i].info.length; j++) {
				let innerTableRow = document.createElement('tr');
				
				let innerTableHeader = document.createElement('th');
				innerTableHeader.scope = "row";
				innerTableHeader.style = "padding:0.25em 1em; line-height:1.5em; text-align:center; width: 1%; white-space: nowrap;";
				innerTableHeader.innerHTML = table.categories[i].info[j].name;
				
				let innerTableData = document.createElement('td');
				
				let innerTableDiv = document.createElement('div');
				innerTableDiv.style = "text-align: left; padding-left: 8px;";
				
				for (let k = 0; k < table.categories[i].info[j].info.length; k++) {
					let innerTableSpan = document.createElement('span');
					innerTableSpan.innerHTML = table.categories[i].info[j].info[k];
					
					if (k != table.categories[i].info[j].info.length - 1) innerTableSpan.innerHTML += ' &bull; ';
					
					innerTableDiv.append(innerTableSpan);
				}
				
				innerTableData.append(innerTableDiv);
				
				innerTableRow.append(innerTableHeader, innerTableData);
				
				innerTableBody.append(innerTableRow);
			}
			
			innerTable.append(innerTableBody);
			
			tableRow.append(tableHeader, tableData);
			
			tableBody.append(tableRow);
		}
		
		endTable.append(caption, tableBody);
		
		article.append(endTable);
	}
	
	if (page.endnav.includes('chars')) {
		createNav({
			heading: 'Characters',
			categories: [{
				category: 'Aeroventures',
				info: [{
					name: 'Protagonists',
					info: [
						'<a href="index.html?p=aero" class="y">Aero</a>',
						'<a href="index.html?p=archie" class="n">Archie</a>',
						'<a href="index.html?p=lakys" class="n">Lakys</a>',
						'<a href="index.html?p=aposteel" class="n">Aposteel</a>'
					]
				}, {
					name: 'Antagonists',
					info: [
						'<a href="index.html?p=coylstone" class="n">Coyl Stone</a>',
						'<a href="index.html?p=keeper" class="n">The Keeper</a>',
						'<a href="index.html?p=larry-av" class="n">Larry</a>',
						'<a href="index.html?p=nutstradamnus" class="n">Nutstradamnus</a>',
						'<a href="index.html?p=oldaero" class="n">Old Aero</a>',
						'<a href="index.html?p=ozark" class="n">Ozark</a>',
						'<a href="index.html?p=royale" class="n">Royale</a>',
						'<a href="index.html?p=clowns" class="n">The Space Clowns</a>',
						'<a href="index.html?p=warmaccine" class="n">War Maccine</a>'
					]
				}, {
					name: 'Minor Characters',
					info: [
						'<a href="index.html?p=darpynpals" class="n">Darpy & Pals</a> (<small>Darpy &bull; Occols &bull; Trivy</small>)',
						'<a href="index.html?p=diepic" class="n">Diepic</a>',
						'<a href="index.html?p=fender" class="n">Fender</a>',
						'<a href="index.html?p=shockpose" class="n">Shockpose</a>'
					]
				}]
			}, {
				category: 'Polyventures',
				info: [{
					name: 'Protagonists',
					info: [
						'<a href="index.html?p=pon" class="n">Pon</a>', 
						'<a href="index.html?p=larry-pv" class="n">Larry</a>', 
						'<a href="index.html?p=beth" class="n">Beth</a>',
						'<a href="index.html?p=vinny" class="n">Vinny</a>'
					]
				}, {
					name: 'Antagonists',
					info: [
						'To Be Revealed'
					]
				}, {
					name: 'Minor Characters',
					info: [
						'<a href="index.html?p=gordon" class="n">Gordon</a>',
						'<a href="index.html?p=larrymom" class="n">Larry\'s Mom</a>',
						'<a href="index.html?p=spencer" class="n">Spencer</a>'
					]
				}]
			}]
		});
	}
	
	if (page.endnav.includes('planet')) {
		createNav({
			heading: 'The Bisolar System',
			categories: [{
				category: '<a href="index.html?p=hotsun" class="y"><img src="images/hot_sun.png" width="30" height="30">Ommadawn</a> System',
				info: [{
					name: 'Inner System',
					info: [
						'<a href="index.html?p=grene" class="y"><img src="images/grene.png" width="25" height="25"></img>Grene</a>',
						'<a href="index.html?p=doug" class="y"><img src="images/doug.png" width="25" height="25">Doug</a> (<small><img src="images/h.png" width="20" height="20">H</small>)',
						'<a href="index.html?p=ert" class="y"><img src="images/ert.png" width="20" height="20">Ert</a>  (<small><a href="index.html?p=perpahedron" class="n">Perpahedron</a></small>)',
						'<a href="index.html?p=george" class="y"><img src="images/george.png" width="20" height="20">Georg</a><a href="images/george_real.png" class="y">e</a> (<small><img src="images/damocles.png" width="20" height="20">Damocles</small>)',
						'<a href="index.html?p=pilf" class="y"><img src="images/pilf_ringless.png" width="25" height="25">Pilf</a>'
					]
				}, {
					name: 'Outer System',
					info: [
						'<a href="index.html?p=mac" class="y"><img src="images/mac.png" width="35" height="25">Mac</a> (<small><a href="index.html?p=wop" class="y"><img src="images/wop.png" width="23" height="20">World of Pain</a> &bull; <img src="images/dough.png" width="24" height="20">Dough</small>)',
						'<a href="index.html?p=aeiou" class="y"><img src="images/aeiou.png" width="27" height="25">Aeiou</a> (<small>Cdfqrszt &bull; Heideph</small>)',
						'<a href="index.html?p=berry" class="y"><img src="images/berry_ringless.png" width="25" height="25">Berry</a>',
						'<a href="index.html?p=the" class="y"><img src="images/the.png" width="25" height="25">The</a>'
					]
				}]
			}, {
				category: '<a href="index.html?p=taiberaque" class="y">Taiberaque</a> System',
				info: [{
					name: 'Inner System',
					info: [
						'<a href="index.html?p=coldsun" class="y"><img src="images/cold_sun.png" width="25" height="25">Cold Sun</a>'
					]
				}, {
					name: 'Outer System',
					info: [
						'<a href="index.html?p=uling" class="n">Uling</a>'
					]
				}]
			}, {
				category: 'Misc',
				info: [{
					name: '<a href="index.html?p=dwarf" class="y">Dwarf Planets</a>',
					info: [
						'<a href="index.html?p=dwarf#ternary" class="y">BPM-1-2-3 (The Ternary)</a>',
						'<a href="index.html?p=dwarf#sphynx" class="y">BOT-1 (Sphynx)</a>',
						'<a href="index.html?p=dwarf#blyu" class="y">BCU-1 (Blyu)</a>',
						'<a href="index.html?p=dwarf#ayduno" class="y">BCU-2 (Ayduno)</a>',
						'<a href="index.html?p=dwarf#objobj" class="y">BCU-3 (Object/Object)</a>'
					]
				}, {
					name: 'Objects',
					info: [
						'BPM-4 (Macaroni Belt)',
						'BOT-2 (Gram\'s Comet)',
						'BBT-1 (Kol\'s Mini Nebula)', // Ball of Christmas Lights
					]
				}]
			}]
		});
	}
	
	if (page.endnav.includes('plamet')) {
		createNav({
			heading: 'The Bisolar System',
			categories: [{
				category: '<a href="index.html?p=hotsun" class="y"><img src="images/hot_sun.png" width="30" height="30">Ommadawm</a> System',
				info: [{
					name: 'Immer System',
					info: [
						'<a href="index.html?p=grene" class="y"><img src="images/grene.png" width="25" height="25"></img>Greme</a>',
						'<a href="index.html?p=doug" class="y"><img src="images/doug.png" width="25" height="25">Doug</a> (<small><img src="images/h.png" width="20" height="20">H</small>)',
						'<a href="index.html?p=pilf" class="y"><img src="images/pilf_ringless.png" width="25" height="25">Pilf</a>',
						'<a href="index.html?p=ert" class="y"><img src="images/ert.png" width="20" height="20">Ert</a>  (<small><a href="index.html?p=perpahedron" class="n">Perpahedrom</a></small>)',
						'<a href="index.html?p=george" class="y"><img src="images/george.png" width="20" height="20">Georg</a><a href="images/george_real.png" class="y">e</a> (<small><img src="images/damocles.png" width="20" height="20">Damocles</small>)',
					]
				}, {
					name: 'Outer System',
					info: [
						'<a href="index.html?p=macaroni" class="n">Macaromi Belt</a>',
						'<a href="index.html?p=mac" class="y"><img src="images/mac.png" width="35" height="25">Mac</a> (<small><a href="index.html?p=wop" class="y"><img src="images/wop.png" width="23" height="20">World of Paim</a> &bull; <img src="images/dough.png" width="24" height="20">Dough</small>)',
						'<a href="index.html?p=aeiou" class="y"><img src="images/aeiou.png" width="27" height="25">Aeiou</a> (<small>Cdfqrszt &bull; Heideph</small>)',
						'<a href="index.html?p=berry" class="y"><img src="images/berry_ringless.png" width="25" height="25">Berry</a>',
						'<a href="index.html?p=the" class="y"><img src="images/the.png" width="25" height="25">The</a>'
					]
				}]
			}, {
				category: '<a href="index.html?p=taiberaque" class="y">Taiberaque</a> System',
				info: [{
					name: 'Immer System',
					info: [
						'<a href="index.html?p=coldsun" class="y"><img src="images/cold_sun.png" width="25" height="25">Cold Sum</a>'
					]
				}, {
					name: 'Outer System',
					info: [
						'<a href="index.html?p=uling" class="n">Ulimg</a>'
					]
				}]
			}, {
				category: 'Misc',
				info: [{
					name: '<a href="index.html?p=dwarf" class="y">Dwarf Plamets</a>',
					info: [
						'<a href="index.html?p=dwarf#ternary" class="y">BCM-1-2-3 (The Termary)</a>',
						'<a href="index.html?p=dwarf#sphynx" class="y">BOT-1 (Sphymx)</a>',
						'<a href="index.html?p=dwarf#blyu" class="y">BCU-1 (Blyu)</a>',
						'<a href="index.html?p=dwarf#ayduno" class="y">BCU-2 (Aydumo)</a>',
						'<a href="index.html?p=dwarf#objobj" class="y">BCU-3 (Object/Object)</a>'
					]
				}, {
					name: 'Objects',
					info: [
						'BOT-2 (Gram\'s Comet)',
						'BBT-1 (Kol\'s Mimi mebula)', // Ball of Christmas Lights
					]
				}]
			}]
		});
	}
}
