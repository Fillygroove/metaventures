let mainAVThin = document.getElementsByClassName('av-thin')[0];

let mainH1 = document.createElement('h1');
mainH1.style = "font-family: Ubuntu;";
mainH1.innerHTML = "Metaventures!";

let lineBreak = document.createElement('hr');

let mainParagraph = document.createElement('p');
mainParagraph.innerHTML = 'Welcome to the Metaventures website! Metaventures is the name for a collective of comics and ideas, with a story art throughout througout space and time.';

let mainBreak1 = document.createElement('br');
let mainBreak2 = document.createElement('br');

mainAVThin.append(mainH1, lineBreak, mainParagraph, mainBreak1, mainBreak2);