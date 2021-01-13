let pageList = ['ert', 'the', 'doug', 'pilf', 'greme', 'mac', 'grene', 'credits', 'dwarf', 'hotsun', 'tackpenguin', 'aero', 'george', 'aeiou', 'taiberaque', 'berry', 'coldsun', 'wop', 'shrine', 'halloween', 'main', 'dino', 'directions', 'm', 'nine', 'debug'];

let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";

let avThin = document.getElementsByClassName('av-thin')[0];

let warnings = [];
let endnavs = [];

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false; // Holy shit this is a lifesaver
	pageScript.src = script;
	avThin.append(pageScript);
}
	
if (!pageList.includes(pageName)) pageName = '404';
addScript(`./pages/${pageName}.js`);
addScript('./pages/CONSTRUCTOR.js');
