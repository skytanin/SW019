function appendTextByID(idName,message) {
	var pre = document.getElementById(idName);
	var textContent = document.createTextNode(message + '\n');
	pre.appendChild(textContent);
};

function setTextByID(idName,message) {
	var pre = document.getElementById(idName);
	pre.textContent=(message + "\n");
};

function setTableText(tableIdName,tableText,x,y){
	if(x > 0){
		document.getElementById(tableIdName+"_tr"+x+"_td"+y).textContent = tableText;
	}
	else{
		document.getElementById(tableIdName+"_tr"+x+"_th"+y).textContent = tableText;
	}
};

function createDiv(idName) {
	var newDiv = document.createElement("div");
	newDiv.id = idName;
	newDiv.style.width = "100%";
	newDiv.style.height = "100%";
	//newDiv.style.position = "relative";
	return newDiv;
};

function createTable(idName,x,y) {
	var newTable = document.createElement("table");
	newTable.id = idName;
	newTable.align = "right";
	newTable.style.width = "100%";
	newTable.style.height = "100%";
	newTable.valign = "middle";
	newTable.style.border = "1px solid black";
	var newTbody = document.createElement("tbody");
	for(var i=0;i<x;i++) {
		var newTr = document.createElement("tr");
		newTr.id = (idName+"_tr"+i);
		newTr.style.padding = "0";
		for(var j=0;j<y;j++) {
			if(i==0){
				var newTh = document.createElement("th");
				newTh.id = (idName+"_tr"+i+"_th"+j);
				newTh.style.padding = "0";
				newTr.appendChild(newTh);
			}
			else{
				var newTd = document.createElement("td");
				newTd.id = (idName+"_tr"+i+"_td"+j);
				newTd.align = "center";
				newTd.style.padding = "0";
				newTr.appendChild(newTd);
			}
		}
		newTbody.appendChild(newTr);
	}
	newTable.appendChild(newTbody);
	return newTable;
};







