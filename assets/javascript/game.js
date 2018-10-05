var Cartoons = ["Animaniacs",
                "Rugrats",
                "Doug",
                "Arthur",
                "Hey Arnold",
                "Talespin",
                "Dexters Laboratory",
                "Johnny Bravo",
                "Rocket Power",
                "CatDog"];
var wins = 0;
var wrongGuess = [];
var guessesLeft = 10;
var userGuesses = [];

var Hangman = Cartoons[Math.floor(Math.random() * Cartoons.length)];

var StringLength = Hangman.length

for (i = 0; i < Hangman.length; i++) {
    document.write("_")
}


document.getElementById("Hangman").innerHTML = 

document.getElementById("letter").onkeyup = function () {
    Cartoons.includes("letter");
    if Cartoons.includes("letter")
}