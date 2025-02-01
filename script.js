var options = ["rock", "paper", "scissors"];

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var randomNum = Math.floor(Math.random() * 3);
var computerGuess = options[randomNum];

var gameResult = "";  

var result = document.getElementById("result");

var playing = true;

function playGame(choice) {


    if (playing) {
            
        console.log("Computer's choice:", computerGuess);  

        if(choice === "rock") {
            if (computerGuess === "scissors") {
                gameResult = "Player wins!";
            } else if (computerGuess === "rock") {
                gameResult = "It's a tie!";
            } else if (computerGuess === "paper") {
                gameResult = "Computer wins!";
            }
        } else if (choice === "paper") {
            if (computerGuess === "scissors") {
                gameResult = "Computer wins!";
            } else if (computerGuess === "rock") {
                gameResult = "Player wins!";
            } else if (computerGuess === "paper") {
                gameResult = "It's a tie!";
            }
        } else if (choice === "scissors") {
            if (computerGuess === "scissors") {
                gameResult = "It's a tie!";
            } else if (computerGuess === "rock") {
                gameResult = "Computer wins!";
            } else if (computerGuess === "paper") {
                gameResult = "Player wins!";
            }
        }
    }

    playing = false;

    result.innerText = gameResult;
    
    console.log(gameResult);
}
rock.addEventListener('click', function() {
    playGame("rock");
});

paper.addEventListener('click', function() {
    playGame("paper");
});

scissors.addEventListener('click', function() {
    playGame("scissors");
});

function resetGame(){
    randomNum = Math.floor(Math.random() * 3);
    computerGuess = options[randomNum]; 
    playing = true;

    result.innerText = "Choose rock, paper, or scissors to play";
        
}
