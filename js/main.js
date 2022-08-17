// _GLOBAL VARIABLES
// INPUT-FIELDS TO TOGGLE
// disable buttons until a radio button for numOfRounds is checked by user
let buttonsToToggle = [
	[(document.getElementById('selectedScissors').disabled = true)],
	[(document.getElementById('selectedStone').disabled = true)],
	[(document.getElementById('selectedPaper').disabled = true)],
	[(document.getElementById('selectedLizard').disabled = true)],
	[(document.getElementById('selectedSpock').disabled = true)],
];

// OUTPUT-FIELDS
let printCounter = document.getElementById('counter'); // current round / max rounds
let printPoints = document.getElementById('points'); // users points : computers points
let winInfo = document.getElementById('winInformation'); // info-text if win/loss

// INPUT-FIELDS
let numOfRounds = document.querySelectorAll('input[name="numOfRounds"]'); // input number of rounds (radio)

// array to fill winInfo
const sentence = [
	[('winnterT', '<p>Du hast gewonnen</p>'), ('loserT', '<p>Du hast verloren</p>')],
	['<p>Unentschieden</p>'],
	['<p><span>Schere</span>schneidet Papier</p>'],
	['<p><span>Papier</span> umhüllt Stein</p>'],
	['<p><span>Stein</span> zerquetscht Echse</p>'],
	['<p><span>Echse</span> ergiftet Spock</p>'],
	['<p><span>Spock</span> zerschlägt Schere</p>'],
	['<p><span>Schere</span>schneidet Echse</p>'],
	['<p><span>Echse</span> frisst Papier</p>'],
	['<p><span>Papier</span> entlässt Spock</p>'],
	['<p><span>Spock</span> vaporisiert Stein</p>'],
	['<p><span>Stein</span> schleift Schere</p>'],
];

// numOfRounds, userTool, randomNumber, compTool, count, userPoints, compPoints
let game = [
	['numOfRounds', 0],
	['userTool', 0],
	['randomNumber', 0],
	['compTool', 0],
	['count', 0],
	['userPoints', 0],
	['compPoints', 0],
];
const compTools = ['Schere', 'Stein', 'Papier', 'Echse', 'Spock'];

// *********************************************************
const reStart = () => {
	// disable buttons until a radio button for numOfRounds is checked by user
	buttonsToToggle = [
		[(document.getElementById('selectedScissors').disabled = true)],
		[(document.getElementById('selectedStone').disabled = true)],
		[(document.getElementById('selectedPaper').disabled = true)],
		[(document.getElementById('selectedLizard').disabled = true)],
		[(document.getElementById('selectedSpock').disabled = true)],
	];

	// set arry indizes to 0
	// numOfRounds, userTool, randomNumber, compTool, count, userPoints, compPoints
	game = [
		['numOfRounds', 0],
		['userTool', 0],
		['randomNumber', 0],
		['compTool', 0],
		['count', 0],
		['userPoints', 0],
		['compPoints', 0],
	];
};

// *********************************************************
const compare = () => {
	let result = 0;

	switch (true) {
		// anybody won
		case game[1][1] == game[3][1]:
			result = 0;
			break;
		// user won
		case game[1][1] == 'Schere' && game[3][1] == 'Papier':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Schere' && game[3][1] == 'Echse':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Stein' && game[3][1] == 'Schere':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Stein' && game[3][1] == 'Echse':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Papier' && game[3][1] == 'Stein':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Papier' && game[3][1] == 'Spock':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Echse' && game[3][1] == 'Papier':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Echse' && game[3][1] == 'Spock':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Spock' && game[3][1] == 'Schere':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		case game[1][1] == 'Spock' && game[3][1] == 'Stein':
			// increment userPoints
			game[5][1] += 1;
			result = 1;
			break;
		// computer won
		case game[3][1] == 'Schere' && game[1][1] == 'Papier':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Schere' && game[1][1] == 'Echse':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Stein' && game[1][1] == 'Schere':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Stein' && game[1][1] == 'Echse':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Papier' && game[1][1] == 'Stein':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Papier' && game[1][1] == 'Spock':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Echse' && game[1][1] == 'Papier':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Echse' && game[1][1] == 'Spock':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Spock' && game[1][1] == 'Schere':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;
		case game[3][1] == 'Spock' && game[1][1] == 'Stein':
			// increment compPoints
			game[6][1] += 1;
			result = -1;
			break;

		default:
			console.log('broken switch compare');
	}
};
// GAME
let startGame = () => {
	// check if count <= numOfRounds
	if (game[4][1] < game[0][1]) {
		game[4][1] += 1;

		// set randomNumber from 0 to 2
		game[2][1] = Math.floor(Math.random() * 5);

		// set compTool
		switch (game[2][1]) {
			case 0:
				game[3][1] = compTools[0];
				break;
			case 1:
				game[3][1] = compTools[1];
				break;
			case 2:
				game[3][1] = compTools[2];
				break;
			case 3:
				game[3][1] = compTools[3];
				break;
			case 4:
				game[3][1] = compTools[4];
				break;
			default:
		}
		// compare userTool to compTool
		compare();
		console.log(game);
		// output count / numOfRounds
		printCounter.innerHTML = ' ' + game[4][1] + ' / ' + game[0][1] + ' ';
		// output userPoints : compPoints
		printPoints.innerHTML = ' ' + game[5][1] + ' : ' + game[6][1] + ' ';
		// output info if won
		// winInfo.innerHTML = first + last;
	} else {
		console.log('Fehler');
		reStart();
	}

	return game;
};

// *********************************************************
// EVENT CLICK 'Select TOOL'
document.querySelectorAll('.selected-tool').forEach((item) => {
	item.addEventListener('click', (e) => {
		// set userTool
		game[1][1] = e.target.value;
		// start of the game
		startGame();
	});
});

// EVENT CLICK 'Select ROUNDS'
document.getElementById('roundsSelection').addEventListener('click', () => {
	// enable buttons
	buttonsToToggle = [
		[(document.getElementById('selectedScissors').disabled = false)],
		[(document.getElementById('selectedStone').disabled = false)],
		[(document.getElementById('selectedPaper').disabled = false)],
		[(document.getElementById('selectedLizard').disabled = false)],
		[(document.getElementById('selectedSpock').disabled = false)],
	];
	//  set number of rounds
	for (const n of numOfRounds) {
		if (n.checked) {
			// set numOfRounds
			game[0][1] = n.value;
		}
	}
});

// EVENT CLICK 'RESTART Game'
document.getElementById('restart').addEventListener('click', () => {
	reStart();
});
// Definiere, wie viele Runden wir gegen den Computer spielen werden.
// Die Farbe sollte sich ändern, wenn es sich um einen Gewinn, ein Unentschieden oder eine Niederlage handelt.
