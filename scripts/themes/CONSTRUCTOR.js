let colorArray = theme.topColor.toString();

document.documentElement.style.setProperty('--avthin', `rgba(${theme.avThin}, var(--transparency)`);
document.documentElement.style.setProperty('--topcolor', `rgba(${colorArray}, 1)`);
document.documentElement.style.setProperty('--background', theme.background);
document.documentElement.style.setProperty('--infobox', theme.infobox);
document.documentElement.style.setProperty('--menus', theme.menus);

window.onscroll = () => {
	if (document.body.getBoundingClientRect().top / 56 < 1 && document.body.getBoundingClientRect().top / 56 > -3) {
		dropdownDiv.style.backgroundColor = `rgba(${colorArray}, ${1 + document.body.getBoundingClientRect().top / 1792}`;
	} else if (document.body.getBoundingClientRect().top / 56 < -3) {
		dropdownDiv.style.backgroundColor = `rgba(${colorArray}, 0.91)`;
	} else dropdownDiv.style.backgroundColor = `rgba(${colorArray}, 1)`;
}
