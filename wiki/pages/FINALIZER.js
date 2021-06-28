for (let i = warnings.length - 1; i >= 0; i--) {
	let warning = warnings[i];
	
	let warningTable = document.createElement('table');
	
	warningTable.className = "wiki-warning";
	
	let warningCaption = document.createElement('caption');
	warningCaption.innerHTML = warning.caption;
	
	let warningBody = document.createElement('tbody');
	
	let warningTableRow = document.createElement('tr');
	warningTableRow.rows = "3";

	let warningIMGData = document.createElement('td');
	warningIMGData.rowSpan = "1";

	let warningIMG = document.createElement('img');

	warningIMG.alt = warning.image.file;
	warningIMG.src = `wiki/images/${warning.image.file}`;
	warningIMG.width = warning.image.dims[0];
	warningIMG.height = warning.image.dims[1];

	warningIMGData.append(warningIMG);

	let warningWords = document.createElement('td');
	warningWords.rowSpan = "2";

	let warningWordsPassage = document.createElement('info');
	warningWordsPassage.className = 'wiki-info';
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
	endTable.className = "wiki-navbox";
	
	let caption = document.createElement('caption');
	caption.innerHTML = table.heading;
	
	let tableBody = document.createElement('tbody');
	tableBody.style.visibility = endnavs[i].hideable ? 'collapse' : 'visible';

	for (let i = 0; i < table.categories.length; i++) {
		let tableRow = document.createElement('tr');
		
		let tableHeader = document.createElement('th');
		tableHeader.className = 'wiki-outer-table-header'
		tableHeader.innerHTML = table.categories[i].category;
		tableHeader.scope = 'row';
		
		let tableData = document.createElement('td');
		let innerTable = document.createElement('table');
		
		tableData.append(innerTable);
		
		let innerTableBody = document.createElement('tbody');
		
		for (let j = 0; j < table.categories[i].info.length; j++) {
			let innerTableRow = document.createElement('tr');
			
			let innerTableHeader = document.createElement('th');
			innerTableHeader.scope = "row";
			innerTableHeader.className = 'wiki-inner-table-header';
			innerTableHeader.innerHTML = table.categories[i].info[j].name;
			
			let innerTableData = document.createElement('td');
			
			let innerTableDiv = document.createElement('div');
			
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
		hidetext.className = 'wiki-navbox-hide-text';
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
	
	avThin.append(endTable);
}

correctLinks();
// Why would you need an execute function lmfao
if (pageData.execute != undefined) pageData.execute();
