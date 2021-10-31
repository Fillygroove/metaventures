function addText(text, style = '') {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = text;
	paragraph.style = style;
	avThin.append(paragraph);
}

function addHead(text) {
	let header = document.createElement('h2');
	let headerLine = document.createElement('hr');
	header.innerHTML = text;

	avThin.append(header, headerLine);
}

let mainH1 = document.createElement('h1');
mainH1.innerHTML = 'Metaventures!';
mainH1.className = 'page-header';

let lineBreak = document.createElement('hr');

avThin.append(mainH1, lineBreak);

addText('As a celebration, we have added a new comic made by Fristo, titled Heavell!', 'font-size: 25px;');
addText('<a href="./comics/?c=heavell" class="comic-link">You may read it here!</a>');
addText('WARNING - A lot of things are being reworked so most information (and even the comics) isn\'t accurate anymore.');

addText('Welcome to the Metaventures website! Read below for more information!');

addHead('The newest change!');

addText('Redesigned the site a bit! More improvements are to come!');

addHead('The Comics!');

addText('The comics section of the website contains a collection of different comics. Currently, we only have Aeroventures, although another series, Polyventures, will be coming in a long bit.');
addText('Aeroventures is a comic series that follows the adventures of Aero, Archie, Lakys, and Aposteel, as they cause chaos around the land. The newest Aeroventure, as of now, is <a href="./comics/?c=old-av-12-1" class="comic-link">Nutty Business, Part 1</a>. A new Aeroventure, which will be Part 2 of Nutty Business, will be coming soon!</p>');
addText('Aeroventures, as of now, is being re-made, so don\'t expect 12 part 2 just yet!')
addText('All comic images and icons have been lovingly provided by Text Wall, the original creator of the Aeroventures universe.');

addHead('The Wiki!');

addText('The Wiki section of the website contains a collection of pages that explains the world of the Aeroventures universe. As of now, there isn\'t much, but it\'s getting there.');
addText('Never make promises. (\'>\')');

addHead('The Discord!');

addText('The Discord is a little invite to a server that allows you to chat with the creators of the content on this very website! The discord allows you to view changelogs, talk with other people, and more!');

addText('If you would like to take a visit, go <a href="https://discord.gg/xxRvYERs48" class="link">here</a>!')

addHead('The Credits!');

addText('If you would like to see who helped out with the Metaventures world, go <a href="./wiki/?p=credits" class="link">here</a>!');
