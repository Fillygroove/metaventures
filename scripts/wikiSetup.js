function pageTemplate(page) {
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
					file: 'the.png',
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
			let navrightspan = document.createElement('span');
			
			navrightspan.className = "nowrap";
			navrightspan.innerHTML = page.navbox[i].info.toString().replaceAll(",", "</br>").replaceAll("[[", ",");

			navrightli.append(navrightspan);
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
					
					innerTableDiv.innerHTML = table.categories[i].info[j].info.toString().replaceAll(',', ' &bull; ');
					
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
							'<a href="index.html?p=darpynpals" class="n">Darpy & Pals</a> (<small>Darpy, Occols, Trivy</small>)',
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
					category: '<a href="index.html?p=hotsun" class="y">Ommadawn</a> System',
					info: [{
						name: 'Inner Planets',
						info: [
							'<a href="index.html?p=grene" class="y">Grēne</a>',
							'<a href="index.html?p=doug" class="y">Doug</a> (<small>H</small>)',
							'<a href="index.html?p=pilf" class="y">Pilf</a>',
							'The Water Cycle (<small><a href="index.html?p=ert" class="y">Ert</a>  (<small><a href="index.html?p=perpahedron" class="n">Perpahedron</a></small>) &bull; <a href="index.html?p=george" class="y">George</a> (<small>Damocles</small>)</small>)',
							'<a href="index.html?p=cea" class="y">Cea</a> (<small>52 Confirmed Mines</small>)'
						]
					}, {
						name: 'Outer Planets',
						info: [
							'<a href="index.html?p=ternary" class="y">The Ternary</a> (<small>Dot &bull; Otd &bull; Tod</small>)',
							'<a href="index.html?p=mac" class="y">Mac</a> (<small><a href="index.html?p=wop" class="y">World of Pain</a> &bull; Dough</small>)',
							'<a href="index.html?p=xystload" class="n">Xystload</a>',
							'<a href="index.html?p=aeiou" class="y">Aeiou</a> (<small>Cdfqrszt &bull;  Heideph</small>)'
						]
					}, {
						name: 'Trans-Aeiouian',
						info: [
							'<a href="index.html?p=the" class="y">The</a>'
						]
					}]
				}, {
					category: '<a href="index.html?p=taiberaque" class="y">Taiberaque</a> System',
					info: [{
						name: 'Inner Planets',
						info: [
							'<a href="index.html?p=coldsun" class="y">Cold Sun</a>',
							'<a href="index.html?p=gigantrax" class="n">Gigantrax</a>'
						]
					}, {
						name: 'Outer Planets',
						info: [
							'???'
						]
					}]
				}]
			});
		}
	}
	
	let break1 = document.createElement('br');
	let break2 = document.createElement('br');
	article.append(break1, break2);
}

