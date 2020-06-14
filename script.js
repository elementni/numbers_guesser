let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => Math.floor(Math.random()*10);

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {

    if (humanGuess > 9 || humanGuess < 0) {
        return alert('Please enter a number between 0 and 9');
    }

    let computerDiff = getAbsoluteDistance(targetNumber, computerGuess);
    let humanDiff = getAbsoluteDistance(targetNumber, humanGuess);

    if (humanDiff > computerDiff) {
        return false;
    } else {
        return true;
    }
}

function getAbsoluteDistance(targetNumber, guess) {

    return Math.abs(targetNumber - guess);
}

let updateScore = winner => {
    
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

let advanceRound = () => currentRoundNumber += 1;


