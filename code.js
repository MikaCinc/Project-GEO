window.onload = function() {
	promena("Kvadrat")
}

function promena(value) {
	var divs = document.getElementById("wrapper").getElementsByTagName("div")
	for(var i=0; i<divs.length; i++){
		divs[i].getAttribute("id") !== value ? divs[i].style.display = "none" : divs[i].style.display = "block"
	}
}

function kvadrat(value, name) {
	var a, O, P, d
	if(name == "Stranica") {
		a = value
		O = 4*a
		P = a*a
		d = a * Math.sqrt(2)
	} else if(name == "Obim"){
		O = value
		a = O/4
		P = a*a
		d = a * Math.sqrt(2)
	} else if(name == "Površina"){
		P = value
		a = Math.sqrt(P)
		O = 4*a
		d = a * Math.sqrt(2)
	} else if(name == "Dijagonala"){
		d = value
		a = d/Math.sqrt(2)
		O = 4*a
		P = a*a
	}
	document.getElementById("kvadrat_stranica").value = a
	document.getElementById("kvadrat_obim").value = O
	document.getElementById("kvadrat_površina").value = P
	document.getElementById("kvadrat_dijagonala").value = d
}

function pravougaonik(){
	
}