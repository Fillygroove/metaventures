let pageData = {
	name: 'Ert',
	warning: 'quality',
	navbox: {
		file: true,
		symbol: true,
		caption: 'Illustration made by Gramiatar.</br>Northland and Southland are visible.',
		info: [{
			heading: 'Designations',
			info: [{
				name: 'Orbits',
				info: ['<a href="?p=hotsun">Ommadawn</a>', '<a href="?p=george">George (Binary System)</a>']
			}, {
				name: 'Satellites',
				info: ['<a href="?p=george">George (Binary System)</a>', '<a href="?p=perpahedron">Perpahedron (Artificial)</a>']
			}, {
				name: 'Name Origin',
				info: ['Unknown']
			}, {
				name: 'Classification',
				info: ['Terrestrial']
			}, {
				name: 'Inhabitants',
				info: ['Reegs', 'Polygons', 'Spirons','Florodites','SOPs']
			}]
		}, {
			heading: 'Music',
			info: [{
				embed: {
					track: '994171495',
					color: '7f7f7f'
				}
 			}]
		}]
	},
	introText: [
		() => {
			makeQuote({
				quote: 'Oort good :)',
				author: 'Anonymous <a href="?p=pilf">Sawnfly</a>, translated from Brainwave Analytics'
			});
		},
		'Ert is the fourth planet in the <a href="?p=hotsun">Ommadawn</a> system, sharing this position with <a href="?p=george">George</a>, after <a href="?p=pilf">Pilf</a> and before <a href="?p=baeg">Baeg</a>. Ert is the homeworld of Metaventures, with the majority of its settings being located on two of its four continents. It is an Earth-like analog, featuring striking similarities to it - as if we didn\'t have time to come up with an alien world. If a person were to be on Ert, they\'ll feel almost the same as they would feel on Earth, apart from the slightly increased gravity and risk of being mugged or teacupped by a couple of delinquent Reegs - or Polygons or whatever fantastical beings.',
	
		'<h3>Interesting Facts</h3>',
		() => {
			makeList([
				'Ert always faces George, and vice versa.',
				'Ert has an aurora on the equator instead of its poles.',
				'Ert has a high concentration of Yolktonium in its core.',
				'Ert is more ocean than land (just like Earth).',
				'Ert\'s four land masses are named: Northland, Southland, Weastland, and Elseland.',
				'Ert compasses have north and south, an arrow pointing upwards since east and west cancel out, and an arrow on the side of the compass to point to "else."',
				'The term for describing something related to Ert is Ertian.'
			]);
		}
	],
	categories: [{
		name: 'Coverage',
		info: [
			'For clarification, <b>coverage of Ert refers to the whole planet in question, not one particular place</b>.',

			'<h3>Aeroventures</h3>',
			'From Archive:',
			'In Nutty Business Part 1, Nut sets his plan to drill to the core of Ert to extract Yolktonium.',

			'<h3>Polyventures</h3>',
			'Not much here at the moment.',

			'<h3>ATG</h3>',
			'Not much here at the moment.',

			'<h3>Janet Odyssey</h3>',
			'In the game concept, Ert would be an early level or HUB world.',
			'In the album, Ert will be getting a unique theme. Currently it is using what would become a separate song of its own disconnected from it.'
		]
	}, {
		name: 'Planet Info',
		info: [
			'<i>Below is some more in-depth and possibly not-so-important information for those who are into that kind of thing.</i>',
			'Ert is a terrestrial planet, therefore it is rocky in composition and has a surface you can stand on. Its surface is covered in large oceans and land masses. A day on Ert lasts exactly 1 Ert day, and a year on Ert lasts exactly Ert 1 year. How useful is that? Very useful, according to scientists, probably smoking bread...',
			
			'<h3>Compared to Other Planets...</h3>',
			() => {
				makeList([
					'Ert is the third largest terrestrial planet.',
					'By size, it is the sixth largest planet.',
					'By mass, it is the seventh largest planet.',
					'By density, Ert is in third place, being surpassed by its companion George, followed by The.',
					'By distance to Ommadawn, Ert is fourth, tied with George.',
					'By difficulty to visit, Ert is the last place.',
					'By habitability, Ert is second place.',
					'By fictional planets invented, Ert is first as no other planets have made up fictional planets.',
				]);
			},
			'Due to the lack of first-placements, Ert is widely considered as a disappointment by some (and by some we mean most) planet-ranking analysts out there.',
			
			'<h3>Geography</h3>',
			'Of the four major continents, only Northland and Southland are depicted in the comics of Aeroventures and Polyventures, and little is mentioned of the others. Who knows what lives on those. On land, there are a multitude of biomes ranging from tall mountains to sprawling plains. Various climates exist on Ert. There are a few islands pockmarking the ocean, the most notable one is the Island of No Escape.',
			
			'<h3>Geology</h3>',
			'Ert has volcanism on its surface, suggesting an active interior and a molten core. Since its surface is differentiated by many large land masses, it is implied that there are plate tectonics.',
			'Ert\'s interior is differentiated by density - lighter material on its surface and denser metallic materials towards its core. The heat inside is generated by high pressures and decay of radioactive elements. Ert\'s core is said to be rich in the valuable Yolktonium, which is an ultra tough metal used mainly for defense and war machines. Yolktanium is in this case also highly valuable to sell for. Whether or not this material affects its overall density is unclear.',
			
			'<h3>Atmosphere and Climate</h3>',
			'Ert\'s temperature is cooler than George by a few degrees. Its tilt causes seasonal shifts throughout its orbit around the Hot Sun. Some claims were made of temperatures capable of melting rock, but that was debunked after careful reevaluation of the study being made on a volcano.',
			'Ert\'s atmosphere is capable of a water cycle, which involves water evaporating, having a disco party in the clouds, and then falling asleep, heading back towards the ground. Obviously that isn\'t exactly how it goes but it\'s close enough. I\'m sorry, I\'m just mad that I\'m stuck on a volcano.',
			'By Metaventures standards, Ert\'s air would be breathable by its inhabitants and hypothetically, humans.',
			
			'<h3>Magnetic Field</h3>',
			'Ert has a robust magnetic field strengthened by interactions with George. It is strong enough to deflect solar radiation and thus protect the two worlds. Despite its strength it is nowhere near as strong as the fields around its sibling planets, Mac, Hazel, or Aeiou. Strangely, its "north" magnetic pole lays exactly on the same path as the Island of No Escape.',
			'Ert\'s interaction with solar radiation allows the formation of auroras, which is seen as a ring on the north and south magnetic poles, which to clarify is on the equator. When Ert receives a DIE Burst, its poles will glow a bit more due to the ionizing radiation.',
			
			'<h3>Orbit and Rotation</h3>',
			'Ert and George are paired together at a comfortable distance from Ommadawn. Their orbit has little variation in closeness and has almost no quirky-ness at least for eccentricity and inclination. Compared to real-life Earth, the two worlds would be 90% of the distance to its star.',
			'Through the interaction with Geroge, both worlds are in a perpetual tidal lock, taking as long to rotate as it is for either to orbit each other. The day on Ert would last for a while, followed by long dark nights. Interestingly, George will be visible in the same part of the sky all-year due to this behavior. Consequently this means that George will never be visible for the opposing side. Ert has a slight tilt, therefore some parts of its year it will have a winter and a summer.',
			'Since Ert and George are a binary system, there are times where one planet passes in front of the other planet\'s shadow - occluding Ommadawn in the skies the two worlds. This is referred to as a Nap, due to the shorter span of darkness when compared to a Night. A Nap on Ert will be shorter than a Nap on George due to their size difference.',
			
			'<h3>Satellites</h3>',
			'George is predominantly the second body to Ert, making most potential orbits for smaller bodies to be nearly impossible unless there is a freak stroke of luck. To the dismay of many, Damocles is that object, and it has been observed switching back and forth - from Ert and George - from time to time. That being said, there are no natural satellites that solely orbit Ert or George.',
			'Plenty of artificial satellites have been launched, such as the Perpahedron. There is a special kind of stationary orbit around the barycenter of the Ert-George binary, which is where neither planet could dominate their pull of gravity, offering a stable place for objects to remain there.',
			
			'<h3>Life</h3>',
			'Ert consists of an uncomfortable variety of life in many forms. Obvious from looks alone. Despite that, its overall diversity is curiously less than of George, however Ert has more to its oceanic life. Ert harbors many native groups such as Reegs, Polygons, Spirons, and Florodites. Some creatures of extraterrestrial origin do inhabit such as the Psychodiacs or the Space Clowns. There is also a "ruler" of sorts of Ert.',
			
			'<h3>Symbol</h3>',
			'Ert\'s symbol represents a vessel of water, which is the counter to George\'s spire. Ert\'s symbol relating to Gerorge is the child creation let loose from George\'s strict philosophy. The water contains many curious forms of life, as to let freedom rule over formality. Ert is then seen as ever changing to whatever challenge it might endure. Ert is referred to "The Storyteller" as it is the beginning of every adventurer of Metaventures, whether hero or villain.'
		]
	}, {
		name: 'Culture',
		info: [
			'Ert\'s many, many groups have a long history of perceiving Ert as the perceivable universe. Some races like the Florodites had thought of Ert as the anchor to the Bisolar System, and an important aspect of their prophecy. Ert\'s underground sections are sometimes seen in a worse light due to affiliation with Hellven, a twisted spirit plane in the dark depths of Ert\'s core. Despite this, Ertlings still see their beloved planet as home, as it is not as strict as George, which allows Ertlings to feel rather free in doing whatever they want more than any other planet.',
			'In the Reegublic Zodiacal Calendar, Ert is the fourth month of the year. A weekend is usually spent cleaning up around participants\' living quarters as a combined effort to cleanse Ert of any residues of overnight debauchery.',

			'<h3>Exploration</h3>',
			'Although the residents Northland and Southland already have pretty muched mapped out most of their homeworld, there\'s a baffling lack of acknowledgement of the non-georgeward side that has Weastland and Elseland. Historically the georgeward side was considered hallowed ground, and those who seek to remain there would be forever blessed by George\'s light and be given power. (Not scientifically proven)',

			'<h3>Scientists\' Opinion</h3>',
			'Most scientists are pretty biased towards their homeworld, so they often confidently remark on how little they have to say about it - until someone brings up how Doug would be a better place to live on.',
			() => {
				makeQuote({
					quote: 'Ert is great, goodbye!',
					author: 'Captain Nyork\'s opinion.'
				});
			},
			() => {
				makeQuote({
					quote: 'Ehh, 6/10.',
					author: 'Douglass Irae'
				});
			}
		]
	}, {
		name: 'Gallery',
		info: [
			() => {
				makeGallery([{
					image: 'main.png',
					text: 'An image of Ert, made by Gramiatar in reality and provided by Alphabet in-universe.'
				}, {
					image: 'ert_southland.png',
					text: 'An image of Southland, made by Gramiatar.'
				}, {
					image: 'george.png',
					text: 'An image of Ert\'s sibling planet, George, made by Gramiatar in reality and provided by Alphabet in-universe.'
				}]);
			}
		]
	}],
	endnav: 'planet'
};
