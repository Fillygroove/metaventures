let quoteNumber = Math.floor(Math.random() * 7);
let quote;
switch (quoteNumber) {
	case 0:
		quote = 'Maybe it was destroyed by <a href="index.html?p=wop">World of Pain</a>...';
		break;
	case 1:
		quote = 'Maybe it\'s in the <a href="index.html?p=taiberaque">Taiberaque</a> system...';
		break;
	case 2:
		quote = 'Maybe it got abducted by space clowns...';
		break;
	case 3:
		quote = 'Maybe <a href="index.html?p=aero">Aero</a> stole it\'s intestines...';
		break;
	case 4: // Made by Pixel Origin
		quote = 'Likely left to attend <a href="index.html?p=aero">Aero</a>\'s funeral...';
		break;
	case 5: // Made by PS3_33
		quote = 'Perhaps it\'s one of <a href="index.html?p=the">These</a> greatest mysteries...';
		break;
	case 6: // Made by PS3_33
		quote = 'Maybe <a href="index.html?p=aeiou">Aeiou</a> made it explode because of its awesomeness...';
		break;
}
	
const pageData = {
	name: 'Oops, a tasty 404!',
	introText: ['This page doesn\'t seem to exist, sadly... ' + quote],
	endnav: 'chars planet'
};
