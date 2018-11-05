function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function rovnice() {
	return document.getElementById('obs').innerHTML = genRovnice();
}
function oObrazek() {
	return document.getElementById('obrazek').src = '';
}
function obrazek(pic) {
	console.log(pic);
	return document.getElementById('obrazek').src = pic;
}
function funkce() {
	return document.getElementById('obs').innerHTML = 'Je na obrázku funkce?';
}
function genRovnice() {
	var cubic = Random(0, 99);
	var sqr = Random(0,99);
	var lin = Random(0, 99);
	if(cubic == sqr && sqr == lin && lin == 0) {
		lin = 1;
	}
	if (cubic != 0) {
		if (cubic == 1) {
			cubic = "x<sup>3</sup>";
		} else {
			cubic += "x<sup>3</sup>";
		}
	} else {
		cubic = "";
	}
	if (sqr != 0) {
		if (sqr == 1) {
			sqr = "x<sup>2</sup>";
		} else {
			sqr += "x<sup>2</sup>";
		}
	} else {
		sqr = "";
	}
	if (lin != 0) {
		if (lin == 1) {
			lin = "x";
		} else {
			lin += "x";
		}
	} else {
		lin = "";
	}
	var abs = Random(0,99);
	return cubic + " + " + sqr + " + " + lin + " + " + abs + " = 0<br>x = ?";
}
function Aritmetika() {
	var pocet = Random(2, 8);
	var pole = [];
	for (let i = 0; i < pocet; i++) {
		pole[i] = Random(1, 999);
	}
	var priklad = "" + pole[0];
	for (let i = 1; i < pocet; i++) {
		var znamenko = Random(0,1);
		if(znamenko == 0) {			
			priklad += " - " + pole[i];
		} else {
			priklad += " + " + pole[i];
		}
	}
	priklad += " = ";
	return priklad;
}
/*function reseni() {
	return document.getElementById('reseni').innerHTML = <?php include 'nav.php';?>;
}*/