
var wins = 0;
var	losses = 0;
var guessesLeft = 9;

var yourGuesses = [];

var	alphabet = "abcdefghijklmnopqrstuvwxyz"
var randomLetters = alphabet.charAt(Math.floor(Math.random()*26))

var winElement = document.getElementById("wins")
var lossesElement = document.getElementById("losses")
var leftElement = document.getElementById("left")
var sofar = document.getElementById("sofar")

function guess(letter) {

	if (randomLetters === letter){ 
		wins = wins + 1;
		guessesLeft = 9;
		yourGuesses = [];
		randomLetters = alphabet.charAt(Math.floor(Math.random()*26)) //charAt converts a number to string; // Math.floor
    }
    
	else { 
		guessesLeft = guessesLeft - 1;
	}

	if (guessesLeft === 0){
		losses = losses + 1;
		guessesLeft = 9;
		yourGuesses = []
    }
    
    yourGuesses.push(letter)

    update()
} 

function update(){

winElement.textContent = "Wins: " + wins
lossesElement.textContent = "Losses: " + losses
leftElement.textContent = "Guesses left: " + guessesLeft
sofar.textContent = "Your guesses so far: " + yourGuesses

}

update ()

function handleKeypress(event){

    guess(event.key);}

document.addEventListener("keypress", handleKeypress) 




