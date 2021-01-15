for (let i = warnings.length - 1; i >= 0; i--) {
	let warning = warnings[i];
	
	let warningTable = document.createElement('table');
	
	warningTable.className = "navbox";
	warningTable.style = "width: 50%;";
	
	let warningCaption = document.createElement('caption');
	warningCaption.innerHTML = warning.caption;
	
	let warningBody = document.createElement('tbody');
	
	let warningData = document.createElement('td');
	let warningDiv = document.createElement('div');
	let warningIMG = document.createElement('img');
	
	warningIMG.alt = warning.image.file;
	warningIMG.src = `./images/${warning.image.file}`;
	warningIMG.width = warning.image.dims[0];
	warningIMG.height = warning.image.dims[1];
	warningIMG.style = "float: left;"
	
	warningP = document.createElement('p');
	warningP.innerHTML = warning.wormbs;
	
	warningDiv.append(warningIMG, warningP);
	
	warningData.append(warningDiv);
	
	warningBody.append(warningData);
	
	warningTable.append(warningCaption, warningBody);
	
	document.getElementsByTagName('hr')[0].insertAdjacentElement('afterend', warningTable);
}

for (let i = 0; i < endnavs.length; i++) {	
	let table = endnavs[i];
	
	let endTable = document.createElement('table');
	endTable.className = "navbox";
	endTable.style = "width: 95%;";
	
	let caption = document.createElement('caption');
	caption.innerHTML = table.heading;
	
	let tableBody = document.createElement('tbody');
	
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
	
	endTable.append(caption, tableBody);
	
	article.append(endTable);
}

correctLinks();
