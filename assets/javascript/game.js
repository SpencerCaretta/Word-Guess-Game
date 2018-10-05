// Array of possible Cartoons the game will choose from
var Cartoon = ["Animaniacs",
                "Rugrats",
                "Doug",
                "Arthur",
                "Hey Arnold",
                "Talespin",
                "Dexters Laboratory",
                "Johnny Bravo",
                "Rocket Power",
                "CatDog"];

//Choosing a Cartoon Randomly
var ranNum = Math.floor(Math.random() * Cartoon.length);
var selectedCartoon = Cartoon[ranNum];
console.log(selectedCartoon);
var underScore = [];
var rightLetter = [];
var wrongLetter = [];

//Manipulate the HTML
var underScoreManip = document.getElementsByClassName('underScore');

//Creating the correct number of underscores based on the word length
var createUnderscore = () => {
    for(var i = 0; i < selectedCartoon.length; i++) {
        underScore.push('_');
        
    }
    return underScore;
}

//Getting the guess from the player
document.addEventListener ('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);

//Code to check if the letter the player selected is in the world
    if(selectedCartoon.indexOf(keyword) > -1) {
        //If it is push to the correct section and display in the correct underscore space
        rightLetter.push(keyword);
        underScore[selectedCartoon.indexOf(keyword)] = keyword;
        underScoreManip[0].innerHTML = underScore.join('');
        //replace underscore with correct letter, if all letters are correct, alert you win!
        if(underScore.join('') == selectedCartoon) {
            alert('You Win, Congratulations!')
        }
        else {
            //Push wrong guesses to our wrong word array
            wrongLetter.push(keyword);
        }
    } 

});
//Display number of incorrect guesses the player can still have
var guessesLeft = 10;
//Display number of player wins
var wins = 0;

//If user gets all letters correct, display You Win and add 1 win to the counter

//If the user guesses == 0, display you Lose, try again, and reset the game






