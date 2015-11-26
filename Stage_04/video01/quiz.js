function alertRandom() {
	var randomNumber = Math.floor (Math.random() * 6) + 1;	
	alert(randomNumber);
}

alertRandom();
alertRandom();
alertRandom();
alertRandom();


// Fuction Expression Form........ (Notice the semi-colon)
// _____________________________________________

/*

var alertRandom = function () {
	var randomNumber = Math.floor (Math.random() * 6) + 1;	
	alert(randomNumber);
};

alertRandom();

*/