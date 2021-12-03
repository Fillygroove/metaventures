let pageData = { // First!
	name: 'Pilf',
	warning: 'quality',
	navbox: {
		file: true,
		symbol: true,
		caption: 'Illustration made by Gramiatar.',
		info: [{
			heading: 'Designations',
			info: [{
				name: 'Orbits',
				info: ['<a href="?p=hotsun">Hot Sun</a>']
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
			}]
		}, {
			heading: 'Theme',
			info: [{
				embed: {
					track: '1017471580',
					color: '7f7f7f'
				}
 			}]
		}]
	},
	introText: [
		() => {
			makeQuote({
				quote: 'NO, NO, NO! It won’t be the same with regular cheese, you dolt! It’s supposed to be specifically Piian!',
				author: 'King Arnolth'
			});
		},
		'Pilf is the third planet in the <a href="?p=hotsun">Ommadawn</a> system, after <a href="?p=doug">Doug</a> and before <a href="?p=vemma">Vemma</a> and <a href="?p=george">George</a>. Pilf is a ringed cuboid planet, standing out from all other planets for its striking purple and blue-green hue. Pilf is scenically equivalent to a filthy purple kitchen sponge - lightweight, moldy, and has flies. Its unusual properties makes it a widely appealing planet for testing theories in science, fun tourist vacations, and the highly expensive bone-cheese delicacy.',
		
		'<h3>Interesting Facts</h3>',
		() => {
			makeList([
				'Pilf is the only planet shaped like a cube.',
				'Pilf’s gravity remains spherical, despite its appearence.',
				'Pilf’s rings are made of a reflective "custard-like" substance.',
				'Pilf is one of four planets with confirmed life, the other ones being Doug, Vemma, and George.',
				'Before being officially named by Alphabet, Pilf was originally referred to as Pii by The Nyork  Administration.',
				'Pilf is the only planet with an ever changing axis of rotation.',
				'The plural of Pilf is Pilves.',
				'The term for Pilf’s inclination is a mood, similar to how types of quarks are referred to as flavors.',
				'The term for describing something related to Pilf is Piian.'
			]);
		}
	],
	categories: [{
		name: 'Coverage',
		info: [
			'Pilf will appear in AV and PV comics in the future.',
			
			'<h3>Aeroventures</h3>',
			'Not much here at the moment.',
			
			'<h3>Polyventures</h3>',
			'Not much here at the moment.',
			
			'<h3>ATG</h3>',
			'Not much here at the moment.',
			
			'<h3>Janet Odyssey</h3>',
			'In the game concept, Pilf would be a somewhat early level.',
			'Pilf has a song currently in the OST, it is an oddly composed song with temp changes and unorthodox sounds to represent the inverse and tricky nature of the planet.'
		]
	}, {
		name: 'Planet Info',
		info: [
			'Pilf is a cuboid terrestrial planet and is the only planet with that specific and unique status.',
			
			'<h3>Compared to Other Planets...</h3>',
			() => {
				makeList([
					'Pilf is the fourth biggest/smallest terrestrial planet, being the median.',
					'By size it is the eighth largest planet.',
					'By mass it is the tenth largest planet',
					'By density, Pilf is in eighth place. It is the least dense of the terrestrial worlds.',
					'By distance to Ommadawn, Pilf is third.',
					'By axial tilt, Pilf is both first and last.',
					'By habitability, Pilf is the third best.',
					'By rings, Pilf is in second behind Aeiou.'
				]);
			},
			'Pilf reigns supreme in the weird-planet category.',
			
			'<h3>Gravity</h3>',
			'Gravity on Pilf is among the weakest of the planets, besides Baeg. Its pull however remains spherical, giving rise to a dizzying experience while standing on its surface. Being on Pilf at the middle of each face would feel relatively normal, but as an individual moves closer to its edges, the downward feel of gravity soon starts to shift closer to the side, making it feel as if they are being tugged from behind. Eventually what seemed to be flat ground would feel like an ever-rising climb up an endless peak. This effect weakens once the visitor stands atop the beveled edge. If they gaze back downard, they would see one of the most terrifying height-phobic experiences anyone could imagine. ',
			'Falling from a side would be long and frankly not advised, but they would crash into the ground as gravity begins to pull them downward again. Hypothetically if Pilf had no air, theoretically one could safely fall from one side to another if they jump far enough from any standing obstacle to grab the ledge of the other side.',
			
			'<h3>Orbit and Rotation</h3>',
			'Pilf unfortunately resides after Doug and thankfully resides before George and Vemma. Its relative closeness and bright coloration makes it one of the most visible objects in the evening skies of Vemma and George thanks to its bright rings. It is slightly closer to its star compared to real-life Venus.',
			() => {
				greneAddMacron([
					'Pilf’s orbit is somewhat eccentric and inclined compared to other planets near it. This is possibly to its lower mass, being tugged often by the Vemma-George binary, Grene, and Doug.'
				]);
			},
			'Pilf’s rotation is erratic, most likely due to Vemma’s and George’s binary orbit causing its axis of rotation to look like a die rolled by a drunk mathematician calculating how many feet are in a mile. The variation in Pilf’s axis of rotation is referred to as its Mood, and is calculated by the change in the axis of rotation over time. A day can range from an hour to six Vemma days depending on what Mood Pilf has.',
			
			'<h3>Geography</h3>',
			'Pilf’s most interesting features include its purple color and its blue-green lakes on each side. Towards the center of each face, the lakes appear to bulge out due to the spherical pull of gravity. Around the lakes, there are flat plains marked with small craters and ridges. Approaching the edges, the land begins to appear more crumpled and uneven, with ever-increasing slopes until reaching a beveled plateau. Depressions on Pilf appear more stretched as they approach to the sides.',
			'Each of the six faces on Pilf have names.',
			() => {
				makeList([
					'Face of POWER',
					'Face of TOMFOOLERY',
					'Face of MICROWAVES',
					'Face of PUNGENCE',
					'Face of PIZZA PIE',
					'Face of EXPLODIUM'
				]);
			},
			'<h4>Lakes</h4>',
			'In the center of each face on Pilf are pools of blue-green fluid, the composition of which is what one could only describe as a concoction of dissolved organic material, fuming with a pungent smell which would burn off the flesh of anything nearby. They may be formed from the internal processes inside Pilf. These lakes are vast, covering the majority of the faces’ centers with depths akin to a kiddie pool. The surface of these lakes are smothered by matts of microbial colonies.',
			
			'<h4>Chimneys</h4>',
			'Pilf appears to lack any signs of the typical volcanic activity of its other rocky worlds, however on some locations there are large tubes venting out noxious gasses and occasional green liquid. These are called Chimneys, and they pockmark lower points of the Piian surface. Their existence points strongly to the residual activity inside Pilf and may be the source of its atmosphere.',

			'<h3>Geology</h3>',
			'Pilf’s interior is under a lot of debate on whether it is made of rocks, cheese, or some other low-dense yet strong organic material. Most studies suggest a liquidy interior of warm convective paste. By far the most confusing aspect of Pilf is its cubic shape, which shouldn’t be possible given the lack of any clear resisting forces that keeps itself cubic. As indicated by the uneven terrain, there may be signs of constant stress as gravity tries to squish Pilf to a much less appealing sphere.',
			
			'<h3>Magnetic Field</h3>',
			'Pilf lacks any signs of a magnetosphere, therefore being fully susceptible to cosmic rays and the solar wind from Ommadawn. Whether it may contribute to the bizarre evolution of life on Pilf is unclear.',
			
			'<h3>Atmosphere and Climate</h3>',
			'The atmosphere of Pilf envelops a dome of sorts on each side thanks again to its gravity, giving rise to a diverse environment of changing pressures from near-vacuum to a dense, soupy haze. It appears yellow-green, composed of noxious gasses and other volatiles that may explode if ignited in Vemma’s environment. In some locations, its density exceeds that of Vemma at sea level, making it possible for even heavier creatures to attempt flight with varying degrees of success.',
			'Weather on Pilf consists of humid days followed by a smelly fog coming from its lakes during night. There is no true precepitation around Pilf, however its air is so thick in moisture that any form of rain wouldn’t matter.',
			'Combined with the closeness of Ommadawn and the thickness of its atmosphere, Pilf’s climate is described as balmy and variable on location. Temperatures can reach freezing towards the edges while the interior would remain humid and uncomfortable. Pilf’s tumbling axis cancels most forms of seasonal shifts throughout its year aside from the eccentric orbit.',
			
			'<h3>Piffol Rings</h3>',
			'Pilf\'s only satellites are the Piffol Rings, a collection of ring-like objects that surround the planet. Pilf is one of the only two planets with a visible ring system, the other one being Aeiou. Each Piffol Ring is made up of a bunch of tightly packed globules of liquids that seem to have the same consistency of custard. Each ring has a different shade of color, ranging from a light orange to a deep purple, all of which are usually very saturated. There are seven confirmed rings, each one named after flavors of cheese.',
			'The reason why the ring system is named the Piffol Rings is that Piffol is a corruption of the word Piffle, which means nonsense. Hilariously, as Pilf tumbles, the rings remain stationary.',
			'Scientists have confirmed that there are no natural satellites beyond the Piffol Rings. Moons could exist between Pilf and the Piffol Rings, but there likely aren’t moons there.',
			
			'<h3>Life</h3>',
			'Pilf shows clear signs of life adapted to its environment. Although most life on Vemma or George would die in minutes thanks to the comparably alien composition. While radiation would be more dangerous than on Vemma, its thick atmosphere acts as a barrier to most of it. Due to its geography, the diversity of life on Pilf is contained on each of its faces, leading to a variety of creatures unique to one face.',
			
			'<h4>Bonestocks</h4>',
			'A Bonestock is a type of conical "tree" that grows on Pilf. They produce a fruit containing the widely sought-after Bonecheese, Ostronuts. Ostronuts are deemed so only due to their resemblance to almonds, but are texture-wise similar to a crunchy apple. Groves of Bonestocks grow in mattes around the lakes of Pilf, becoming more dispersed the farther it is from the center. Depending on how close the groves are to the center of each face, the "trees" will slant to the direction of the gravity. Groves are not found growing on the edges of the planet.',
			
			'<h4>Sawnflies</h4>',
			'Sawnflies are the insect residents of Pilf and are sometimes referred to as "Piian Flies". They are mostly harmless since they choose to feast on the Ostronuts and Cheesemoss on the insides of bonestocks. In consequence, they cause the bonestock’s seeds to become mobile, and pollinate the plants. Sawnflies have varying amounts of stomachs for the purpose of storing Cheesemoss, the only real reason Sawnflies seek Cheesemoss is because it serves as a vital ingredient in making its own eggs. Sawnflies reproduce by screaming until their skeletons melt, in which the vibration churns their cheese-storing stomachs like mortars combined with other reproductive fluids into the many eggs for the next Sawnfly generation, and vaporizing the original Sawnfly in the process. The Sawnflies are a common food source by Dimples.',
			
			'<h4>Dimples</h4>',
			'Dimples are a patient predatory species of tongue-like burrowing… things which resemble silly strings with their sticky layering. Their method of attack involves an array of small depressions of the ground nearby a bonestock grove, waiting for Sawnflies to feed. The Dimples perch themselves atop of a spring-coil made of themselves, and have an elaborate system to ensure the likelihood of catching prey is guaranteed to be living. When a Sawnfly… flies over an array, their vibrations must trigger enough depressions  in a short span of time to unwind one of the Dimples. A Dimple attacks by launching up into the air and sticking onto the Sawnfly, which causes the dazed Sawnfly to careen into other objects into the vicinity until it comes unto a halt inside the Dimple Den. The Dimple’s sticky layer then secretes digestive juices to disintegrate the Sawnfly. All that is left of the poor bastard is the skeletal remains as well as their cheese-storing stomachs, which serves as a good fertilizer in which new Cheesemoss to grow on!',
			
			'<h4>Cheesemoss</h4>',
			'Cheesemoss is a widespread low-growing form of vegetation on Pilf, playing the role of retaining moisture on the drier, colder parts of Pilf. Cheesemoss is a vital food resource for the Sawnflies and a great recycler of nutrients to the Piian grotto. Together with the Bonestocks, they make up the bulk of habitats for many varieties of Piian creatures.',

			'<h3>Symbol</h3>',
			'Pilf’s symbol represents the jeweled nazar of the skies, held by the morning and evening god of foresight. Pilf has also been labeled as "The Trickster" For its biological and orbital oddities compared against its close sibling planet, Vemma. The top line of the symbol represents an angler associated with Pilf’s entrancing properties.'
		]
	}, {
		name: 'Culture',
		info: [
			'Pilf is usually seen by residents of Vemma as an odd, simple refraction of what life on an alien planet would look like. Most Vemmalings are extremely curious of Pilf’s simple and terrifying ecosystem, as PIlf is usually subject to being taught in ecobiology classes on the subject of a stable ecosystem. Pilf had been seen as a way to navigate through the ocean using its bright shape in the sky, but this is now deemed idiotic as Pilf has a rambunctiously complicated orbit and can go wherever it likes. Some accidental discoveries have been made due to going the wrong (right?) way. Woops! The stable alternative has always been Taiberaque.',
			'However, the first thing most people think about when talking about Pilf is the delectable cheese it produces. It is an extravagant and expensive dinner that everyone wants to have, but must either be royalty or rich to have one. Royalty usually has Pilf Bone Cheese as a delicacy, however servants might just spray paint regular cheese to avoid the overwhelming cost of having one of the Nyork Administration’s Bone Cheese. ',
			'Personality-wise, Pilf has been seen as a comfort for the odd, a confirmation that being different from everyone else doesn’t make someone alone in the world. The acknowledgement of the uncanny is widely appreciated by entrepreneurs as a reminder to not harmfully distort their true views due to the pressure to conform to whatever environment they happen to be in. This way of thought has led to many abstract and innovative ideas.',
			'In the Reegublic Zodiacal Calendar, Pilf is the third month of the year. Cheese businesses across Vemma put up a sale for all of their wares. The prices will vary from a controversial 0% to an amazing 90% off - the exact values based around Pilf’s mood. On those fateful days where there is absolutely no change in value for the month, cheese-lovers out there would attempt to make their own cheese. All cheese-related products including those meant to assist making cheese also follow an exact opposite exchange of prices off as a strategic way to encourage more purchases of cheese-clothes during an "Angry Pilf."',
			'Parties on Pilf Month often showcase platters of cubed cheeses and custard desserts.',
			
			'<h3>Exploration</h3>',
			'Pilf is by far the most visited object beyond the Vemma and George binary for its relative closeness and overall easy access to its science.',
			'Several sample-return missions brought bonecheese to Vemma, which caused an insatiable appetite for such bizarre delicacies. Wealthy members of the royal families fund more missions to Pilf to extract and possibly incentivise a business around this interplanetary food, however this caused tensions for other space programs to compete to be the most ideal company for bonecheese sample-return. For the case of the Nyork Administration, they backed down these offers in fear of cross-contamination between Vemmaian and Piian life, and the rampant meddling of these delicate ecosystems.',
			'Many return missions had also given a taste of the Piffol rings, however it caused those who tried it to become ill. Even if they tried to, any form of eating of these precious ring samples is banned across most scientific institutions due to data leading to the custard being a limited resource.',
			'There is little known about Janet and the mission to Pilf. However, in general to Janet’s "Odyssey" mission, it has provided the NA with the current images and data on numerous planets.',
			
			'<h3>Scientists\' Opinion</h3>',
			'Many scientists find Pilf as the easiest excuse to send as many missions to it as possible, which gained it the reputation of being the planet that gets all of the attention. Regulations have made the N.A more open to other planets, including Doug, which had mellowed out most opinions after their decline of royal offerings for the prevention of Pilf’s lifeforms.',
			() => {
				makeQuote({
					quote: 'Farley stole my cheese.',
					author: 'Otto Bottlines (Assistant)'
				});
			},
			() => {
				makeQuote({
					quote: 'I tasted the cheese, ONCE! It didn’t taste like cheese at all, but it did taste GREAT!',
					author: 'Farley Pounzer (Daughter of Pascale, taken for "Bring-your-kid-to-work-day".)'
				});
			},
			() => {
				makeQuote({
					quote: 'Pilf is more than cheese, Pilf is a wonder for everything astro-sciences. Everyone here wants to know more about its secrets - and the rewarding sensation of knowing more about what it can do for us!',
					author: 'Pascale D. Fontaine (Lead)'
				});
			},
			() => {
				makeQuote({
					quote: 'A decent 9/10.',
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
					text: 'An image of Pilf, made by Gramiatar in reality and provided by Alphabet in-universe. The faces shown are POWER, EXPLODIUM, and PUNGENCE.'
				}, {
					image: 'pilf_alt_view.png',
					text: 'An alternate view of Pilf, made by Gramiatar in reality and provided by Alphabet in-universe. The faces shown are TOMFOOLERY, MICROWAVES, and PIZZA PIE.'
				}, {
					image: 'pilf_atmosphere.png',
					text: 'A diagram of Pilf\'s atmosphere, provided by NA. The purple part is the planet itself and the green part is the atmosphere.',
					link: '?p=pilfception'
				}, {
					image: 'pilf_ringless.png',
					text: 'Pilf, isolated.'
				}, {
					image: 'pilf_piffol_rings.png',
					text: 'The Piffol Rings, isolated.'
				}, {
					image: 'pilf_flip.png',
					text: 'An image of Flip. Flip is a fictional planet invented by Alphabet\'s Business Concern and NAS-A as an April Fools joke. The amount of Reegs who believed it is embarassing.'
				}, {
					image: 'pilf_old.png',
					text: 'Concept art for what would become Pilf.'
				}, {
					image: 'pilf_old_2.png',
					text: 'Concept art for what would become Pilf.'
				}, {
					image: 'pilf_pilfception.png',
					text: 'Irae, get out of the damn lab.'
				}, {
					image: 'pilf_weird.png',
					text: 'Literally who is this'
				}]);
			}
		]
	}],
	endnav: 'planet'
};
