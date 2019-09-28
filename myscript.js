let playerPoints = 0;
let computerPoints = 0;
const result_div = document.querySelector(".result");
const user_score = document.getElementById("user-score");
const computer_score = document.getElementById("computer-score");

function computerPlay() {
    const opcoes = ["ROCK", "PAPER", "SCISSORS"];
    let item = opcoes[Math.floor(Math.random() * opcoes.length)]
    return item
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        result_div.firstElementChild.innerHTML = "It's a draw!"
        return 0;
    } else if (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) {
        result_div.firstElementChild.innerHTML = "You win! Rock beats Scissors";
        return 1;
    } else if (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) {
        result_div.firstElementChild.innerHTML = "You lose! Paper beats Rock";
        return 2;
    } else if (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) {
        result_div.firstElementChild.innerHTML = "You win! Scissors beats Paper";
        return 1;
    } else if (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) {
        result_div.firstElementChild.innerHTML = "You Lose! Rock beats Scissors";
        return 2;
    } else if (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) {
        result_div.firstElementChild.innerHTML = "You win! Paper beats Rock";
        return 1;
    } else if (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) {
        result_div.firstElementChild.innerHTML = "You lose! Scissors beats Paper";
        return 2;
    };
};

function checkPoints() {
    const reset_div = document.createElement("p");
    const resetText = document.createTextNode("Reset!")
    
    if(playerPoints + computerPoints == 5) {
        result_div.appendChild(reset_div);
        reset_div.appendChild(resetText);
        result_div.firstElementChild.innerHTML = "Restarting the game. Click on reset!"
        reset_div.addEventListener('click', function() {
            computer_score.innerHTML = 0;
            user_score.innerHTML = 0;
            playerPoints = 0;
            computerPoints = 0;
            reset_div.lastChild.remove()
        })
    }
    
}

function game(playerSelection) {
    const computerSelection = computerPlay()
    if (playRound(playerSelection, computerSelection) == 1) {
        playerPoints++;
        user_score.innerHTML = playerPoints;
    } else if (playRound(playerSelection, computerSelection) == 2) {
        computerPoints++;
        computer_score.innerHTML = computerPoints;
    };
    checkPoints();
}

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function main() {
    rock_div.addEventListener('click', function() {
        console.log("rock")
        game("rock");
    });
    paper_div.addEventListener('click', function() {
        console.log("paper")
        game("paper");
    });
    scissors_div.addEventListener('click', function() {
        console.log("scissors")
        game("scissors");
    });
}

main();