function generatePage(page) {
	switch (page) {
		case "main":
			pageTemplate({
				name: 'The Wiki',
				introText: ['Welcome to the official Metaventures Wiki! Here, you can find pages about everything in the Metaventures world so far. Reminder that the Wiki is still a huge work in progress, so expect pages to be empty.'],
				categories: [],
				endnav: 'chars planet'
			});
			break;
		case "aero":
			pageTemplate({
				warning: 'stub',
				name: 'Aero D. Venture',
				file: ['aero.png', ''],
				dims: ['330', '330'],
				caption: 'Picture taken by Aero by accident, illustration made by Text Wall.',
				heading: 'Designations',
				navbox: [{
					name: 'Species',
					info: ['Reeg']
				}, {
					name: 'Lives in',
					info: ['<a href="index.html?p=ert" class="y">Ert</a>[[ in Yolktown.']
				}, {
					name: 'Character Status',
					info: ['Alive (Formerly dead)']
				}, {
					name: 'Character Type',
					info: ['Protagonist']
				}, {
					name: 'Series',
					info: ['Aeroventures']
				}],
				introText: [
					'Aero D. Venture, commonly known as Aero, is the title character for Aeroventures. Since 2017, Aero has been causing chaos unintentionally all over <a href="index.html?p=ert" class="y">Ert</a>, primarily in Yolktown. Despite this, many of his adversaries, such as <a href="index.html?p=royale" class="n">Royale</a> and <a href="index.html?p=larry-av" class="n">Larry</a>, have caused considerably more damage than he ever could. That\'s why he has <a href="index.html?p=lakys" class="n">Lakys</a>, <a href="index.html?p=archie" class="n">Archie</a>, and <a href="index.html?p=aposteel" class="n">Aposteel</a>, officially called The Aeroventures Crew, by his side.',
					'In Aeroventures, Aero is seen as the main protagonist, and one of the main 4 protagonists, the others being Lakys, Archie, and, most recently, Aposteel. All four of them unintentionally cause chaos wherever they are.',
					'Aero has a numerous amount of clones, mostly created by Royale during <a href="../comics/index.html?c=10" class="c">Aeroventures 10</a>. Said clones have the same name first name, although their middle name is a bit different, and their last name is always different. An example of an Aero clone is Aero D. Struction. Most Aero Clones feature Aero\'s old look, when he was high on <a href="index.html?p=aposteel" class="n">Nagic</a>.'
				],
				categories: [{
					name: 'Character Design',
					info: [
						'<h3>Modern Appearance</h3>',
						'Aero is a reeg that has a blue skin tone, like most reegs. Also like most reegs, Aero has a spherical shaped body with two legs at the bottom that have the ability to stretch and fold in on themselves. Aero has a lance nose, which could be used for offensive purposes but is never used due to his laziness. Aero is exactly 2 feet tall in height.',
						'<img src="images/old_aero.png" alt="old_aero.png" width="100" height="124.52" class="pixel" style="float: right; background-color: #555555;"></img>',
						'<h3>Legacy Appearance</h3>',
						'In the past, Aero used to be more deformed, due to being under the influence of Nagic. His lance was a lot bigger, and was usually placed to the side of his head, along with his eyes being bigger, and his head being seperated into a new section of his body. This form of Aero is referred to as Old Aero. Old Aero is usually referred to as a different person, and acts differently as well.'
					]
				}, {
					name: 'In The Comics',
					info: [
						'<h3>Aeroventures 1</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 1</a>,',
						'<h3>Aeroventures 2</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 2</a>,',
						'<h3>Aeroventures 3</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 3</a>,',
						'<h3>Aeroventures 4</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 4</a>,',
						'<h3>Aeroventures 5</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 5</a>,',
						'<h3>Aeroventures 6</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 6</a>,',
						'<h3>Aeroventures 7</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 7</a>,',
						'<h3>Aeroventures 8</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 8</a>,',
						'<h3>Aeroventures 9</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 9</a>,',
						'<h3>Aeroventures 10</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 10</a>,',
						'<h3>Aeroventures Halloween Edition</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures Halloween Edition</a>,',
						'<h3>Aeroventures 11</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 11</a>,',
						'<h3>Aeroventures 12</h3>',
						'In <a href="../comics/index.html?c=1" class="c">Aeroventures 12</a>,'
					]
				}],
				endnav: 'chars'
			});
			break;
		case "hotsun":
			pageTemplate({
				warning: 'stub',
				name: 'Ommadawn',
				file: ['hot_sun.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in false color due to <a href="index.html?p=ert" class="y">Ert</a>\'s atmosphere, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=taiberaque" class="y">Taiberaque (Binary System)</a>']
				}, {
					name: 'Satellites',
					info: [
						'<a href="index.html?p=grene" class="y">Grēne</a>',
						'<a href="index.html?p=doug" class="y">Doug</a>',
						'<a href="index.html?p=pilf" class="y">Pilf</a>',
						'<a href="index.html?p=ert" class="y">Ert</a> / <a href="index.html?p=george" class="y">George</a>',
						'<a href="index.html?p=cea" class="y">Cea</a>',
						'<a href="index.html?p=ternary" class="y">The Ternary</a>',
						'<a href="index.html?p=mac" class="y">Mac</a>',
						'<a href="index.html?p=xystload" class="y">Xystload</a>',
						'<a href="index.html?p=aeiou" class="y">Aeiou</a>',
						'<a href="index.html?p=the" class="y">The</a>',
						'<a href="index.html?p=taiberaque" class="y">Taiberaque (Binary System)</a>'
					]
				}, {
					name: 'Name Origin',
					info: ['It\'s hot.']
				}, {
					name: 'Classification',
					info: ['K-Type Star']
				}, {
					name: 'Life',
					info: ['Losers']
				}],
				introText: [
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Sample text.',
					]
				}],
				endnav: 'planet'
			});
			break;
		case "grene":
			pageTemplate({
				name: 'Grēne',
				file: ['grene.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['None']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Chthonian']
				}, {
					name: 'Life',
					info: ['None']
				}],
				introText: [
					'Grēne is the first planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, before <a href="index.html?p=doug" class="y">Doug</a>. It is about a fifty-fifth of the size of the Hot Sun. Grēne can barely be seen from <a href="index.html?p=ert" class="y">Ert</a>, looking like a sun spot due to how close it is to the Hot Sun, but since it revolves around the Hot Sun rather quickly, it looks like a sun spot that moves extremely quickly. It can only be observed by special means, specifically in day with special equipment.',
					'Grēne\'s surface is mostly composed of silicon and an unknown material, with the side of the planet facing the Hot Sun consisting of molten silicon. The atmosphere contains evaporated silicon, along with another unknown material that causes a cycle similar to the water cycle on <a href="index.html?p=ert" class="y">Ert</a>, <a href="index.html?p=george" class="y">George</a>, and <a href="index.html?p=cea" class="y">Cea</a>. Said atmosphere is being stripped off of the planet by the solar wind, being blasted off, leaving a trail that constantly leaves the planet, facing away from the Hot Sun. A year on Grēne lasts 20 hours. Days can not be measured due to the planet being tidally locked to the Hot Sun.',
					'The term for describing something related to Grēne is Grēnian.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Grēne is a Chthonian planet that mainly consists of a silicon-based material, along with a multitude of undiscovered elements, although aluminum is confirmed due to probes being sent there and promptly being melted by how hot the planet is. Most attempts of uncovering more elements only makes us more sure that aluminum is present on Grēne. Grēne is tidally locked to the Hot Sun, meaning that one side of the planet always faces it. Due to solar winds hitting the atmosphere, the atmosphere is physically stripped from the planet, causing a trail that affects Doug, and maybe even <a href="index.html?p=pilf" class="y">Pilf</a>.',
						'Due to the circulation in the atmosphere, there are strands of an unknown material that glows a bright blue. From far away, this causes the planet to appear as if it were the color green.',
						'Pictured on the bottom of the provided image is a storm, which has been colloquially called the Great Pants Color Spot.'
					]
				}, {
					name: 'Interactions With the Hot Sun',
					info: [
						'Grēne orbits around the Hot Sun very closely, causing it to be tidally locked and causing the silicon-based material on Grēne to melt, and even evaporate into its ever diminishing atmosphere. It is theorized that the evaporated silicon material travels along the visible blue currents on the planet, and raining back down on the other side. Due to the molten silicon, the solid rock on the side facing away from the Hot Sun travels back to the hot side of the planet.'
					]
				}, {
					name: 'Interactions With Doug',
					info: [
						'Doug orbits closely to the expelled atmosphere of Grēne, which, over millions of years, has turned it to the brown shade we know it as today.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "doug":
			pageTemplate({
				warning: 'quality',
				name: 'Doug',
				file: ['doug.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color due to everyone forgetting about it, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['H']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Terrestrial']
				}, {
					name: 'Life',
					info: ['Worms (Unconfirmed)']
				}],
				introText: [
					'Doug is the second planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, after <a href="index.html?p=grene" class="y">Grēne</a> and before <a href="index.html?p=pilf" class="y">Pilf</a>. Doug can be seen in the night skies of <a href="index.html?p=ert" class="y">Ert</a> during the evenings, although it is hard to see due to it not having much of a reflective surface. As such, Doug is often forgotten and even hated due to its status as a planet.',
					'The term for describing something related to Doug is Forgettable.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'<h3>Appearance</h3>',
						'Doug, like all worlds in the inner system, is a terrestrial planet. It is a deep brown and yellow rocky body covered in large dark craters and volcanic planita. Doug is about one hundredth the size of the Hot Sun. It has a small axial tilt of about 0.05 radians and rotates once every 20 days in the opposite direction from all other worlds.',
						'<h3>Geography</h3>',
						'Doug\'s most notable features are its diverse patches of yellows, tans, and browns. It features a few massive craters that scar the surface with dark patches. Its surface is an entirely solid landscape full of jagged mountains, ridges, plains, and craters from ancient collisions.',
						'Doug\'s surface color is thought to be formed from Grēne\'s ejected atmosphere, reacting with exposed regolith and turning it brown. The varied colors on Doug can be used to find out the age of the surface, darker sections being the newest and with lighter sections being the oldest.',
						'The largest craters of Doug span hundreds of kilometers, and are often accompanied by flat featureless plains of newer rock, suggesting at one point these vast sections were molten presumably by impacts or from volcanism.',
						'Near the south pole of Doug lies a crater that is light in color. This spot has not been given a label, due to it only being observed once.',
						'<h3>"Atmosphere" and Climate</h3>',
						'Doug has a very thin atmosphere, although it\'s not enough to cause a visible sky. Said atmosphere is theorized to have come from Grēne\'s atmosphere, along with the trapping of other gasses.',
						'<h3>Magnetic Field</h3>',
						'Doug lacks a proper magnetosphere, which means it can\'t block solar radiation from bombarding its surface. Wear sunscreen.',
						'<h3>Internal Structure</h3>',
						'Doug\'s surface suggests that there was some form of volcanic activity, but there are no current observations of it. Its lack of a magnetic field, atmosphere, and the presence of craters deptics Doug as an inactive geologic body. Its interior is thought to be solid with little warmth left inside.',
						'Doug may also contain large cavernous remains of volcanic activity, and the disputed worms that could have created these.'
					]
				}, {
					name: 'Planetary Interactions',
					info: [
						'Doug\'s orbit is often dragged around a lot by the other nearby planets, most noteworthy is Pilf and the Ert and <a href="index.html?p=george" class="y">George</a> system. Grēne may have an impact depending on when it aligns itself with the other planets. Despite this, its orbit remains stable.',
						'<h3>Interactions With Grēne</h3>',
						'Doug orbits closely to the expelled atmosphere of Grēne, which, over millions of years, has turned it to the brown shade we know it as today.',
						'<h3>Interactions With Ert</h3>',
						'Doug indirectly interacted with the cultures on Ert, so technically it made one.'
					]
				}, {
					name: 'Satellites',
					info: [
						'<img src="images/h.png" alt="h.png" width="100" height="100" class="pixel" style="float: right; background-color: #555555;"></img>',
						'<h3>H</h3>',
						'Doug has one confirmed satellite, which has been named H. H is a natural satellite, shaped like a cube. It is the only object in the system with a cuboid shape, along with Pilf. H itself contains a similar makeup to Doug, with the same type of rocks and similar craters, with the only difference being size and shape. It is unknown if the naming of H was to make Doug and H match up with one of <a href="index.html?p=mac" class="y">Mac</a>\'s satellites, Dough, so that people could remember Doug.'
					]
				}, {
					name: 'Life',
					info: [
						'<h3>Worms</h3>',
						'Theoretically, Doug could have life on it. While unconfirmed as of now, Doug could have gigantic lengthy creatures on it that seem to be a larger variant of George\'s worms. Said worms could have created the holes on Doug as a place to call home. This theory also applies to H.'
					]
				}, {
					name: 'Culture',
					info: [
						'Doug is widely regarded to be the least favored planet in the Hot Sun system. This is due to it appearing to be just a rock, although there is much more than that. It is widely hated due to the opinion on scientists. A quote, which has been debated by critics, is down below.',
						'"Doug, are you KIDDING ME? Why can\'t this damn planet make VOLCANOES already! I want to see some action, not a dead dirtball of a planet! I don\'t even want to call it a planet, it\'s just a rock. It has absolutely no value to my research."',
						' - <a href="index.html?p=lakys" class="n">Dr. Lakys</a>'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "pilf":
			pageTemplate({ // First!
				name: 'Pilf',
				file: ['pilf.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['Piffol Rings']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Cuboid Terrestrial']
				}, {
					name: 'Life',
					info: ['Cheese Flies', 'Cheese Moss']
				}],
				introText: [
					'Pilf is the third planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, after <a href="index.html?p=doug" class="y">Doug</a> and before <a href="index.html?p=ert" class="y">Ert</a> and <a href="index.html?p=george" class="y">George</a>. Pilf\'s most iconic feature is its weird shape, being that of a sharp cube, as opposed to the traditionally smooth shape of other planets. Pilf can be seen on Ert at the early hours of night, due to its relative closeness and vibrant colors, appearing as a dot in the sky. With binoculars, the full planet can be seen, however. The distance from the center of a side to the edge of a face is a seventy-fifth of the diameter of the Hot Sun.',
					'<img src="images/pilf_ringless.png" alt="pilf_ringless.png" width="100" height="100" class="pixel" style="float: right; background-color: #555555;"></img>',
					'Pilf is made out of a silicon-based material, although it has been observed to be less dense than most other planets. The purple color on Pilf\'s surface is theorized to be partially organic. There are also oceans on Pilf.',
					'The term for describing something related to Pilf is Piian.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Pilf is a Cuboid Terrestrial planet that is made up of a silicon-based material, although it is less dense than usual. The planet also could have partially organic material that makes up its purple color. On each face, there is a pool of liquid, that has been confirmed to be highly corrosive. Prior attempts to extract the liquid have lead to each probe disintegrating due to the liquid. Life is theorized to exist in the liquid, in the form of highly resistant bacteria, although this is unconfirmed. Each side seems to have its own life, with the only universal thing between each side is that they\'re covered in moss that tastes like cheese, and flies that consume the cheese.',
						'<img src="images/pilf_atmosphere.png" alt="pilf_atmosphere.png" width="100" height="100" class="pixel" style="float: right; background-color: #555555;"></img>',
						'Despite the planet\'s cuboid shape, the atmosphere takes on the shape of its gravity, which is still spherical. The atmosphere bulges around each face, leaving the corners exposed to the near vacuum of space. The atmosphere has a greenish tint, similar to the bodies of liquid on each face. To the right is a diagram, explaining the atmosphere in greater detail.',
						'Pilf shares its cuboid shape with <a href="index.html?p=doug" class="y">Doug</a>\'s only satellite, H.'
					]
				}, {
					name: 'Satellites',
					info: [
						'<img src="images/piffol_rings.png" alt="piffol_rings.png" width="100" height="100" class="pixel" style="float: right; background-color: #555555;"></img>',
						'<h3>Piffol Rings</h3>',
						'Pilf\'s only satellites are the Piffol Rings, a collection of ring like objects that surround the planet at a 30 degree angle. Pilf is one of the only two planets with a ring system, the other one being <a href="index.html?p=aeiou" class="y">Aeiou</a>. Each Piffol Ring is made up of a bunch of tightly packed globuals of liquids, that seem to have the same consistancy of custard. Each ring has a different shade of color, ranging from a light orange to a deep purple, all of which are usually very saturated. There are seven confirmed rings, each one named after flavors of cheese. The reason why the ring system is named the Piffol Rings is that Piffol is a corruption of the word Piffle, which means nonsense.'
					]
				}, {
					name: 'Life',
					info: [
						'<h3>Cheese Flies</h3>',
						'Cheese Flies are flying animals that are confirmed to exist on Pilf. They are large arthropods, with a wingspan of 2 feet, and a body length of 4 feet. Cheese Flies only consume Cheese Moss, which nourishes their body enough to keep on living.',
						'<h3>Cheese Moss</h3>',
						'Cheese Moss is a moss like plant, which grows on the purple material on Pilf, close by to the corrosive liquid, seemingly using the liquid as a food source. Once every 4 days, the Cheese Moss produces a hard transparent substance with queso inside of it, which has been colloquially called Bone Cheese by scientists. The purpose of the bone cheese is unknown.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "ert":
			pageTemplate({
				warning: 'quality',
				name: 'Ert',
				file: ['ert.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>', '<a href="index.html?p=george" class="y">George (Binary System)</a>']
				}, {
					name: 'Satellites',
					info: ['<a href="index.html?p=george" class="y">George (Binary System)</a>', '<a href="index.html?p=perpahedron" class="n">Perpahedron (Artificial)</a>']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Terrestrial']
				}, {
					name: 'Life',
					info: ['Reegs', 'Polygons', 'And More']
				}],
				introText: [
					'Ert is the fourth planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, sharing this position with <a href="index.html?p=george" class="y">George</a>, after <a href="index.html?p=pilf" class="y">Pilf</a> and before <a href="index.html?p=cea" class="y">Cea</a>. Ert is notable, being one of the only two planets in a binary system, sharing this feature with George. Ert is also the planet with the second most diversity of life, behind George, and also has some of the most "intelligent" inhabitants. Ert\'s sentient life boasts technology such as televisions, giant tungsten cubes, and the Perpahedron, but it is by no means able to take advantage of the planets around it, despite lifeforms being able to live on other planets. Ert is about one seventieth of the size of the Hot Sun.',
					'The term for describing something related to Ert is Ertian.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Ert is a Terrestrial planet that is made up of a silicon-based material, covered in oceans of water. A day on Ert lasts exactly 1 Ert day, and a year on Ert lasts exactly Ert 1 year. How useful is that? Very useful, according to scientists, probably smoking bread. Yes, smoking bread is possible on Ert.',
						'<h3>Appearance</h3>',
						'Ert is a terrestrial planet covered in vast oceans of water. It features several continents and a bluish atmosphere. It is roughly spherical in shape. Colors consist of various blues and greens, a signature look akin to its smaller twin George. Some whites and browns are present as well. Ert also has an atmosphere visible as a bluish glow tightly wrapped around its body visible when illuminated. Ert\'s tilt is around 0.5451523 radians (31.234928 degrees). Despite MANY claims that Ert\'s shape should be a torus, it is in fact a sphere (but a slightly squashed).',
						'<h3>Geography</h3>',
						'Ert has distinct land masses suspended by large oceans. About 76% of its surface is covered in oceans with varying depths on average of 1.5 kilometers deep. The remaining 24% land depicts a diverse landscape of mountains, plains, and deserts to name a few. There are four major continents on Ert: Northland, Southland, Eastland, and Weastland. Only the first two listed are depicted in the comics of Aeroventures and Polyventures, and little is mentioned of the others.',
						'<h3>Atmosphere and Climate</h3>',
						'Ert\'s temperature is cooler than George by a few degrees. Its tilt causes seasonal shifts throughout its orbit around the Hot Sun. The highest recorded temperature on Ert 316.15 degrees kelvin, and the coldest is 177.15 degrees kelvin. Some claims were made of temperatures capable of melting rock, but that was debunked after careful reevaluation of the study being made on a volcano.',
						'Ert has a breathable atmosphere consisting of nitrogen and oxygen. There are trace amounts of carbon dioxide and a variable amount of water vapor. There\'s also a miniscule amount of Nagic in the form of aerosols.',
						'Ert\'s atmosphere is capable of a water cycle, which involves water evaporating, having a disco party in the clouds, and then falling asleep, heading back towards the ground. Obviously that isn\'t exactly how it goes but it\'s close enough.',
						'<h3>Internal Structure</h3>',
						'Ert has volcanism on its surface, suggesting an active interior and a molten core. Its surface is differentiated by many large land masses, which is likely an indicator of plate tectonics. Ert is the fourth densest planet in the Hot Sun system, preceding George, <a href="index.html?p=grene" class="y">Grēne</a>, and <a href="index.html?p=the" class="y">The</a>.',
						'Ert\'s interior is differentiated by density - lighter material on its surface and denser metallic materials towards its core. The heat inside is generated by high pressures and decay of radioactive elements.',
						'The core of Ert is said to be rich in Yolktonium, a sought after metal for forging some of the strongest materials in the world. In <a href="../comics/index.html?c=12-1" class="c">Aeroventures 12, Part 1</a>, <a href="index.html?p=nutstradamnus" class="n">Nutstradamnus</a> attempts to drill towards the core in order to obtain it.',
						'<h3>Magnetic Field</h3>',
						'Ert has a robust magnetic field strengthened by interactions with George. It is strong enough to deflect solar radiation and thus protecting the two worlds. Despite its strength it is nowhere near as strong as the fields on <a href="index.html?p=mac" class="y">Mac</a>, The, and <a href="index.html?p=aeiou" class="y">Aeiou</a>. Strangely, its “north” magnetic pole lays exactly on the same path as the Island of No Escape.',
						'Ert\'s interaction with solar radiation allows the formation of auras, which is seen as a ring on the north and south magnetic poles, which to clarify is on the equator.'
					]
				}, {
					name: 'Satellites',
					info: [
						'<h3>George</h3>',
						'<img src="images/george.png" alt="george.png" width="100" height="100" class="pixel" style="float: right; background-color: #555555;"></img>',
						'George is Ert\'s twin. George and Ert rotate around each other, and are tidally locked with one another. George has more land relative to Ert, and harbors surprisingly more life. It also harbors Ozark, the entity that inspired the Dint Can\'s mascot.',
						'<img src="images/perpahedron.png" alt="perpahedron.png" width="300" height="300" class="pixel" style="float: right; background-color: #555555;"></img>',
						'<h3>Perpahedron</h3>',
						'The Perpahedron is an artificial satellite, constructed by Daktor and a group of scientists. The purpose of The Perpahedron is unknown, although suggestions for its purpose include being a gigantic multitool, a space mansion, and an overcomplicated mayonnaise jar. The Perpahedron has a large amount of tools, such as thrusters, speakers, and a giant tungsten cube attached by a nylon string.'
					]
				}, {
					name: 'Life',
					info: [
						'Ert consists of an uncountable variety of life in many different phylums, but we counted those that only matter. Of course there are much more than listed below, but we just don\'t feel like explaining what\'s already obvious to most visitors. Do it yourself if you\'re so worried about the state of every single mushroom. To summarize - plants, animals, fungi, and giant protists are present all over. ',
						'<h3>Reegs</h3>',
						'Reegs are creatures that are most commonly blue. They feature two legs, two eyes, and sometimes a nose which can be used for attack, defense, as utilities, and more. Examples of notable reegs are <a href="index.html?p=aero" class="y">Aero</a>, <a href="index.html?p=lakys" class="n">Lakys</a>, <a href="index.html?p=archie" class="n">Archie</a>, <a href="index.html?p=aposteel" class="n">Aposteel</a>, and <a href="index.html?p=the" class="n">Royale</a>. Reegs are a prominent sentient species capable of many (and not so bright) things. They share their dominance to the Polygons.',
						'<h3>Polygons</h3>',
						'Polygons are simple geometric creatures infused with Nagic. They feature stick legs and large eyes. They come in many colors, shapes, and sizes. Their society is built on the type of regular polygon, such as a square or octagon. Examples of notable polygons are <a href="index.html?p=pon" class="n">Pon</a>, <a href="index.html?p=larry-pv" class="n">Larry</a>, <a href="index.html?p=beth" class="n">Beth</a> and <a href="index.html?p=vinny" class="n">Vinny</a> (although in technicality Pon, Vinny, and Beth are artificial creations). Like reegs, Polygons are prominent and capable of doing many (and much more brighter) things.',
						'<h3>Spirons</h3>',
						'Spirons are subterranean spider-like inhabitants featuring coiled appendages and four eyes. They inhabit most of the interior of Ert\'s crust, appearing only very recently in history. Examples of notable spirons are <a href="index.html?p=coylstone" class="n">Coyl Stone</a>, Boomerang, The Great Helix, and Wallflower.',
						'<h3>Florodites</h3>',
						'Florodites are plant-like hybrids that live in small detached islands living together in tribes. They have the unique property of photosynthesising. Other than that they are unfortunately shoved aside by bigger factions.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "george":
			pageTemplate({
				warning: 'stub',
				name: 'George',
				file: ['george.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>', '<a href="index.html?p=ert" class="y">Ert (Binary System)</a>']
				}, {
					name: 'Satellites',
					info: ['<a href="index.html?p=ert" class="y">Ert (Binary System)</a>', 'Damocles']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Terrestrial']
				}, {
					name: 'Life',
					info: ['Cows', 'Ozark', 'Plushrooms', 'And More']
				}],
				introText: [
					'George is the fourth planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, sharing this position with <a href="index.html?p=ert" class="y">Ert</a>, after <a href="index.html?p=pilf" class="y">Pilf</a> and before <a href="index.html?p=cea" class="y">Cea</a>.'
				],
				endnav: 'planet'
			});
			break;
		case "cea":
			pageTemplate({
				warning: 'stub',
				name: 'Cea',
				file: ['cea.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['Numerous Mines (52 confirmed)']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Ocean']
				}, {
					name: 'Life',
					info: ['Unknown']
				}],
				introText: [
					'Cea is the fifth planet from the <a href="index.html?p=hotsun" class="y">Hot Sun</a>, after <a href="index.html?p=ert" class="y">Ert</a> and <a href="index.html?p=george" class="y">George</a> and before <a href="index.html?p=ternary" class="y">The Ternary</a>.'
				],
				endnav: 'planet'
			});
			break;
		case "ternary":
			pageTemplate({
				warning: 'stub',
				name: 'The Ternary',
				file: ['ternary.png'],
				dims: ['330', '330'],
				caption: 'Depicted from far away, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>, Each Other']
				}, {
					name: 'Satellites',
					info: ['Each Other']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Dwarf Planets']
				}, {
					name: 'Life',
					info: ['The Trio of Broom']
				}],
				introText: [
					'The Ternary is the name for a collective of three dwarf planets, named Dot, Otd, and Tod. They are located between <a href="index.html?p=cea" class="y">Cea</a> and <a href="index.html?p=mac" class="y">Mac</a>.'
				],
				categories: [{
					name: 'sample',
					info: [
						'text'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "mac":
			pageTemplate({
				name: 'Mac',
				file: ['mac.png', 'pixel'],
				dims: ['330', '237.5'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['<a href="index.html?p=wop" class="y">World of Pain</a>, Dough']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Gas Giant']
				}, {
					name: 'Life',
					info: ['Confirmed but Unknown']
				}],
				introText: [
					'Mac is the sixth planet from the <a href="index.html?p=hotsun" class="y">Hot Sun</a>, after <a href="index.html?p=ternary" class="y">The Ternary</a> and before <a href="index.html?p=aeiou" class="y">Aeiou</a>. It is the largest planet in the system. It is a gas giant, with a diameter that is a sixth and a half of the size of the Hot Sun, and has a prime vertical that is a sixth and three fourths of the size of the Hot Sun. Due to its size, it is visible from <a href="index.html?p=ert" class="y">Ert</a>, and is even large enough to cast shadows on most of the Terrestrial planets, despite being visibly squashed on the vertical axis.',
					'Mac is mostly composed of Hydrogen, being in the form of gas and plasma, and Helium, with a good amount of Iodine and Neon, along with a small amount of other materials and elements. Due to Mac\'s rotation, the planet has a huge bulge on the horizon, experiencing a day once every 3.5 hours. Mac orbit lies inside of an asteroid belt.',
					'The term for describing something related to Mac is Donian.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Mac is a gas giant, primarily composed of Hydrogen, Helium, Iodine, and Neon in a gaseous form, and Hydrogen in the form of Plasma due to the heat generated from its fast spin. Mac has strands of elements, due to its fast spin seperating them. Most of the gaseous hydrogen is placed at the poles, and the plasmatic hydrogen is mostly placed near the equator, although some parts are seperated at different areas. Mac features a large plasma storm that swirls, moving in the opposite direction of the planet, creating enough energy to sustain the plasma.',
						'Near the poles is a gigantic rod that goes through the entirety of the planet, small enough to not be seen from a distance but big enough to hold a civilization. No such civilization has been found, however. Said pole has been theorized to be made out of Titanium and Iron, in the form of steel cables around a tube, with a shell of titanium. It is also theorized that <a href="index.html?p=aeiou" class="y">Aeiou</a>\'s satellite, Cdfqrszt, also is made from the same material.',
						'Mac, due to the copious amounts amounts of Neon, glows a deep orange.'
					]
				}, {
					name: 'Satellites',
					info: [
						'<img src="images/wop.png" alt="wop.png" width="100" height="87.14" class="pixel" style="float: right; background-color: #555555;"></img>',
						'<h3>World of Pain</h3>',
						'text',
						'text',
						'<img src="images/dough.png" alt="dough.png" width="100" height="85.07" class="pixel" style="float: right; background-color: #555555;"></img>',
						'<h3>Dough</h3>',
						'text',
						'text'
					]
				}, {
					name: 'Interactions With World of Pain',
					info: [
						'Mac\'s satellite is <a href="index.html?p=wop" class="y">World of Pain</a>, which has a history with the planet. Originally, World of Pain was a minor object close to the Hot Sun, with it\s own miniature satellite, which has been named World of Pain JR. After being ejected from the inner parts of the system by a solar flare, World of Pain JR had falled into the gasses of Mac, leading to World of Pain destroying all of Mac\'s old satellites, creating an asteroid belt. Once a year, World of Pain attempts to punch Mac, which either leads in World of Pain either sinking in the gas, or being shocked by plasma storms.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "wop":
			pageTemplate({
				warning: 'stub',
				name: 'World of Pain',
				file: ['wop.png', 'pixel'],
				dims: ['330', '287.57'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=mac" class="y">Mac</a>']
				}, {
					name: 'Satellites',
					info: ['None']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Terrestrial Object']
				}, {
					name: 'Life',
					info: ['None']
				}],
				endnav: 'planet'
			});
			break;
		case "aeiou":
			pageTemplate({
				warning: 'stub',
				name: 'Aeiou',
				file: ['aeiou.png', 'pixel'],
				dims: ['330', '293.79'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['Cdfqrszt', 'Heideph']
				}, {
					name: 'Name Origin',
					info: ['Named by the Alphabet Business Concern after concerns over <a href="index.html?p=the" class="y">The</a>.']
				}, {
					name: 'Classification',
					info: ['Gas Giant']
				}, {
					name: 'Life',
					info: ['None']
				}],
				introText: [
					'Aeiou is the seventh planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, after <a href="index.html?p=xystload" class="n">Xystload</a> and before <a href="index.html?p=the" class="y">The</a>.',
					'The term for referring to something related to Aeiou is Aeiouian.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Sample text.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "the":
			pageTemplate({
				warning: 'stub',
				name: 'The',
				file: ['the.png', 'pixel'],
				dims: ['330', '334.31'],
				caption: 'An image of The, taken through intense conditions, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['Unknown']
				}, {
					name: 'Name Origin',
					info: ['Named by an unknown organization after the Alphabet Business Concern attempted to name it Article.']
				}, {
					name: 'Classification',
					info: ['Trans Aeiouian']
				}, {
					name: 'Life',
					info: ['Unknown']
				}],
				introText: [
					'The is the eighth planet in the <a href="index.html?p=hotsun" class="y">Hot Sun</a> system, after <a href="index.html?p=xystload" class="n">Xystload</a>.'
				],
				endnav: 'planet'
			});
			break;
		case "coldsun":
			pageTemplate({
				warning: 'stub',
				name: 'Cold Sun',
				file: ['cold_sun.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=taiberaque" class="y">Taiberaque</a>']
				}, {
					name: 'Satellites',
					info: [
						'None.'
					]
				}, {
					name: 'Name Origin',
					info: ['It\'s cold.']
				}, {
					name: 'Classification',
					info: ['Planet']
				}, {
					name: 'Life',
					info: [
						'<a href="index.html?p=nyork" class="y">Nyork</a>\'s Species',
						'<a href="index.html?p=royale" class="y">Royale</a>',
						'<a href="index.html?p=larry" class="y">Larry</a>'
					]
				}],
				introText: [
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Sample text.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "taiberaque":
			pageTemplate({
				warning: 'stub',
				name: 'Taiberaque',
				file: ['taiberaque.png', 'pixel'],
				dims: ['330', '330'],
				caption: 'Pictured in false color due to <a href="index.html?p=ert" class="y">Ert</a>\'s atmosphere, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun (Binary System)</a>']
				}, {
					name: 'Satellites',
					info: [
						'<a href="index.html?p=coldsun" class="y">Cold Sun</a>',
						'<a href="index.html?p=gigantrax" class="n">Gigantrax</a>',
						'<a href="index.html?p=hotsun" class="y">Hot Sun (Binary System)</a>'
					]
				}, {
					name: 'Name Origin',
					info: ['An amalgamation of all the names suggested.']
				}, {
					name: 'Classification',
					info: ['White Dwarf']
				}, {
					name: 'Life',
					info: [
						'Winners..?'
					]
				}],
				introText: [
					'Text.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Sample text.'
					]
				}],
				endnav: 'planet'
			});
			break;
		case "tackpenguin":
			pageTemplate({
				name: 'You',
				file: ['bro.png'],
				dims: ['330', '330'],
				caption: 'bro look away',
				heading: 'seriously look away',
				navbox: [{
					name: 'can you don\'t',
					info: [
						'i will rearrange your',
						'your joints stop'
					]
				}, {
					name: 'bro',
					info: [
						'yes yuo, stop'
					]
				}],
				introText: [
					'listen bro, im gonna tell you a secret. its a big good secret so listen closely. put your ears on and turn on yuor heads.'
				],
				categories: [{
					name: 'da secrit',
					info: [
						'yuor mom.'
					]
				}, {
					name: 'aero d venture is dumb',
					info: [
						'i saw him fall down the stares yesterday. idoit.'
					]
				}, {
					name: 'gonna    ?',
					info: [
						'bbrn loading ass cannon'
					]
				}, {
					name: 'stop',
					info: [
						'look away, are u a doug?????'
					]
				}, {
					name: 'read the navbox again',
					info: [
						'lokkk'
					]
				}, {
					name: 'did yuo know?',
					info: [
						'the dinosaur page has exactly 5000 A\'s. i was there, it is true.'
					]
				}, {
					name: '           ',
					info: [
						'i don trust birds. the have hollow bones. what secrets do they keep???'
					]
				}, {
					name: 'smwc',
					info: [
						'wait;;',
						'are you mario?'
					]
				}]
			});
			break;
		case "nine":
			pageTemplate({
				warning: 'forbidden',
				name: 'No.',
				introText: [
					'You\'re not ready.'
				]
			});
			break;
		case "dino":
			let scream = '';
			for (let i = 0; i < 5000; i++) scream += 'A';
			pageTemplate({
				name: 'How to stop satellite. by Dinosaurs',
				introText: [`${scream}`]
			});
			break;
		default:
			let quoteNumber = Math.floor(Math.random() * 7);
			console.log(quoteNumber);
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
			pageTemplate({
				name: 'Oops, a tasty 404!',
				introText: ['This page doesn\'t seem to exist, sadly... ' + quote],
				endnav: 'chars planet'
			});
			break;
	}
}

let page = new URLSearchParams(window.location.search);
page = page.get('p');
if (page == null) page = "main";
generatePage(page);
