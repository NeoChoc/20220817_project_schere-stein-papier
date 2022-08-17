// Definiere, wie viele Runden wir gegen den Computer spielen werden.

// Die Farbe sollte sich ändern, wenn es sich um einen Gewinn, ein Unentschieden oder eine Niederlage handelt.

// numOfRounds--20" name="numOfRounds" value="20"
// id="RoundsCounter">
// id="maxRounds">
// id="userPoints">0<
// id="computerPoints"
// id="information">
// id= selection

// id="restart">
// number of rounds

document.getElementsByClassName('toolSelection').disabled = true;
// document.getElementById('selectedScissors').disabled = true;
// document.getElementById('selectedStone').disabled = true;
// document.getElementById('selectedPaper').disabled = true;

let startGame = () => {};

document.getElementById('selectionRounds').addEventListener('click', function () {
	console.log('1');
	document.getElementById().disabled = true;
	//disable the button
	document.getElementById(BUTTON_ID).disabled = true;
	//reable the button
	document.getElementById(BUTTON_ID).removeAttribute('disabled');
	startGame();
});
