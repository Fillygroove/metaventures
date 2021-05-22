let quote = [
	'Maybe it was destroyed by <a href="index.html?p=wop">World of Pain</a>...',
	'Maybe it\'s in the <a href="index.html?p=taiberaque">Taiberaque</a> system...',
	'Maybe it got abducted by space clowns...',
	'Maybe <a href="index.html?p=aero">Aero</a> stole its intestines...',
	'Likely left to attend <a href="index.html?p=aero">Aero</a>\'s funeral...', // Made by Fristo
	'Perhaps it\'s one of <a href="index.html?p=the">These</a> greatest mysteries...', // Made by PS3_33
	'Maybe <a href="index.html?p=aeiou">Aeiou</a> made it explode because of its awesomeness...', // Made by PS3_33
	'Maybe it got hit by a DIE Burst... Thanks, <a href="index.html?p=doug">Doug</a>.'
];

const pageData = {
	name: 'Oops, a tasty 404!',
	introText: ['This page doesn\'t seem to exist, sadly... ' + quote[Math.floor(Math.random() * quote.length)]],
	endnav: 'chars planet'
};
