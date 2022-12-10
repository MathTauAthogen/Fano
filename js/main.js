var gamejs = require('gamejs');

// Preload assets

suits = ["spade","club","heart","diamond"]

for (let i = 2; i < 11; i++){
	for (let j = 0; j < 4; j++){
		gamejs.preload([suits[j] + i + ".png"])
	}
}

royals = ["ace", "jack", "queen", "king"]

for (let i = 0; i < 4; i++){
	for (let j = 0; j < 4; j++){
		gamejs.preload([suits[j] + royals[i] + ".png"])
	}
}

for (i in ["down", "joker"]){
	for (j in ["blue", "red"]){
		gamejs.preload([j + i + ".png"])
	}
}
