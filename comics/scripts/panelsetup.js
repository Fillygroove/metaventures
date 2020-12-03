function generatePanels(comic) {
	let dir = `./panels/${comic}/${comic}`;
	let length;
	switch (comic) { // Done in order of release
		case "1":
		case "2":
			length = 4;
			break;
		case "3":
			length = 6;
			break;
		case "4":
			length = 3;
			break;
		case "5":
			length = 9;
			break;
		case "6":
			length = 22;
			break;
		case "7":
			length = 35;
			break;
		case "8":
			length = 36;
			break;
		case "9":
			length = 34;
			break;
		case "10":
			length = 73;
			break;
		case "10.5":
			length = 53;
			break;
		case "h":
			length = 84;
			dir = './panels/H/H';
			break;
		case "11":
			length = 106;
			break;
		case "12-1":
			length = 110;
			dir = './panels/12-1/12';
			break;
	}
	for (let i = 1; i < length + 1; i++) {
		document.write(
		`<div class="mySlides fade">` +
		`	<div class="numbertext">${i} / ${length}</div>` + 
		`	<img src="${dir}_${i}.jpg" style="width:100%">` +
		`</div>`
		);
	}
}
