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

function capitalize(str) {
    let strLower = str.toLowerCase();

    let strFirstLetter = strLower.slice(0, 1);
    strFirstLetter = strFirstLetter.toUpperCase();

    let strRestOfLetters = strLower.slice(1);

    return strFirstLetter + strRestOfLetters;
}

function playerPlay() {
    let playerSelection;
    let validChoice = true;
    while (validChoice) {
        playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
        playerSelection = capitalize(playerSelection);

        if (
            (playerSelection === "Rock") ||
            (playerSelection === "Paper") ||
            (playerSelection === "Scissors")
        ) {
            validChoice = false;
        }
    }
    return playerSelection;
}

function displaySelection(playerSelection, computerSelection) {
    console.log(`You: ${playerSelection}   vs.   Computer: ${computerSelection}`);
}

playerScore = 0;
computerScore = 0;

function updateScore(num) {
    if (num === 1) {
        playerScore++;
    } else if (num === 2) {
        computerScore++;
    }
}

function playRound(playerSelection, computerSelection) {
    displaySelection(playerSelection, computerSelection);
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        updateScore(1);
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        updateScore(2);
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Rock") ||
        (playerSelection === "Paper" && computerSelection === "Paper") ||
        (playerSelection === "Scissors" && computerSelection === "Scissors")
    ) {
        return "It's a tie!";
    }
}

function declareWinner(playerScore, computerScore) {
    let displayMsg1 = "       ===== GAME RESULTS =====\n"
    let displayMsg2 = `       You: ${playerScore}   |   Computer: ${computerScore}\n`;
    if (playerScore > computerScore) {
        return displayMsg1 + displayMsg2 + "       ======= You win! =======";
    } else if (playerScore < computerScore) {
        return displayMsg1 + displayMsg2 + "       ==== Computer wins! ====";
    } else {
        return displayMsg1 + displayMsg2 + "       ===== It's a draw! =====";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("**************************************");
        console.log(`Round ${i + 1}\n`)
        console.log(playRound(playerPlay(), computerPlay()));
    }
    console.log("**************************************");
    console.log(declareWinner(playerScore, computerScore));
}

