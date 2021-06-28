let pageData = {
	name: '<a href="?p=greme" class="no_style">Gr\u0113ne</a>',
	navbox: {		
		file: ['grene.png', 'pixel'],
		symbol: true,
		caption: 'Illustration made by Gramiatar.',
		info: [{
			heading: 'Designations',
			info: [{
				name: 'Orbits',
				info: ['<a href="?p=hotsun">Hot Sun</a>']
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
		}]
	},
	introText: [
		() => {
			greneAddMacron([
				'Grene is the first planet in the <a href="?p=hotsun">Hot Sun</a> system, before <a href="?p=doug">Doug</a>. It is about a fifty-fifth of the size of the Hot Sun. Grene can barely be seen from <a href="?p=ert">Ert</a>, looking like a sun spot due to how close it is to the Hot Sun, but since it revolves around the Hot Sun rather quickly, it looks like a sun spot that moves extremely quickly. It can only be observed by special means, specifically in day with special equipment.',
				'Grene\'s surface is mostly composed of silicon and an unknown material, with the side of the planet facing the Hot Sun consisting of molten silicon. The atmosphere contains evaporated silicon, along with another unknown material that causes a cycle similar to the water cycle on <a href="?p=ert">Ert</a> and <a href="?p=george">George</a>. Said atmosphere is being stripped off of the planet by the solar wind, being blasted off, leaving a trail that constantly leaves the planet, facing away from the Hot Sun. A year on Grene lasts 20 hours. Days can not be measured due to the planet being tidally locked to the Hot Sun.',
				'The term for describing something related to Grene is Grenian.'
			]);
		}
	],
	categories: [{
		name: 'Characteristics',
		info: [
			() => {
				greneAddMacron([
					'Grene is a Chthonian planet that mainly consists of a silicon-based material, along with a multitude of undiscovered elements, although aluminum is confirmed due to probes being sent there and promptly being melted by how hot the planet is. Most attempts of uncovering more elements only makes us more sure that aluminum is present on Grene. Grene is tidally locked to the Hot Sun, meaning that one side of the planet always faces it. Due to solar winds hitting the atmosphere, the atmosphere is physically stripped from the planet, causing a trail that affects Doug, and maybe even <a href="?p=pilf">Pilf</a>.',
					'Due to the circulation in the atmosphere, there are strands of an unknown material that glows a bright blue. From far away, this causes the planet to appear as if it were the color green.',
					'Pictured on the bottom of the provided image is a storm, which has been colloquially called the Great Pants Color Spot.'		
				]);
			}
		]
	}, {
		name: 'Interactions With the Hot Sun',
		info: [
			() => {
				greneAddMacron([
					'Grene orbits around the Hot Sun very closely, causing it to be tidally locked and causing the silicon-based material on Grene to melt, and even evaporate into its ever diminishing atmosphere. It is theorized that the evaporated silicon material travels along the visible blue currents on the planet, and raining back down on the other side. Due to the molten silicon, the solid rock on the side facing away from the Hot Sun travels back to the hot side of the planet.'
				]);
			}
		]
	}, {
		name: 'Interactions With Doug',
		info: [
			() => {
				greneAddMacron([
					'Doug orbits closely to the expelled atmosphere of Grene, which, over millions of years, has turned it to the brown shade we know it as today.'
				]);
			}
		]
	}],
	endnav: 'planet'
};
