let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";

let avThin = document.getElementsByClassName('av-thin')[0];

function addScript(script) {
	let pageScript = document.createElement('script');
	pageScript.async = false; // Holy shit this is a lifesaver
	pageScript.src = script;
	avThin.append(pageScript);
}
	
if (pageName != 'CONSTRUCTOR') addScript(`./pages/${pageName}.js`);
addScript(`./pages/CONSTRUCTOR.js`);
