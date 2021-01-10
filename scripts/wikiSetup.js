let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";

let avThin = document.getElementsByClassName('av-thin')[0];

let pageScript = document.createElement('script');
pageScript.src = `./pages/${pageName}.js`;

let pageMaker = document.createElement('script');
pageMaker.src = `./pages/CONSTRUCTOR.js`;

avThin.append(pageScript, pageMaker);
