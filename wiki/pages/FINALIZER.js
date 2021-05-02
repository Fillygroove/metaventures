for (let i = warnings.length - 1; i >= 0; i--) {
	let warning = warnings[i];
	
	let warningTable = document.createElement('table');
	
	warningTable.className = "navbox";
	warningTable.style = "width: 50%; background-color: #444444; float: right; margin: 0.4em 1em;";
	
	let warningCaption = document.createElement('caption');
	warningCaption.innerHTML = warning.caption;
	
	let warningBody = document.createElement('tbody');
	
	let warningTableRow = document.createElement('tr');
	warningTableRow.rows = "3";

	let warningIMGData = document.createElement('td');
	warningIMGData.rowSpan = "1";
	warningIMGData.style = "background-color: #444444;"

	let warningIMG = document.createElement('img');

	warningIMG.alt = warning.image.file;
	warningIMG.src = `./images/${warning.image.file}`;
	warningIMG.width = warning.image.dims[0];
	warningIMG.height = warning.image.dims[1];
	warningIMG.style = 'background-color: transparent;';

	warningIMGData.append(warningIMG);

	let warningWords = document.createElement('td');
	warningWords.rowSpan = "2";
	warningWords.style = "background-color: #444444;"

	let warningWordsPassage = document.createElement('p');
	warningWordsPassage.style = 'padding: 0px;';
	warningWordsPassage.innerHTML = warnings[i].wormbs;
	warningWords.append(warningWordsPassage);

	warningTableRow.append(warningIMGData, warningWords);

	warningBody.append(warningTableRow);
	
	warningTable.append(warningCaption, warningBody);
	
	pageHeader.append(warningTable);
}

for (let i = 0; i < endnavs.length; i++) {	
	let table = endnavs[i];
	
	let endTable = document.createElement('table');
	endTable.className = "navbox";
	endTable.style = "width: 95%;";
	
	let caption = document.createElement('caption');
	caption.innerHTML = table.heading;
	
	let tableBody = document.createElement('tbody');
	tableBody.style.visibility = endnavs[i].hideable ? 'collapse' : 'visible';

	for (let i = 0; i < table.categories.length; i++) {
		let tableRow = document.createElement('tr');
		
		let tableHeader = document.createElement('th');
		tableHeader.scope = "row";
		tableHeader.style = "padding:0.25em 1em; line-height:1.5em; text-align:center; width: 1%;"
		tableHeader.innerHTML = table.categories[i].category;
		
		let tableData = document.createElement('td');
		let innerTable = document.createElement('table');
		
		tableData.append(innerTable);
		
		let innerTableBody = document.createElement('tbody');
		
		for (let j = 0; j < table.categories[i].info.length; j++) {
			let innerTableRow = document.createElement('tr');
			
			let innerTableHeader = document.createElement('th');
			innerTableHeader.scope = "row";
			innerTableHeader.style = "padding:0.25em 1em; line-height:1.5em; text-align:center; width: 1%; white-space: nowrap;";
			innerTableHeader.innerHTML = table.categories[i].info[j].name;
			
			let innerTableData = document.createElement('td');
			
			let innerTableDiv = document.createElement('div');
			innerTableDiv.style = "text-align: left; padding-left: 8px;";
			
			for (let k = 0; k < table.categories[i].info[j].info.length; k++) {
				let innerTableSpan = document.createElement('span');
				innerTableSpan.innerHTML = table.categories[i].info[j].info[k];
				
				if (k != table.categories[i].info[j].info.length - 1) innerTableSpan.innerHTML += ' &bull; ';
				
				innerTableDiv.append(innerTableSpan);
			}
			
			innerTableData.append(innerTableDiv);
			
			innerTableRow.append(innerTableHeader, innerTableData);
			
			innerTableBody.append(innerTableRow);
		}
		
		innerTable.append(innerTableBody);
		
		tableRow.append(tableHeader, tableData);
		
		tableBody.append(tableRow);
	}
	
	if (endnavs[i].hideable == true) {
		let hidetext = document.createElement('a');
		hidetext.style = 'float: right; color: #6EC7E7; cursor: pointer; font-size: 75%; padding-right: 3px;';
		hidetext.className = 'no_style'
		hidetext.innerHTML = '<u>Show</u>';

		hidetext.onclick = () => {
			if (tableBody.style.visibility == 'visible') {
				tableBody.style.visibility = 'collapse';
				hidetext.innerHTML = '<u>Show</u>';
			} else {
				tableBody.style.visibility = 'visible';
				hidetext.innerHTML = '<u>Hide</u>';
			}
		}

		caption.append(hidetext);
	}

	endTable.append(caption, tableBody);
	
	article.append(endTable);
}

correctLinks();
