let themes = {
	default: {
		avThin: [85, 85, 85],
		topColor: [68, 68, 68],
		background: '#333333',
		infobox: '#555555',
		menus: '#444444'
	},
	cherryBlossom: {
		avThin: [216, 111, 111],
		topColor: [232, 160, 160],
		background: '#522F2F',
		infobox: '#D68383',
		menus: '#C45454'
	},
	the: {
		avThin: [143, 105, 165],
		topColor: [52, 49, 72],
		background: '#842066',
		infobox: '#3A1634',
		menus: '#3261B2'
	},
	abyss: { // By PS3_33
		avThin: [48, 48, 48],
		topColor: [89, 74, 108],
		background: '#26113F',
		infobox: '#7E57AD',
		menus: '#8d65BE'
	}
};

function updateTheme(themeName) {
	console.log(themes, themeName, themes[themeName])
	let theme = themes[themeName];

	let colorArray = theme.topColor.toString();
	
	document.documentElement.style.setProperty('--avthin', `rgba(${theme.avThin}, var(--transparency)`);
	document.documentElement.style.setProperty('--topcolor', `rgba(${colorArray}, 1)`);
	document.documentElement.style.setProperty('--background', theme.background);
	document.documentElement.style.setProperty('--infobox', theme.infobox);
	document.documentElement.style.setProperty('--menus', theme.menus);
	
	function correctHotbar() {
		if (document.body.getBoundingClientRect().top / 56 < 1 && document.body.getBoundingClientRect().top / 56 > -3) {
			dropdownDiv.style.backgroundColor = `rgba(${colorArray}, ${1 + document.body.getBoundingClientRect().top / 1792}`;
		} else if (document.body.getBoundingClientRect().top / 56 < -3) {
			dropdownDiv.style.backgroundColor = `rgba(${colorArray}, 0.91)`;
		} else dropdownDiv.style.backgroundColor = `rgba(${colorArray}, 1)`;
	};

	correctHotbar();

	window.onscroll = () => correctHotbar();
}

if (window.localStorage.theme == undefined) window.localStorage.theme = 'default';
updateTheme(window.localStorage.theme);
