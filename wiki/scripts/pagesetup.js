function pageTemplate(page) {
	document.write(`
		<h1 style="font-family: Ubuntu;">${page.name}</h1>
		
		<hr>
	`);
	if (page.navbox !== undefined) {
		document.write(`
		<table class="infobox" style="width:22em">
			<caption>${page.name}</caption>
			<tbody>
				<tr>
					<td colspan="2" style="text-align:center">
						<img class="pixel" alt="${page.file}" src="./images/${page.file}" width="${page.dims[0]}" height="${page.dims[1]}">
						<div>
							<a>${page.caption}</a>
						</div>
					</td>
				</tr>
				<tr>
					<th colspan="2" style="">${page.heading}</th>
				</tr>
		`);
		for (let i = 0; i < page.navbox.length; i++) {
			document.write(`
				<tr>
					<th scope="row" style="max-width:11em;">
						<div style="display:inline-block; padding:0.1em 0;line-height:1.2em;">
							${page.navbox[i].name}
						</div>
					</th>
					<td>
						<div class="plainlist">
							<ul>
								<li>
									<span class="nowrap">
										${page.navbox[i].info.toString().replaceAll(",","</br>")}
									</span>
								</li>
							</ul>
						</div>
					</td>
				</tr>
			`);
		}
		document.write(`
				</tbody>
			</table>
		`);
	}
	
	if (page.introText != undefined) {
		for (let i = 0; i < page.introText.length; i++) {
			document.write(`
			<p>${page.introText[i]}</p>
			`);
		}
	}
	
	if (page.categories != undefined) {
		for (let i = 0; i < page.categories.length; i++) {
			document.write(`
				<h2>${page.categories[i].name}</h2>
				<hr>
			`);
			for (let j = 0; j < page.categories[i].info.length; j++) {
				document.write(`
					<p>${page.categories[i].info[j]}</p>
				`);
			}
		}
	}
	
	document.write(`
		</br>
		</br>
	`);
}

