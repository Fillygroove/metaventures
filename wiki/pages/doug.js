let pageData = {
	name: 'Doug',
	warning: 'crap',
	navbox: {
		file: true,
		symbol: true,
		caption: 'Image provided by The DeeCee, made by Gram in reality.',
		info: [{
			heading: 'Designations',
			info: [{
				name: 'Orbits',
				info: ['<a href="?p=ommadawn">Ommadawn</a>']
			}, {
				name: 'Satellites',
				info: ['Aech']
			}, {
				name: 'Name Origin',
				info: ['Unknown']
			}, {
				name: 'Classification',
				info: ['Terrestrial']
			}, {
				name: 'Life',
				info: ['Worms']
			}]
		}, {
			heading: 'Theme',
			info: [{
				embed: {
					track: '1021137457',
					color: '7f7f7f'
				}
 			}]
		}]
	},
	introText: [
		() => {
			makeQuote({
				quote: 'I\'m shocked that nobody really looked at this planet before, it\'s been left out of discussions for a long time. I haven\'t really found anything, and it\'s NOT because I HAVEN\'T been looking.',
				author: '<a href="?p=lakys">Dr. R. Lakys</a>'
			});
		},
		() => {
			greneAddMacron([
				'Doug is the second planet in the Ommadawn system, after <a href="?p=grene">Grene</a> and before <a href="?p=pilf">Pilf</a>. Doug has been referred to as the most disliked planet among scientists. Reasons include the barren planet’s landscapes or that it serves no purpose in figuring out new physics. Doug resembles a brown-yellow ball of dirt, or to some degree, a burnt chocolate chip cookie.',
			]);
		},
		'<h3>Interesting Facts</h3>',
		() => {
			makeList([
				'Doug has a moon that somewhat resembles itself and Pilf.',
				'Doug has a near-perfect circular orbit.',
				'Doug has worms inside.',
				'Doug is the culprit of a strange burst of energy known as a DIE Burst.',
				'The term for describing something related to Doug is Dougian, or Forgettable.',
				'That\'s it. That\'s all you need to know.'
			]);
		}
	],
	categories: [{
		name: 'Coverage',
		info: [
			'Doug will appear in AV and PV comics in the future.',

			'<h3>Aeroventures</h3>',
			'Not much here at the moment.',

			'<h3>Polyventures</h3>',
			'Not much here at the moment.',

			'<h3>ATG</h3>',
			'Not much here at the moment.',

			'<h3>Janet Odyssey</h3>',
			'In the game concept, Doug would be a somewhat early level.',
			'Doug has a song currently in the OST, which was inspired by types of jazz.'
		]
	}, {
		name: 'Planet Info',
		info: [
			() => {
				makeQuote({
					quote: 'When a planet becomes so boring that all other worlds feel so different, you get Doug',
					author: 'Kudos Palinski (Director of Doug Sciences or "Dee Scee")'
				})
			},
			'Doug is a terrestrial planet, meaning that it is possible to not stand on its surface.',
			
			'<h3>Compared to Other Planets...</h3>',
			() => {
				makeList([
					'Doug is the second smallest terrestrial planet.',
					'By size it is the tenth largest planet.',
					'By mass it is the ninth largest planet.',
					'By density, Doug is in fifth place.',
					'By distance to <a href="?p=ommadawn">Ommadawn</a>, Doug is second.',
					'By difficulty to visit, Doug is third.',
					'By habitability, Doug is the second worst excluding the giant planets.',
					'By difficulty to remember, Doug is first.',
					'By how rugged it is, Doug is also first.'
				]);
			},
			'Unsurprisingly, Doug\'s placement is average and unremarkable.',
			
			'<h3>Orbit and Rotation</h3>',
			'Doug resides in a balmy distance from Ommadawn, just far enough to not be melted by the heat, unfortunately. It is closer to the sun compared to real-life Mercury.',
			() => {
				greneAddMacron([
					'Doug\'s orbit is nearly a perfect circle, which is surprising considering that it would be dragged around by the other nearby planets, most noteworthy is Grene and the Vemma and George binary. The overall stability of its placement may be a lucky coincidence.'
				]);
			},
			'Doug\'s rotation is rather slow, possibly due to the way the planet was created, likely from a "cataclysmic" event. The rotation is so slow that only around one fifth of a day passes when compared to a year on Doug. If you were born on Doug, your first birthday will happen before the day ends.',
			'Doug\'s axial tilt is perpendicular to its orbit, resting at a nice 0 degrees. This means that Doug experiences no seasons.',
			'One of the few interesting side-effects of Doug\'s slow rotation is that if you avoid all warnings and stand on its surface, Ommadawn will appear to freeze in the sky at certain points of the day.',

			'<h3>Geography</h3>',
			'Doug\'s most notable features are its patches of yellows, tans, and browns. It features a few massive craters that scar the surface with dark basins. Its surface is an entirely solid landscape full of jagged mountains, ridges, plains, and craters from ancient collisions.',
			'A group of three craters (pictured at the middle-left of the image of Doug used in the infobox), which, from left to right, were codenamed Mer, Z, and Bau. These craters lack any evidence of impact, suggesting that the formation of these craters come from inside of the planet.',
			'The brighter patches seem to be older than the darker patches, hinting on Doug\'s more active past.',
			
			'<h3>Geology</h3>',
			'Given the clues on its surface, Doug may have had an active interior. It is likely that it has a crust and mantle, with a liquid core of metals. It may be porus inside.',
			
			'<h3>Magnetic Field</h3>',
			'Doug normally has a weak magnetic field, almost capable of deflecting charged particles from Ommadawn. On rare occasions, Doug emits a burst of ionizing radiation of various strengths, referred to as "DIE Bursts" (Doug Internet EMP Burst). This burst is capable of temporarily disrupting satellite communication, which gets on the nerves of NA telecommunicators.',
			'The cause of these bursts are largely understudied. They appear to be strongest within the large craters, and the trajectory of these bursts usually face towards the Vemma and George binary, sometimes even when Doug is at opposition.',
			
			'<h3>Atmosphere and Climate</h3>',
			() => {
				greneAddMacron([
					'Doug has an exosphere, which does nothing and practically does not exist. Scientists theorize that the exosphere comes from Doug capturing bits of Grene\'s ejected atmosphere. This may be the explanation of Doug\'s brown surface, being the result of gradual interactions from the trail.',
					'Surface temperatures of Doug would be blistering hot or freezing cold. Since there is no medium to have heat transfer, it would be equivalent to being in a vacuum. Climates vary little, only determined by how much light a certain part of the planet may receive. Doug\'s slow rotation would result in long days and nights, fluctuating between both extremes. Doug is considered the second-hottest planet overall, although it is still far behind Grene by a longshot.',
				]);
			},
			
			'<h3>Satellites</h3>',
			'The only confirmed moon is <a href="./?p=aech">Aech</a>, which resembles Doug but also happens to be in the shape of a cube, similar to that of Pilf. Aech is tiny and orbits barely a Doug radius away from the surface.',
			'Surrounding Doug is a dispersed asteroid field, ranging from a few meters to almost a kilometer in size. These rocks are believed to be fragments from the moon Aech as it approaches Doug and gets ripped apart by its gravity. This may form a ring around Doug.',
			
			'As Doug hasn\'t been investigated much by modern day scientists, it is unknown if more than one moon existed in the past.',
			'<h3>Life</h3>',
			'Doug\'s surface conditions are hazardous to most forms of life. Surface temperatures would burn or freeze anything that dares to traverse on its surface. Without a sufficient atmosphere or a proper form of radiation protection, most life would die.',
			'Despite the inhospitality on its surface, there are signs of worm-like creatures borrowing beneath the surface. While unconfirmed as of now, these "worms" would be the reason why there are deep holes in Doug. This theory is also applicable to Aech. This has caused many Vemlings to reference Doug in any worm related content.',
			'Most scientists would confidently say that there\'s nothing interesting to see here, and would promptly tell you to defenestrate yourself, as you are making the room hot with your breath.',

			'<h3>Symbol</h3>',
			'Doug\'s symbol represents a humbling caricature of a face, to represent Doug\'s strong stature despite the many difficulties it goes through even in research. Many Vemlings look up to Doug and refer to Doug as "The Humble" as a representation of strength during times of hardship.'
		]
	}, {
		name: 'Culture',
		info: [
			'Doug is regarded to be a moderately favored planet according to the general demographics of Vemma cultures. It is widely hated to the opinion of scientists however, claiming there is little incentive for any form of science other than protection from the notorious DIE bursts. This opinion also stems from the researchers of Doug, who were unceremoniously given the most "average" planet out of the fantastical bunch. The researchers had a notably small attention span and started the trend of despising Doug for taking their summer away.',
			'In the Reegublic Zodiacal Calendar, the second month of the year is Doug. It has been tradition for scientists to throw a "Doug Party" where they all attempt to humiliate the planet Doug for fun, whoever has the most complicated reasoning for Doug\'s inadequacy, will get boxes of chocolate chip cookies or "Doug" Cookies, referred to below.',
			'Doug has had an impact on the public outlook on worms due to the signs of similar creatures in Doug\'s caverns. Doug is a common name for a pet worm, and a species of giant VVorms is a "Douggian" Worm, referencing the massive size of Doug\'s anticipated worms. Doug Cookies are chocolate chip cookies with gummy worms poking out the sides.',

			'<h3>Exploration</h3>',
			'Doug is the least visited planet in Ommadawn system. Exploring Doug is costly and difficult, requiring a lot of maneuvers to even approach it. There is danger of potential collisions with Doug\'s asteroid field and the DIE bursts, which at this distance would be lethal for any unprepared mission.',
			'In spite of the challenging parameters, Doug has received two missions: The Forgotten Explorer, and Odyssey.',
			'The Forgotten Explorer was the first successful mission. It provided a wealth of data from all over the planet, with its biggest discoveries being the DIE bursts and the presence of worms. While it survived longer than its planned lifetime, It was eventually damaged by an unexpected DIE Burst and all communication to it was lost.',
			'There is little known about Janet and the mission to Doug. However, in general to Janet\'s "Odyssey" mission, it has provided the NA with the current images and data on numerous planets.',
			
			'<h3>Dee Scee (Doug Sciences)</h3>',
			'The Dee Scee is a pet name for the Doug Science Division of the Nyork Research Administration. The division includes people who take joy in figuring out Doug\'s mundane mysteries. In some ways, they see it as a humbling, tough little planet who is largely misunderstood. This exact sentence caused Dr. R Lakys to throw a tray of Doug Cookies into the trash and leave the division, as he had thought the Doug Sciences would help him on his outlandish plan to explode Doug with a giant space laser. Lakys was then seen in a trash bin outside the building sucking on his thumb and fired from the Nyork Administration a month afterwards due to other similar complaints which may or may not include giant space lasers. The Dee Scee contains such notable Assets as Kudos Palinski (Head), "FEON" (Forgotten Explorer Orbiter), and Janet Parhelion (Odyssey Lead).',

			'<h3>Scientists\' Opinion</h3>',
			'Stern Physicists attribute Doug to being a useless asset in their quest of discovering and proving general relativity due to its circular orbit.',
			'Ground astronomers have a general distaste for Doug due to its dull non-reflective surface, which renders it mostly invisible when viewed in the evening skies of Vemma.',
			'The Dee Scee has an overwhelming positive opinion on Doug deeming it to be just as interesting as any other planet in the Bisolar System.',
			'A quote which has been highly debated by critics yet accepted by scientists may be read below.',
			() => {
				makeQuote({
					quote: 'Doug, are you KIDDING ME? Why can\'t this damn planet make VOLCANOES already! I want to see some action, not a dead dirtball of a planet! I don\'t even want to call it a planet, it\'s just a rock. It has absolutely NO value to my research.',
					author: 'Dr. R. Lakys'
				});
			}
		]
	}, {
		name: 'Gallery',
		info: [
			() => {
				makeGallery([{
					image: 'main.png',
					text: 'An image of Doug, made by Gramiatar in reality and provided by The DeeCee in universe. This image was taken by The Forgotten Explorer, and is the only true color image of Doug that is available.'
				}, {
					image: 'doug_smooth.png',
					text: 'Artwork based off of Doug, made by Text Wall in reality and provided by The DeeCee in universe.'
				}, {
					image: 'doug_faceman.png',
					text: 'Who\'s that? What\'re they doing? Made by Text Wall.'
				}])
			}
		]
	}],
	endnav: 'planet'
};
