let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";

console.log(pageName);

let warnings = [];
let endnavs = [];
	
if (!pageList.includes(pageName)) pageName = '404'; 
addScript(`./wiki/pages/${pageName}.js`);
addScript('./wiki/pages/CONSTRUCTOR.js');
