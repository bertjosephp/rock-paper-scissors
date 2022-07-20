let playerSelection;
let computerSelection;
playerScore = 0;
computerScore = 0;

const buttons = document.querySelectorAll('button');
const resultsContainer = document.querySelector('.results-container');

const playerChoiceContainer = document.querySelector('.player-choice-container');
playerChoiceContainer.setAttribute('style', 'font-size: 4rem; text-align: center;');

const playerScoreContainer = document.querySelector('.player-score-container');
playerScoreContainer.setAttribute('style', 'font-size: 25px; text-align: center;');

const computerChoiceContainer = document.querySelector('.computer-choice-container');
computerChoiceContainer.setAttribute('style', 'font-size: 4rem; text-align: center');

const computerScoreContainer = document.querySelector('.computer-score-container');
computerScoreContainer.setAttribute('style', 'font-size: 25px; text-align: center;');

const messageContainer = document.querySelector('.message-container');
messageContainer.setAttribute('style', 'font-size: 45px; margin: 0 auto; text-align: center');
messageContainer.textContent = "First to score 5 points wins!";

const restartButton = document.createElement('button');

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;
    switch (randomNumber) {
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors";
            break;
        default:
            computerSelection = "Error";
    }
    return computerSelection;
}

function playerPlay(e) {
    switch (e.target.classList[0]) {
        case "rock-button":
            playerSelection = "Rock";
            break;
        case "paper-button":
            playerSelection = "Paper";
            break;
        case "scissors-button":
            playerSelection = "Scissors"
            break;
    }
    return playerSelection;
}

function displaySelection(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            playerChoiceContainer.textContent = "✊";
            break;
        case "Paper":
            playerChoiceContainer.textContent = "✋";
            break;
        case "Scissors":
            playerChoiceContainer.textContent = "✌";
            break;
    }
    
    switch (computerSelection) {
        case "Rock":
            computerChoiceContainer.textContent = "✊";
            break;
        case "Paper":
            computerChoiceContainer.textContent = "✋";
            break;
        case "Scissors":
            computerChoiceContainer.textContent = "✌";
            break;
    }

    playerScoreContainer.textContent = `Your score: ${playerScore}`;
    computerScoreContainer.textContent = `Computer score: ${computerScore}`;
}

function updateScore(num) {
    if (num === 1) {
        playerScore++;
    } else if (num === 2) {
        computerScore++;
    }
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        updateScore(1);
        messageContainer.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        updateScore(2);
        messageContainer.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Rock") ||
        (playerSelection === "Paper" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Scissors")
    ) {
        messageContainer.textContent = "It's a tie!";
    }
    displaySelection(playerSelection, computerSelection);
}

function declareWinner() {
    if (playerScore > computerScore) {
        messageContainer.textContent = "You win!";
    } else if (playerScore < computerScore) {
        messageContainer.textContent = "Computer wins!";
    }
}

function endGame() {
    buttons.forEach((button) => {
        button.setAttribute('disabled', '');
    });

    restartButton.setAttribute('style', 'font-size: 45px; background-color: #092238; color: #e7eaf6');
    restartButton.setAttribute('style', 'padding: 10px 15px; margin-top: 40px; cursor: pointer');
    restartButton.textContent = "Restart";
    resultsContainer.appendChild(restartButton);
}

function restartGame() {
    restartButton.addEventListener('click', () => {
        window.location.reload();
    })
    
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = playerPlay(e);
        computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
            endGame();
            restartGame();
        }
    });
});