function generatePage(page) {
	switch (page) {
		case "main":
			pageTemplate({
				name: 'The Wiki',
				introText: ['Welcome to the official Aeroventures Wiki! Here, you can find pages about everything in the Aeroventures world so far. Reminder that the Wiki is still a huge work in progress, so expect pages to be empty.'],
				categories: [{
					name: 'Characters',
					info: [
						'<a href="index.html?p=aero" class="n">Aero</a>', 
						'<a href="index.html?p=archie" class="n">Archie</a>', 
						'<a href="index.html?p=lakys" class="n">Lakys</a>', 
						'<a href="index.html?p=aposteel" class="n">Aposteel</a>'
					]
				}, {
					name: 'Celestial Objects',
					info: [
						'<a href="index.html?p=hotsun" class="y">Hot Sun</a>',
						'<a href="index.html?p=grene" class="y">Grēne</a>',
						'<a href="index.html?p=doug" class="y">Doug</a>',
						'<a href="index.html?p=pilf" class="y">Pilf</a>',
						'<a href="index.html?p=ert" class="y">Ert</a>',
						'<a href="index.html?p=george" class="y">George</a>',
						'<a href="index.html?p=dough" class="y">Dough</a>',
						'<a href="index.html?p=mac" class="y">Mac</a>',
						'<a href="index.html?p=wop" class="y">World of Pain</a>',
						'<a href="index.html?p=aeiou" class="y">Aeiou</a>',
						'<a href="index.html?p=the" class="y">The</a>',
						'<a href="index.html?p=cea" class="y">Cea</a>',
						'<a href="index.html?p=coldsun" class="y">Cold Sun</a>',
						'<a href="index.html?p=flip" class="n">Flip</a>'
					]
				}]
			});
			break;
		case "hotsun":
			pageTemplate({
				name: 'Hot Sun',
				file: 'hotsun.png',
				dims: ['330', '330'],
				caption: 'Pictured in false color due to <a href="index.html?p=ert" class="y">Ert</a>\'s atmosphere, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=coldsun" class="y">Cold Sun</a>']
				}, {
					name: 'Satellites',
					info: [
						'<a href="index.html?p=grene" class="y">Grēne</a>',
						'<a href="index.html?p=doug" class="y">Doug</a>',
						'<a href="index.html?p=pilf" class="y">Pilf</a>',
						'<a href="index.html?p=ert" class="y">Ert</a>',
						'<a href="index.html?p=george" class="y">George</a>',
						'<a href="index.html?p=dough" class="y">Dough</a>',
						'<a href="index.html?p=mac" class="y">Mac</a>',
						'<a href="index.html?p=aeiou" class="y">Aeiou</a>',
						'<a href="index.html?p=the" class="y">The</a>',
						'<a href="index.html?p=cea" class="y">Cea</a>'
					]
				}, {
					name: 'Name Origin',
					info: ['It\'s hot.']
				}, {
					name: 'Classification',
					info: ['K-Type Star']
				}, {
					name: 'Life',
					info: ['None']
				}],
				introText: [
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Sample text.',
					]
				}]
			});
			break;
		case "grene":
			pageTemplate({
				name: 'Grēne',
				file: 'grene.png',
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
				}]
			});
			break;
		case "doug":
			pageTemplate({
				name: 'Doug',
				file: 'doug.png',
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
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
				}]
			});
			break;
		case "pilf":
			pageTemplate({
				name: 'Pilf',
				file: 'pilf.png',
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
					info: ['Unknown (See <a href="index.html?p=flip" class="n">Flip</a>)']
				}, {
					name: 'Classification',
					info: ['Cuboid Terrestrial']
				}, {
					name: 'Life',
					info: ['Cheese Flies']
				}]
			});
			break;
		case "ert":
			pageTemplate({
				name: 'Ert',
				file: 'ert.png',
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>', '<a href="index.html?p=george" class="y">George</a>']
				}, {
					name: 'Satellites',
					info: ['<a href="index.html?p=george" class="y">George (Binary System)</a>', '<a href="index.html?p=george" class="n">Perpahedron (Artificial)</a>']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Terrestrial']
				}, {
					name: 'Life',
					info: ['Reegs', 'Polygons', 'And More']
				}]
			});
			break;
		case "george":
			pageTemplate({
				name: 'George',
				file: 'george.png',
				dims: ['330', '330'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>', '<a href="index.html?p=ert" class="y">Ert</a>']
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
				}]
			});
			break;
		case "dough":
			pageTemplate({
				name: 'Dough',
				file: 'dough.png',
				dims: ['330', '280.75'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['Dot', 'Tod', 'Otd']
				}, {
					name: 'Name Origin',
					info: ['Unknown']
				}, {
					name: 'Classification',
					info: ['Torus Terrestrial']
				}, {
					name: 'Life',
					info: ['Bacteria']
				}]
			});
			break;
		case "mac":
			pageTemplate({
				name: 'Mac',
				file: 'mac.png',
				dims: ['330', '237.5'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['<a href="index.html?p=wop" class="y">World of Pain</a>']
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
					'Mac is the seventh planet from the <a href="index.html?p=hotsun" class="y">Hot Sun</a>, in between <a href="index.html?p=dough" class="y">Dough</a> and <a href="index.html?p=aeiou" class="y">Aeiou</a>. It is the largest planet in the system. It is a gas giant, with a radius that is a third of the size of the Hot Sun, and has a prime vertical that is a fourth of the size of the Hot Sun. Due to its size, it is visible from <a href="index.html?p=ert" class="y">Ert</a>, and is even large enough to cast shadows on most of the Terrestrial planets, despite being visibly squashed on the vertical axis.',
					'Mac is mostly composed of Hydrogen, being in the form of gas and plasma, and Helium, with a good amount of Iodine and Neon, along with a small amount of other materials and elements. Due to Mac\'s rotation, the planet has a huge bulge on the horizon, experiencing a day once every 3.5 hours. Mac orbit lies inside of an asteroid belt.',
					'The term for describing something related to Mac is Donian.'
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Mac is a gas giant, primarily composed of Hydrogen, Helium, Iodine, and Neon in a gaseous form, and Hydrogen in the form of Plasma due to the heat generated from its fast spin. Mac has strands of elements, due to its fast spin seperating them. Most of the gaseous hydrogen is placed at the poles, and the plasmatic hydrogen is mostly placed near the equator, although some parts are seperated at different areas. Mac features a large plasma storm that swirls, moving in the opposite direction of the planet, creating enough energy to sustain the plasma.',
						'Near the poles is a gigantic rod that goes through the entirety of the planet, small enough to not be seen from a distance but big enough to hold a civilization. No such civilization has been found, however. Said pole has been theorized to be made out of Titanium and Iron, in the form of steel cables around a tube, with a shell of titanium. It is also theorized that <a href="index.html?p=aeiou" class="y">Aeiou</a>\'s satellite, Cdfqrszt, also is made from the same material.'
					]
				}, {
					name: 'Interactions With World of Pain',
					info: [
						'Mac\s satellite is <a href="index.html?p=wop" class="y">World of Pain</a>, which has a history with the planet. Originally, World of Pain was a minor object close to the Hot Sun, with it\s own miniature satellite, which has been named World of Pain JR. After being ejected from the inner parts of the system by a solar flare, World of Pain JR had falled into the gasses of Mac, leading to World of Pain destroying all of Mac\'s old satellites, creating an asteroid belt. Once a year, World of Pain attempts to punch Mac, which either leads in World of Pain either sinking in the gas, or being shocked by plasma storms.'
					]
				}]
			});
			break;
		case "wop":
			pageTemplate({
				name: 'World of Pain',
				file: 'wop.png',
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
				}]
			});
			break;
		case "aeiou":
			pageTemplate({
				name: 'Aeiou',
				file: 'aeiou.png',
				dims: ['330', '293.79'],
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: ['Cdfqrszt']
				}, {
					name: 'Name Origin',
					info: ['Named by the Alphabet Business Concern after concerns over <a href="index.html?p=the" class="y">The</a>.']
				}, {
					name: 'Classification',
					info: ['Gas Giant']
				}, {
					name: 'Life',
					info: ['None']
				}]
			});
			break;
		case "the":
			pageTemplate({
				name: 'The',
				file: 'the.png',
				dims: ['330', '339.08'],
				caption: 'A mockup of what The could look like, illustration made by Gramiatar.',
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
					info: ['Unknown']
				}, {
					name: 'Life',
					info: ['Unknown']
				}]
			});
			break;
		case "cea":
			pageTemplate({
				name: 'Cea',
				file: 'cea.png',
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
				}]
			});
			break;
		case "coldsun":
			pageTemplate({
				name: 'Cold Sun',
				file: 'coldsun.png',
				dims: ['330', '330'],
				caption: 'Pictured in false color due to <a href="index.html?p=ert" class="y">Ert</a>\'s atmosphere, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
					name: 'Orbits',
					info: ['<a href="index.html?p=hotsun" class="y">Hot Sun</a>']
				}, {
					name: 'Satellites',
					info: [
						'<a href="index.html?p=flip" class="n">Flip</a>'
					]
				}, {
					name: 'Name Origin',
					info: ['It\'s cold.']
				}, {
					name: 'Classification',
					info: ['Star']
				}, {
					name: 'Life',
					info: ['None']
				}],
				introText: [
				],
				categories: [{
					name: 'Characteristics',
					info: [
						'Sample text.',
					]
				}]
			});
			break;
		case "dino":
			let scream = [];
			for (let i = 0; i < 5000; i++) scream.push('A');
			scream = scream.toString().replaceAll(',','');
			pageTemplate({
				name: 'How to stop satellite. by Dinosaurs',
				introText: [`${scream}`]
			});
			break;
		default: 
			pageTemplate({
				name: 'Oops, a tasty 404!',
				introText: ['This page doesn\'t seem to exist, sadly... Maybe it was destroyed by <a href="index.html?p=wop" class="y">World of Pain</a>...']
			});
			break;
	}
}

let page = new URLSearchParams(window.location.search);
page = page.get('p');
if (page == null) page = "main";
generatePage(page);
