const pageData = {
	name: 'Rodney Violet',
	warning: 'stub',
	navbox: {
		file: true,
		caption: 'Picture not taken, illustration made by Gramiatar.',
		info: [{
			heading: 'Designations',
			info: [{
				name: 'Species',
				info: ['Reeg']
			}, {
				name: 'Lives in',
				info: ['<a href="?p=vemma">Vemma</a>, in Yolktown.']
			}, {
				name: 'Character Status',
				info: ['Alive']
			}, {
				name: 'Character Type',
				info: ['Protagonist']
			}, {
				name: 'Series',
				info: ['Aeroventures']
			}]
		}]
	},
	introText: [
		'Rodney is a supporting character of the Aeroventures comic series. In Aeroventures, Rodney is one of the four main protagonists, along with <a href="?p=aero">Aero</a>, <a href="?p=lakys">Lakys</a>, and <a href="?p=aposteel">Aposteel</a>.'
	],
	categories: [{
		name: 'Out of universe history',
		info: [
			'In the past, Rodney had a different design and was named Archie.'
		]
	}],
	endnav: 'chars'
};

makeButton({
	html: 'Rodney Rewind', 
	color: 'rodney-violet',
	link: './?p=main'
});
