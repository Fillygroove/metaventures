let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";

let avThin = document.getElementsByClassName('av-thin')[0];

let warnings = [];
let endnavs = [];

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	avThin.append(pageScript);
}
	
if (!pageList.includes(pageName)) pageName = '404';
addScript(`./pages/${pageName}.js`);
addScript('./pages/CONSTRUCTOR.js');
