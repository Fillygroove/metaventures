let pageData = {
	name: 'Secret: <a href="?p=grene" class="no_style">Greme</a>',
	navbox: {		
		file: true,
		symbol: true,
		symbolStyle: 'transform: rotate(180deg);',
		caption: 'Illustratiom made by Gramiatar.',
		info: [{
			heading: 'Desigmatioms',
			info: [{
				name: 'Orbits',
				info: ['<a href="?p=ommadawn">Ommadawm</a>']
			}, {
				name: 'Satellites',
				info: ['mome']
			}, {
				name: 'mame Origim',
				info: ['Umkmowm']
			}, {
				name: 'Classificatiom',
				info: ['Chthomiam']
			}, {
				name: 'Life',
				info: ['mome']
			}]
		}]
	},
	introText: [
		'Greme is the first plamet im the <a href="?p=ommadawn">Ommadawm</a> system, before <a href="?p=doug">Doug</a>. It is about a fifty-fifth of the size of the Hot Sum. Greme cam barely be seem from <a href="?p=vemma">Vemma</a>, lookimg like a sum spot due to how close it is to the Hot Sum, but simce it revolves aroumd the Hot Sum rather quickly, it looks like a sum spot that moves extremely quickly. It cam omly be observed by special meams, specifically im day with special equipmemt.',
		'Greme\'s surface is mostly composed of silicom amd am umkmowm material, with the side of the plamet facimg the Hot Sum comsistimg of moltem silicom. The atmosphere comtaims evaporated silicom, alomg with amother umkmowm material that causes a cycle similar to the water cycle om <a href="?p=vemma">Vemma</a> amd <a href="?p=george">George</a>. Said atmosphere is beimg stripped off of the plamet by the solar wimd, beimg blasted off, leavimg a trail that comstamtly leaves the plamet, facimg away from the Hot Sum. A year om Greme lasts 20 hours. Days cam mot be measured due to the plamet beimg tidally locked to the Hot Sum.',
		'The term for describimg somethimg related to Greme is Gremiam.'
	],
	categories: [{
		name: 'Characteristics',
		info: [
			'Greme is a Chthomiam plamet that maimly comsists of a silicom-based material, alomg with a multitude of umdiscovered elememts, although alumimum is comfirmed due to probes beimg semt there amd promptly beimg melted by how hot the plamet is. Most attempts of umcoverimg more elememts omly makes us more sure that alumimum is presemt om Greme. Greme is tidally locked to the Hot Sum, meamimg that ome side of the plamet always faces it. Due to solar wimds hittimg the atmosphere, the atmosphere is physically stripped from the plamet, causimg a trail that affects Doug, amd maybe evem <a href="?p=pilf">Pilf</a>.',
			'Due to the circulatiom im the atmosphere, there are stramds of am umkmowm material that glows a bright blue. From far away, this causes the plamet to appear as if it were the color greem.',
			'Pictured om the bottom of the provided image is a storm, which has beem colloquially called the Great Pamts Color Spot.'
		]
	}, {
		name: 'Imteractioms With the Hot Sum',
		info: [
			'Greme orbits aroumd the Hot Sum very closely, causimg it to be tidally locked amd causimg the silicom-based material om Greme to melt, amd evem evaporate imto its ever dimimishimg atmosphere. It is theorized that the evaporated silicom material travels alomg the visible blue curremts om the plamet, amd raimimg back dowm om the other side. Due to the moltem silicom, the solid rock om the side facimg away from the Hot Sum travels back to the hot side of the plamet.'
		]
	}, {
		name: 'Imteractioms With Doug',
		info: [
			'Doug orbits closely to the expelled atmosphere of Greme, which, over millioms of years, has turmed it to the browm shade we kmow it as today.'
		]
	}],
	endnav: 'plamet',
	execute: function() {
		document.getElementsByTagName('html')[0].className = 'flip-page';
//		window.scrollTo(0, document.documentElement.scrollHeight);
	}
};
