var beverages  = [	{"name": "beer" , "text": "Öl",    "total": 0, "rate": 0.85, "withRate": 0},
					{"name": "cider", "text": "Cider", "total": 0, "rate": 0.85, "withRate": 0},
					{"name": "booze", "text": "Sprit", "total": 0, "rate": 0.43, "withRate": 0},
					{"name": "soda" , "text": "Lösk",  "total": 0, "rate": 0.5,  "withRate": 0}];

function submit(){
	for (var i = 0; i < beverages.length; i++) {
		beverages[i].total = getSum(getID(beverages[i].name));
		console.log(beverages[i].text + ": " + beverages[i].total);
		beverages[i].withRate = Math.round(beverages[i].total * beverages[i].rate);
		console.log(beverages[i].text + ": " + beverages[i].withRate);

	}	
	showResult();
}

function showResult() {
	var titleString = '<td class="firstCol"></td>';
	var preString = '<td class="firstCol">Försäljning:</td>';
	var postString = '<td class="firstCol">Lagerföring:</td>';

	for (var i = 0; i < beverages.length; i++) {
		titleString += '<td class="titleRow">'+beverages[i].text+'</td>';
		preString += '<td class="pre">'+beverages[i].total+'</td>';
		postString += '<td class="post">'+beverages[i].withRate+'</td>';
	}

	document.getElementById("titleRow").innerHTML = titleString; 
	document.getElementById("pre").innerHTML = preString;
	document.getElementById("post").innerHTML = postString;
}

function getID(id){
	return document.getElementById(id).value;
}

function getSum(str) {
	list = str.split("+");
	console.log("The List is: [" + list + "]");
	sum = 0;
	for (var i = 0; i < list.length; i++) {
		sum += parseInt(list[i]);
	}
	return sum;
}
