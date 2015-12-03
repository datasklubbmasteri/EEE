var beer = 0;
var cider = 0;
var booze = 0;
var soda = 0;

var beerRate = 0.85;
var ciderRate = beerRate;
var boozeRate = 0.43;
var sodaRate = 0.5;

var beerWithRate;
var	ciderWithRate;
var boozeWithRate;
var sodaWithRate;

function submit(){
	beer = getSum(getID("beer"));
	beerWithRate = Math.round(beer * beerRate);
	
	cider = getSum(getID("cider"));
	ciderWithRate = Math.round(cider * ciderRate);
	
	booze = getSum(getID("booze"));
	boozeWithRate = Math.round(booze * boozeRate);
	
	soda = getSum(getID("soda"));
	sodaWithRate = Math.round(soda * sodaRate);
	
	showResult();
}

function showResult() {
	document.getElementById("titleRow").innerHTML = '<td class="firstCol"></td><td class="titleRow">Öl</td><td class="titleRow">Cider</td><td class="titleRow">Sprit</td><td class="titleRow">Lösk</td>';
	document.getElementById("pre").innerHTML = '<td class="firstCol">Försäljning:</td><td class="pre">'+beer+'</td><td class="pre">'+cider+'</td><td class="pre">'+booze+'</td><td class="pre">'+soda+'</td>'
	document.getElementById("post").innerHTML = '<td class="firstCol">Lagerföring:</td><td class="post">'+beerWithRate+'</td><td class="post">'+ciderWithRate+'</td><td class="post">'+boozeWithRate+'</td><td class="post">'+sodaWithRate+'</td>'
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
