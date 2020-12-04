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
						<img alt="${page.file}" src="./images/${page.file}" width="330" height="330">
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
}

function generatePage(page) {
	switch (page) {
		case "main":
			document.write(`
			<h1 style="font-family: Ubuntu;">The Wiki</h1>
			
			<hr>

			<p>Welcome to the official Aeroventures Wiki! Here, you can find pages about everything in the Aeroventures world so far. Reminder that the Wiki is still a huge work in progress, so expect pages to be empty.</p>
			
			<h2>Characters</h2>
			<p>
				<a href="index.html?p=aero" class="n">Aero</a></br>
				<a href="index.html?p=archie" class="n">Archie</a></br>
				<a href="index.html?p=lakys" class="n">Lakys</a></br>
				<a href="index.html?p=aposteel" class="n">Aposteel</a></br>
			</p>
			
			<h2>Planets</h2>
			<p>
				<a href="index.html?p=grene" class="y">Grene</a></br>
				<a href="index.html?p=doug" class="y">Doug</a></br>
				<a href="index.html?p=pilf" class="y">Pilf</a></br>
				<a href="index.html?p=ert" class="y">Ert</a></br>
				<a href="index.html?p=george" class="y">George</a></br>
				<a href="index.html?p=dough" class="y">Dough</a></br>
				<a href="index.html?p=mac" class="y">Mac</a></br>
				<a href="index.html?p=wop" class="y">World of Pain</a></br>
				<a href="index.html?p=aeiou" class="y">Aeiou</a></br>
				<a href="index.html?p=the" class="y">The</a></br>
				<a href="index.html?p=cea" class="y">Cea</a></br>
			</p>
			
			</br>
			</br>
			`);
			break;
		case "grene":
			pageTemplate({
				name: 'Grenē',
				file: 'grene.png',
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				}]
			});
			break;
		case "wop":
			pageTemplate({
				name: 'World of Pain',
				file: 'wop.png',
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'A mockup of what The could look like, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
				caption: 'Pictured in natural color, illustration made by Gramiatar.',
				heading: 'Designations',
				navbox: [{
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
		case "dino":
			pageTemplate({
				name: 'How to stop satellite. by Dinosaurs',
			});
			let scream = [];
			for (let i = 0; i < 5000; i++) scream.push('A');
			scream = scream.toString().replaceAll(',','');
			document.write(`
				<p>${scream}</p>
				</br>
				</br>
			`);
			break;
		default: 
			pageTemplate({
				name: 'Oops, a tasty 404!'
			});
			document.write(`
				<p>This page doesn't seem to exist, sadly... Maybe it was destroyed by <a href="index.html?p=wop" class="y">World of Pain</a>...</p>

				</br>
				</br>
			`);
			break;
	}
}

let page = new URLSearchParams(window.location.search);
page = page.get('p')
if (page == null) page = "main";
generatePage(page);
