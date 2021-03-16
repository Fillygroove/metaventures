let imageSize = {
	large: 30,
	norm: 25,
	small: 20
};

endnavs.push({
	heading: 'The Bisolar System',
	categories: [{
		category:
			`<a href="index.html?p=hotsun">
				<img src="images/hot_sun.png" height="${imageSize.large}">
				Ommadawn
			</a> System`,
		info: [{
			name: 'Inner System',
			info: [
				// Grene
				`<a href="index.html?p=grene">
					<img src="images/grene.png" height="${imageSize.norm}"></img>
					Grene
				</a>`,
				// Doug
				`<a href="index.html?p=doug">
					<img src="images/doug.png" height="${imageSize.norm}">
					Doug
				</a>
				(<small>
					<img src="images/h.png" height="${imageSize.small}">
					H
				</small>)`,
				// Pilf
				`<a href="index.html?p=pilf">
					<img src="images/pilf_ringless.png" height="${imageSize.norm}">
					Pilf
				</a>`,
				// Ert
				`<a href="index.html?p=ert">
					<img src="images/ert.png" height="${imageSize.norm}">
					Ert
				</a>
				(<small>
					<a href="index.html?p=perpahedron">
						Perpahedron
					</a>
				</small>)`,
				// George
				`<a href="index.html?p=george">
					<img src="images/george.png" height="${imageSize.norm}">
					Georg</a><a href="images/george_real.png" class="y">e</a>
				(<small>
					<img src="images/damocles.png" height="${imageSize.small}">
					Damocles
				</small>)`,
				// Baeg
				`<a href="index.html?p=baeg">
					<img src="images/baeg.png" height="${imageSize.norm}">
					Baeg
				</a>`
			]
		}, {
			name: 'Outer System',
			info: [
				// Mac
				`<a href="index.html?p=mac">
					<img src="images/mac.png" height="25">
					Mac
				</a>
				(<small>
					<a href="index.html?p=wop">
						<img src="images/wop.png" height="20">
						World of Pain
					</a>
				</small>)`,
				// Hazel
				`<a href="index.html?p=hazel">
					<img src="images/hazel.png" height="${imageSize.norm}">
					Hazel
				</a>`,
				// Aeiou
				`<a href="index.html?p=aeiou">
					<img src="images/aeiou.png" height="${imageSize.norm}">
					Aeiou
				</a>
				(<small>
					Cdfqrszt &bull; Heideph
				</small>)`,
				// The
				`<a href="index.html?p=the">
					<img src="images/the.png" height="${imageSize.norm}">
					The
				</a>`
			]
		}]
	}, {
		category: 	
			`<a href="index.html?p=taiberaque">
				Taiberaque
			</a> System`,
		info: [{
			name: 'Inner System',
			info: [
				`<a href="index.html?p=coldsun">
					<img src="images/cold_sun.png" height="${imageSize.norm}">
					Cold Sun
				</a>`
			]
		}, {
			name: 'Outer System',
			info: [
				`<a href="index.html?p=uling">
					Uling
				</a>`
			]
		}]
	}, {
		category: 'Misc',
		info: [{
			name: '<a href="index.html?p=dwarf">Dwarf Planets</a>',
			info: [
				`<a href="index.html?p=dwarf#ternary">
					BPM-1-2-3 (The Ternary)
				</a>`,
				`<a href="index.html?p=dwarf#sphynx">
					BOT-1 (Sphynx)
				</a>`,
				`<a href="index.html?p=dwarf#blyu">
					BCU-1 (Blyu)
				</a>`,
				`<a href="index.html?p=dwarf#ayduno">
					BCU-2 (Ayduno)
				</a>`,
				`<a href="index.html?p=dwarf#objobj">
					BCU-3 (Object/Object)
				</a>`
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
