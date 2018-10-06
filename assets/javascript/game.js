//DOM variables to write to webpage
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');


// Array of possible Cartoons the game will choose from
var wordBank = ["Animaniacs","Rugrats","Doug", "Arthur", "Hey Arnold",
                    "Talespin", "Dexters Laboratory", "Johnny Bravo", "Rocket Power",
                    "CatDog"];

//Number of Wins the player has
var wins = 0;
//Number of guesses the player gets
var guessesLeft = 9;

var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
//empty array for the correct letters
var guessedLetterBank = [];
//empty array for the wrong letters selected
var incorrectLetterBank = [];
    
    
function newGame() {
    //utilzing new game button to reset all info
    gameRunning = true;
    guessesLeft = 9;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];

    //Pick a new word for the new game
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Create placeholders for the new picked word - spaces if blank, _ if letter
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
            pickedWordPlaceholderArr.push(' '); 
        } else {
            pickedWordPlaceholderArr.push('_');
        }
    }

    //New Game info to DOM
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    $guessedLetters.textContent = incorrectLetterBank;
} 

//Letter Guess Function
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        // Run Our Game
        guessedLetterBank.push(letter);
        // Check if letter is in pickedWord
        for (var i = 0; i <pickedWord.length; i++) {
            //comparing letters by converting all to lower case, display capital if capital
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }

        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        checkIncorrect(letter);


    } else {
       // User did something wrong
        if (!gameRunning) {
            alert("Click on New Game Button");
        } else {
            alert("You have guessed this letter, try another.");
        }
    }
}

//IncorrectLetter Function
function checkIncorrect(letter) {
    if (
        pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1
         &&
        pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1
    ) {
        //decrese number of guesses left if incorrect
        guessesLeft--;
        //add the incorrect letter to the incorrectletterbank
        incorrectLetterBank.push(letter);
        //Write to DOM
        $guessedLetters.textContent = incorrectLetterBank.join(' ');
        $guessesLeft.textContent = guessesLeft;
    }
}

//Check for loser :(
function checkLoss() {
    if (guessesLeft === 0) {
        gameRunning = false;
        alert("You have lost. Click New Game if you want to play again.")
    }
}

//Check for winner!
function checkWin() {
    if(pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase) {
        wins++;
        gameRunning = false;
        alert("You have won.  Click New Game to play again!")
    }
}



//Event Listener for Button Click on New Game
$newGameButton.addEventListener('click', newGame);


//Onkeyup event to trigger our users Letter Guess
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}
    
    
    
    
    
    
    
    
    
    
    // //Choosing a Cartoon Randomly
    // var ranNum = Math.floor(Math.random() * Cartoon.length);
    // var selectedCartoon = Cartoon[ranNum];
    // console.log(selectedCartoon);

    // //empty array to manipulate the number of underscores
    // var underScore = [];


    // //Manipulate the HTML
    // var underScoreManip = document.getElementsByClassName('underScore');
    // var rightLetterManip = document.getElementsByClassName('rightLetter');
    // var wrongLetterManip = document.getElementsByClassName('wrongLetter');


    // //Creating the correct number of underscores based on the word length
    // var createunderScore = () => {
    //     for(var i = 0; i < selectedCartoon.length; i++) {
    //         underScore.push('_');
            
    //     }
    //     return underScore;
    // }

    // //Getting the guess from the player
    // document.addEventListener ('keypress', (event) => {
    //     var keycode = event.keyCode;
    //     var keyword = String.fromCharCode(keycode);

    // //Code to check if the letter the player selected is in the world
    //     if(selectedCartoon.indexOf(keyword) > -1) {
    //         //If it is push to the correct section and display in the correct underscore space
    //         rightLetter.push(keyword);
    //         underScore[selectedCartoon.indexOf(keyword)] = keyword;
    //         console.log(keyword);
            
            
    //         //replace underscore with correct letter, if all letters are correct, alert you win!
    //         if(underScore.join(' ') == selectedCartoon) {
    //             alert('You Win, Congratulations!')
    //             // add 1 to win counter
    //             wins++;
    //             document.getElementById("newGame").reset();

    //         }
    //         else {
    //             //Push wrong guesses to our wrong word array
    //             wrongLetter.push(keyword);
    //             wrongLetterManip[0].innerHTML = createunderScore().join(' ');
                
    //             // Decrease guesses left
    //             if(wrongLetter.push(keyword) == true) {
    //                 guessesLeft--;
    //             }
    //         }
    //         //If the user guesses == 0, display you Lose, try again, and reset the game
    //         if(guessesLeft = 0) {
    //             alert('You Lose, Try Again')
    //             document.getElementById("newGame").reset();
    //         }
    //     } 

    // });






