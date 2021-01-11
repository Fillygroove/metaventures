let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";

let avThin = document.getElementsByClassName('av-thin')[0];

(async function scriptLoader() {
	function addScript(script) {
		let pageScript = document.createElement('script');
		pageScript.src = script;
		avThin.append(pageScript);
	}
	
	if (pageName != 'CONSTRUCTOR') await addScript(`./pages/${pageName}.js`);
	await addScript(`./pages/CONSTRUCTOR.js`);
})();
