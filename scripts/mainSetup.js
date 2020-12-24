let mainAVThin = document.getElementsByClassName('av-thin')[0];

let mainH1 = document.createElement('h1');
mainH1.style = 'font-family: Ubuntu;';
mainH1.innerHTML = 'Metaventures!';

let lineBreak = document.createElement('hr');

function addText(text) {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = text;
	mainAVThin.append(paragraph);
}

let mainParagraph = document.createElement('p');
mainParagraph.innerHTML = 'Welcome to the Metaventures website! Read below for more information!';

mainAVThin.append(mainH1, lineBreak, mainParagraph);

let comicsH2 = document.createElement('h2');
let comicsLine = document.createElement('hr');
comicsH2.innerHTML = 'The Comics!';

mainAVThin.append(comicsH2, comicsLine);

addText('The comics section of the website contains a collection of different comics. Currently, we only have Aeroventures, although another series, Polyventures, will be coming in a long bit.');
addText('Aeroventures is a comic series that follows the adventures of Aero, Archie, Lakys, and Aposteel, as they cause chaos around the land. The newest Aeroventure, as of now, is <a href="./comics/index.html?c=12-1" class="c">Nutty Business, Part 1</a>. A new Aeroventure, which will be Part 2 of Nutty Business, will be coming soon!</p>');

let wikiH2 = document.createElement('h2');
let wikiLine = document.createElement('hr');
wikiH2.innerHTML = 'The Wiki!';

mainAVThin.append(wikiH2, wikiLine);

addText('The Wiki section of the website contains a collection of pages that explains the world of the Aeroventures universe. As of now, there isn\'t much, but it\'s getting there.');
addText('As of now, <a href="./wiki/index.html?p=the" class="y">The</a> is being worked on. After The is finished, drafts for character pages will be worked on.</p>');

let discordH2 = document.createElement('h2');
let discordLine = document.createElement('hr');
discordH2.innerHTML = 'The Discord!';

mainAVThin.append(discordH2, discordLine);

addText('The Discord is a little invite to a server that allows you to chat with the creators of the content on this very website! The discord allows you to view changelogs, talk with other people, and more!');
